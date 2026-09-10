import { spawnSync } from "node:child_process";
import {
  mkdirSync,
  existsSync,
  readFileSync,
  writeFileSync,
  rmSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { sha256, json, formatted, publishedFiles } from "./packages.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);
const lock = json("sdk.lock.json");
const generator = resolve(".tools/sdk-generator");
const output = resolve(".generated/sdk");
const profile = json("spec/profiles/full-common-sdk.json");
const version = profile.version;
const command = process.argv[2];
const args = process.argv.slice(3);
const run = (executable, argv, options = {}) => {
  const result = spawnSync(executable, argv, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  });
  if (result.error || result.status !== 0)
    throw new Error(
      `${executable} ${argv.join(" ")}\n${result.error?.message ?? ""}\n${result.stderr ?? ""}\n${result.stdout?.slice(-6000) ?? ""}`,
    );
  return result.stdout;
};
function verifyInputs() {
  if (sha256(readFileSync("spec/openapi.json")) !== lock.api.sha256)
    throw new Error(
      "OpenAPI hash differs from sdk.lock.json. Pin the source revision and hash together.",
    );
  if (profile.apiVersion.value !== lock.api.version)
    throw new Error("Flint-Version must match the pinned API version.");
  if (!existsSync(join(generator, "dist/cli.js")))
    throw new Error("Run npm run setup first.");
  if (
    run("git", ["rev-parse", "HEAD"], { cwd: generator }).trim() !==
    lock.generator.revision
  )
    throw new Error(
      "Generator revision differs from sdk.lock.json. Run npm run setup.",
    );
  if (run("git", ["status", "--porcelain"], { cwd: generator }).trim())
    throw new Error("Generator checkout has local modifications.");
}
function cli(action, ...argv) {
  verifyInputs();
  mkdirSync(".generated/logs", { recursive: true });
  console.log(`Generator: ${action}…`);
  const result = run(process.execPath, [
    "--max-old-space-size=3072",
    join(generator, "dist/cli.js"),
    action,
    ...argv,
  ]);
  writeFileSync(`.generated/logs/${action}.json`, result);
  return JSON.parse(result);
}
function generate(check = false) {
  verifyInputs();
  run(process.execPath, ["scripts/baseline.mjs"], { stdio: "inherit" });
  const report = cli("generate", "spec/openapi.json", "sdk.json", output);
  const desired = publishedFiles(output);
  const previous = existsSync("sdk-files.json") ? json("sdk-files.json") : {};
  const differences = [];
  for (const [path, content] of desired) {
    if (!existsSync(path) || !readFileSync(path).equals(content))
      differences.push(path);
  }
  for (const path of Object.keys(previous))
    if (!desired.has(path) && existsSync(path)) differences.push(path);
  const hashes = Object.fromEntries(
    [...desired]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, content]) => [path, sha256(content)]),
  );
  if (
    !existsSync("sdk-files.json") ||
    readFileSync("sdk-files.json", "utf8") !== formatted(hashes)
  )
    differences.push("sdk-files.json");
  if (check && differences.length)
    throw new Error(
      `Generated packages are stale. Run npm run generate and commit:\n${differences.join("\n")}`,
    );
  if (!check) {
    // Refuse to discard hand edits to files managed by the previous generation.
    for (const path of differences.filter((p) => p !== "sdk-files.json")) {
      if (
        previous[path] &&
        existsSync(path) &&
        sha256(readFileSync(path)) !== previous[path]
      )
        throw new Error(
          `Hand edit detected in ${path}. Move custom code outside generated files before regenerating.`,
        );
    }
    for (const path of Object.keys(previous)) {
      if (
        !/^(node\/|php\/|composer\.json$|LICENSE$)/.test(path) ||
        path.split("/").includes("..")
      )
        throw new Error(`Invalid generated file path: ${path}`);
      if (!desired.has(path)) rmSync(path, { force: true });
    }
    for (const [path, content] of desired) {
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, content);
    }
    writeFileSync("sdk-files.json", formatted(hashes));
  }
  console.log(
    `${check ? "Verified" : "Generated"} Node and PHP packages (${desired.size} files).`,
  );
  if (report.compatibility?.length)
    console.log(
      `Review ${report.compatibility.length} compatibility findings in .generated/logs/generate.json.`,
    );
}
function validate() {
  cli("validate", output, "--fixtures", "tests/full-http-cases.json");
  run("composer", ["validate", "--strict", "--no-check-publish"], {
    stdio: "inherit",
  });
  console.log("Package validation and shared Node/PHP HTTP fixtures passed.");
}
function prepare() {
  generate(true);
  validate();
  const destination = resolve("releases", version);
  if (existsSync(destination))
    throw new Error(
      `${destination} already exists. Release contents are immutable; use a new version or move an unpublished preparation aside.`,
    );
  // Retain the generator's compatibility gate and documentation preparation.
  cli("release", output, join(destination, "generator"));
  console.log(`Prepared generator artifacts in ${destination}.`);
  // Build public archives from the repository layout, including npm repository metadata
  // and the root Composer manifest. These are the archives installed by consumers.
  const npm = JSON.parse(
    run(
      "npm",
      ["pack", "--ignore-scripts", "--json", "--pack-destination", destination],
      { cwd: resolve("node") },
    ),
  )[0];
  run(
    "composer",
    [
      "archive",
      "--format=zip",
      "--dir=" + destination,
      "--file=flintpay-flint-" + version,
      "--no-interaction",
    ],
    { stdio: "inherit" },
  );
  const artifacts = [npm.filename, "flintpay-flint-" + version + ".zip"];
  const plan = {
    version,
    tag: "v" + version,
    npmTag: version.includes("-") ? "next" : "latest",
    commit: run("git", ["rev-parse", "HEAD"]).trim(),
    sourceDirty: Boolean(run("git", ["status", "--porcelain"]).trim()),
    generator: lock.generator,
    api: lock.api,
    artifacts: Object.fromEntries(
      artifacts.map((name) => [
        name,
        sha256(readFileSync(join(destination, name))),
      ]),
    ),
    npm: npm.filename,
    composer: artifacts[1],
  };
  writeFileSync(join(destination, "publication-plan.json"), formatted(plan));
  console.log(
    `Public archives and checksums: ${destination}/publication-plan.json`,
  );
}
function publish() {
  const [directory, flag, confirmed] = args;
  if (
    !directory ||
    flag !== "--confirm-version" ||
    !confirmed ||
    args.length !== 3
  )
    throw new Error(
      "Usage: npm run release:publish -- releases/VERSION --confirm-version VERSION",
    );
  const destination = resolve(directory);
  const plan = json(join(destination, "publication-plan.json"));
  if (plan.sourceDirty !== false)
    throw new Error(
      "This release was prepared from uncommitted changes. Commit the reviewed changes and prepare again before publishing.",
    );
  if (confirmed !== plan.version || confirmed !== version)
    throw new Error(
      "Confirmed version must match the prepared release and SDK configuration.",
    );
  if (plan.npmTag !== (confirmed.includes("-") ? "next" : "latest"))
    throw new Error("Invalid npm release tag.");
  if (
    plan.npm !== `flintpay-node-${confirmed}.tgz` ||
    !Object.hasOwn(plan.artifacts, plan.npm)
  )
    throw new Error("Unexpected npm artifact.");
  for (const [name, hash] of Object.entries(plan.artifacts)) {
    if (
      !/^[A-Za-z0-9_.-]+$/.test(name) ||
      sha256(readFileSync(join(destination, name))) !== hash
    )
      throw new Error(`Release artifact failed checksum verification: ${name}`);
  }
  run(
    "npm",
    [
      "publish",
      join(destination, plan.npm),
      "--ignore-scripts",
      "--access",
      "public",
      "--registry=https://registry.npmjs.org",
      "--tag",
      plan.npmTag,
    ],
    { stdio: "inherit" },
  );
  writeFileSync(
    join(destination, "publication.json"),
    formatted({
      version: confirmed,
      registry: "https://registry.npmjs.org",
      publishedAt: new Date().toISOString(),
    }),
  );
  console.log(
    "npm publication succeeded. Packagist reads the matching Git tag through its GitHub integration.",
  );
}
try {
  if (command === "setup") {
    mkdirSync(".tools", { recursive: true });
    if (!existsSync(generator))
      run("git", ["clone", lock.generator.repository, generator], {
        stdio: "inherit",
      });
    if (run("git", ["status", "--porcelain"], { cwd: generator }).trim())
      throw new Error("Generator checkout has local modifications.");
    run("git", ["fetch", "origin", lock.generator.revision], {
      cwd: generator,
      stdio: "inherit",
    });
    run("git", ["checkout", "--detach", lock.generator.revision], {
      cwd: generator,
      stdio: "inherit",
    });
    run("npm", ["ci"], { cwd: generator, stdio: "inherit" });
    run("npm", ["run", "build"], { cwd: generator, stdio: "inherit" });
  } else if (command === "diagnose")
    console.log(cli("diagnose", "spec/openapi.json", "sdk.json"));
  else if (command === "preview") {
    const report = cli("preview", "spec/openapi.json", "sdk.json", output);
    console.log(
      `${report.changes.length} proposed changes. See .generated/logs/preview.json.`,
    );
  } else if (command === "generate" || command === "check")
    generate(command === "check");
  else if (command === "validate") validate();
  else if (command === "release") prepare();
  else if (command === "publish") publish();
  else throw new Error("Unknown SDK command. See package.json scripts.");
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
