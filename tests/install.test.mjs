import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdtempSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { sha256, npmPackResult, composerManifest } from "../scripts/packages.mjs";

const root = resolve(import.meta.dirname, "..");
const json = (p) => JSON.parse(readFileSync(p, "utf8"));
function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    timeout: 120000,
    maxBuffer: 16 * 1024 * 1024,
  });
  assert.equal(
    result.status,
    0,
    `${command}: ${result.error?.message ?? ""}\n${result.stdout}\n${result.stderr}`,
  );
  return result.stdout;
}

test("Git and Composer archives share exclusions and contain only the public PHP package", () => {
  const attributes = readFileSync(join(root, ".gitattributes"), "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const match = /^(\S+)\s+export-ignore$/.exec(line);
      assert.ok(match, `Unexpected archive attribute: ${line}`);
      return match[1];
    });
  const excludes = composerManifest(json(join(root, "php/composer.json"))).archive.exclude;
  assert.deepEqual(attributes.toSorted(), excludes.toSorted());
  assert.deepEqual(json(join(root, "composer.json")).archive.exclude, excludes);
  for (const path of ["/AGENTS.md", "/CLAUDE.md", "/claude", "/CONTRIBUTING.md"])
    assert.ok(excludes.includes(path), `Missing private repository exclusion: ${path}`);
  assert.ok(!excludes.includes("/MIGRATION.md"));

  const dir = mkdtempSync(join(tmpdir(), "flint-sdk-source-archive-"));
  try {
    const archive = join(dir, "source.tar");
    run("git", ["archive", "--format=tar", `--output=${archive}`, "HEAD"], root);
    const entries = run("tar", ["-tf", archive], root).split("\n").filter(Boolean);
    assert.deepEqual([...new Set(entries.map((path) => path.split("/")[0]))].sort(), [
      "CHANGELOG.md", "LICENSE", "MIGRATION.md", "README.md", "composer.json", "php",
    ]);
    assert.ok(entries.includes("php/src/Client.php"));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test(
  "npm and root Composer archives install and expose the full public SDK",
  { timeout: 300000 },
  () => {
    const dir = mkdtempSync(join(tmpdir(), "flint-sdk-install-"));
    try {
      const release = process.env.FLINT_RELEASE_DIRECTORY
        ? resolve(process.env.FLINT_RELEASE_DIRECTORY)
        : null;
      const plan = release
        ? json(join(release, "publication-plan.json"))
        : null;
      if (plan)
        for (const [name, hash] of Object.entries(plan.artifacts))
          assert.equal(sha256(readFileSync(join(release, name))), hash);
      const packed =
        plan ??
        npmPackResult(
          run(
            "npm",
            ["pack", "--ignore-scripts", "--json", "--pack-destination", dir],
            join(root, "node"),
          ),
        );
      const npmArchive = plan
        ? join(release, plan.npm)
        : join(dir, packed.filename);
      const npmEntries = run("tar", ["-tzf", npmArchive], root)
        .split("\n")
        .filter(Boolean);
      assert.ok(npmEntries.includes("package/index.js"));
      assert.ok(
        npmEntries.every(
          (path) =>
            !path.includes(".sdk-generator") &&
            !path.startsWith("package/spec/"),
        ),
      );
      const consumer = join(dir, "consumer");
      mkdirSync(consumer);
      writeFileSync(
        join(consumer, "package.json"),
        JSON.stringify({ private: true, type: "module" }),
      );
      run(
        "npm",
        ["install", "--ignore-scripts", "--no-audit", "--no-fund", npmArchive],
        consumer,
      );
      const api = json(join(root, "spec/openapi.json"));
      const operationIds = Object.values(api.paths).flatMap((item) =>
        Object.values(item).flatMap((operation) =>
          operation.operationId ? [operation.operationId] : [],
        ),
      );
      const cases = json(join(root, "tests/full-model-cases.json"));
      const config = json(join(root, "sdk.json"));
      const common = json(join(root, "spec/profiles/full-common-sdk.json"));
      const naming = common.operations;
      const approvedNames = json(join(root, "tests/release-names.json"));
      const selected = new Set(
        config.profiles.flatMap((path) => json(join(root, path)).include),
      );
      assert.deepEqual(
        operationIds.filter((id) => !selected.has(id)).sort(),
        [
          "authorizeCLIDevice",
          "authorizePartnerInstall",
          "exchangeOAuthToken",
          "listCLIContexts",
          "reauthorizeCLIDevice",
          "revokeOAuthToken",
        ],
        "Only the reviewed CLI/OAuth operations are excluded from the SDK packages",
      );
      assert.ok(
        [...selected].every((id) => operationIds.includes(id)),
        "Selected SDK operation missing from the pinned API",
      );
      const expectedMethods = [...selected].flatMap((id) => {
        const [resource, method] = approvedNames[id].split(".");
        const methods = [[resource, method]];
        if (naming[id]?.pagination ?? common.defaults?.pagination)
          methods.push([resource, method + "Items"], [resource, method + "Pages"]);
        return methods;
      });
      writeFileSync(
        join(consumer, "check.mjs"),
        `
import assert from 'node:assert/strict';
import * as sdk from '@flintpay/node';
const client = new sdk.Client({ baseUrl: 'https://api.example.invalid' });
const expected = ${JSON.stringify(expectedMethods)};
for (const [resource, method] of expected) {
  assert.equal(typeof client[resource]?.[method], 'function', resource + '.' + method);
  assert.equal(client[resource]?.[method + 'WithResponse'], undefined, resource + '.' + method + 'WithResponse');
}
for (const scenario of ${JSON.stringify(cases)}) {
  const make = () => sdk['make' + scenario.model](scenario.value);
  if (scenario.valid) make(); else assert.throws(make, scenario.name);
}
console.log('Installed npm package: all operations and model cases passed.');
`,
      );
      run(process.execPath, ["check.mjs"], consumer);

      if (!plan)
        run(
          "composer",
          [
            "archive",
            "--format=zip",
            "--dir=" + dir,
            "--file=flint-php",
            "--no-interaction",
          ],
          root,
        );
      const zip = plan
        ? join(release, plan.composer)
        : join(dir, "flint-php.zip");
      const entries = run("unzip", ["-Z1", zip], root)
        .split("\n")
        .filter(Boolean);
      assert.ok(entries.includes("composer.json"));
      assert.ok(entries.includes("php/src/Client.php"));
      assert.ok(entries.includes("LICENSE"));
      assert.ok(
        entries.every(
          (path) =>
            !/^(node\/|spec\/|tests\/|scripts\/|\.generated\/|\.tools\/|\.context\/)/.test(
              path,
            ),
        ),
        entries.join("\n"),
      );
      const metadata = json(join(root, "composer.json"));
      assert.equal(metadata.version, undefined);
      const version = json(join(root, "php/composer.json")).version;
      writeFileSync(
        join(consumer, "composer.json"),
        JSON.stringify({
          name: "flintpay/sdk-install-test",
          require: { [metadata.name]: version },
          repositories: [
            {
              type: "package",
              package: {
                ...metadata,
                version,
                dist: { type: "zip", url: pathToFileURL(zip).href },
              },
            },
            { "packagist.org": false },
          ],
        }),
      );
      run(
        "composer",
        [
          "--no-cache",
          "install",
          "--no-dev",
          "--no-interaction",
          "--no-progress",
          "--no-plugins",
          "--no-scripts",
        ],
        consumer,
      );
      writeFileSync(
        join(consumer, "check.php"),
        `<?php
require __DIR__ . '/vendor/autoload.php';
if (!(\\Flint\\defaultCredentials() instanceof \\Flint\\CredentialProvider)) throw new \\RuntimeException('Missing default credential provider');
if (!(\\Flint\\workloadIdentityCredentials(['workloadIdentityId' => 'wid_synthetic']) instanceof \\Flint\\CredentialProvider)) throw new \\RuntimeException('Missing workload identity provider');
$client = new \\Flint\\Client(new \\Flint\\ClientOptions(baseUrl: 'https://api.example.invalid'));
$expected = json_decode('${JSON.stringify(expectedMethods)}', true);
foreach ($expected as [$resource, $method]) {
  if (!method_exists($client->$resource, $method)) throw new \\RuntimeException('Missing operation: ' . $resource . '.' . $method);
  if (method_exists($client->$resource, $method . 'WithResponse')) throw new \\RuntimeException('Removed companion: ' . $resource . '.' . $method . 'WithResponse');
}
$client->close();
echo "Installed root Composer package: all operations passed.\\n";
`,
      );
      run("php", ["check.php"], consumer);
      // GitHub's Packagist archives use Git attributes, separately from composer archive.
      const attributes = run(
        "git",
        [
          "check-attr",
          "export-ignore",
          "--",
          "node",
          "spec",
          ".generated",
          "php/src/Client.php",
          "composer.json",
        ],
        root,
      );
      assert.match(attributes, /node: export-ignore: set/);
      assert.match(attributes, /spec: export-ignore: set/);
      assert.match(
        attributes,
        /php\/src\/Client.php: export-ignore: unspecified/,
      );
      assert.match(attributes, /composer.json: export-ignore: unspecified/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  },
);
