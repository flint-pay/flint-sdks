import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdtempSync,
  mkdirSync,
  cpSync,
  writeFileSync,
  readFileSync,
  existsSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";

const root = resolve(import.meta.dirname, "..");
test("clean checkouts reconstruct the latest earlier release from Git, preserving the original inputs", () => {
  const dir = mkdtempSync(join(tmpdir(), "flint-baseline-"));
  function run(cmd, args) {
    const r = spawnSync(cmd, args, { cwd: dir, encoding: "utf8" });
    assert.equal(r.status, 0, r.stderr + r.stdout);
    return r.stdout;
  }
  const put = (path, content) =>
    writeFileSync(
      join(dir, path),
      typeof content === "string" ? content : JSON.stringify(content),
    );
  try {
    for (const path of [
      "scripts",
      "spec/profiles",
      ".tools/sdk-generator/dist",
    ])
      mkdirSync(join(dir, path), { recursive: true });
    for (const file of ["baseline.mjs", "packages.mjs"])
      cpSync(join(root, "scripts", file), join(dir, "scripts", file));
    // The actual generator version comparator is small and reused unchanged.
    const comparator = readFileSync(
      join(root, ".tools/sdk-generator/dist/version.js"),
      "utf8",
    )
      .split("export function checkVersionPolicy")[0]
      .replace(/^import .*\n/, "");
    put(".tools/sdk-generator/package.json", { type: "module" });
    put(".tools/sdk-generator/dist/version.js", comparator);
    put(
      ".tools/sdk-generator/dist/cli.js",
      `import fs from 'node:fs';
import path from 'node:path';
const [action,api,config,out] = process.argv.slice(2);
const version = JSON.parse(fs.readFileSync(path.join(path.dirname(config),'spec/profiles/full-common-sdk.json'))).version;
const record = {
  api: fs.readFileSync(api,'utf8'),
  config: fs.readFileSync(config,'utf8'),
  interface: { version },
  compiled: { version, synthetic: true },
  baseline: { kind: 'draft' },
};
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'.sdk-generator.json'),JSON.stringify(record));
fs.writeFileSync(path.join(out,'artifact.txt'),'published SDK');
const count='.generated/baseline-builds.txt';
fs.writeFileSync(count,String(Number(fs.existsSync(count)?fs.readFileSync(count,'utf8'):0)+1));`,
    );
    put(
      ".tools/sdk-generator/dist/index.js",
      `import fs from 'node:fs';
import path from 'node:path';
export function setCompatibilityBaseline(output, mode) {
  if (mode !== 'released') throw new Error('Expected released adoption');
  if (fs.existsSync('.generated/fail-baseline-adoption')) throw new Error('Synthetic baseline adoption failure');
  const file = path.join(output,'.sdk-generator.json');
  const record = JSON.parse(fs.readFileSync(file));
  record.baseline = { kind: 'released', interface: record.interface, compiled: record.compiled };
  fs.writeFileSync(file,JSON.stringify(record));
  const count='.generated/baseline-adoptions.txt';
  fs.writeFileSync(count,String(Number(fs.existsSync(count)?fs.readFileSync(count,'utf8'):0)+1));
}`,
    );
    put(".gitignore", ".tools/\n.generated/\n");
    put("sdk.lock.json", { generator: { revision: "a".repeat(40) } });
    put("sdk.json", { profiles: ["spec/profiles/full-common-sdk.json"] });
    put("spec/openapi.json", '{"original":"first"}\n');
    put("spec/profiles/full-common-sdk.json", { version: "0.2.0-beta.1" });
    run("git", ["init", "-q"]);
    run("git", ["config", "user.name", "SDK Test"]);
    run("git", ["config", "user.email", "sdk-test@example.invalid"]);
    run("git", ["add", "."]);
    run("git", ["commit", "-qm", "first beta"]);
    run("git", ["tag", "v0.2.0-beta.1"]);
    put("spec/openapi.json", '{"original":"second"}\n');
    put("spec/profiles/full-common-sdk.json", { version: "0.2.0-beta.2" });
    run("git", ["add", "."]);
    run("git", ["commit", "-qm", "second beta"]);
    run("git", ["tag", "v0.2.0-beta.2"]);
    put("spec/profiles/full-common-sdk.json", { version: "0.2.0" });
    run(process.execPath, ["scripts/baseline.mjs"]);
    const marker = JSON.parse(
      readFileSync(join(dir, ".generated/baseline.json")),
    );
    assert.equal(marker.tag, "v0.2.0-beta.2");
    assert.match(marker.recordHash, /^[0-9a-f]{64}$/);
    const record = JSON.parse(
      readFileSync(join(dir, ".generated/sdk/.sdk-generator.json")),
    );
    assert.equal(record.api, '{"original":"second"}\n');
    assert.deepEqual(record.interface, { version: "0.2.0-beta.2" });
    assert.deepEqual(record.baseline, {
      kind: "released",
      interface: record.interface,
      compiled: record.compiled,
    });
    assert.equal(
      readFileSync(join(dir, ".generated/baseline-adoptions.txt"), "utf8"),
      "1",
    );
    assert.equal(run(process.execPath, ["scripts/baseline.mjs"]), ""); // retained baseline
    const cached = join(
      dir,
      ".generated/baselines",
      marker.commit,
      "sdk/.sdk-generator.json",
    );
    assert.deepEqual(JSON.parse(readFileSync(cached)), record);
    const recordHash = () =>
      createHash("sha256").update(readFileSync(cached)).digest("hex");
    assert.equal(marker.recordHash, recordHash());
    // Candidate records and package files must never become the next baseline,
    // including when the unpublished candidate's version changes.
    for (const version of ["0.2.0", "0.2.1"]) {
      put("spec/profiles/full-common-sdk.json", { version });
      put(".generated/sdk/.sdk-generator.json", {
        api: '{"candidate":"unpublished"}',
        version,
      });
      put(".generated/sdk/artifact.txt", "candidate SDK");
      put(".generated/sdk/candidate-only.txt", "candidate artifact");
      assert.equal(run(process.execPath, ["scripts/baseline.mjs"]), "");
      assert.deepEqual(
        JSON.parse(
          readFileSync(join(dir, ".generated/sdk/.sdk-generator.json")),
        ),
        record,
      );
      assert.equal(
        readFileSync(join(dir, ".generated/sdk/artifact.txt"), "utf8"),
        "published SDK",
      );
      assert.equal(
        existsSync(join(dir, ".generated/sdk/candidate-only.txt")),
        false,
      );
      assert.deepEqual(JSON.parse(readFileSync(cached)), record);
    }
    assert.equal(
      readFileSync(join(dir, ".generated/baseline-builds.txt"), "utf8"),
      "1",
    );
    // Upgrade a hash-verified old draft cache without adopting the working draft.
    const draft = { ...record, baseline: { kind: "draft" } };
    writeFileSync(cached, JSON.stringify(draft));
    const draftHash = recordHash();
    put(".generated/baseline.json", { ...marker, recordHash: draftHash });
    const candidate = {
      api: '{"candidate":"unpublished"}',
      baseline: { kind: "draft" },
    };
    put(".generated/sdk/.sdk-generator.json", candidate);
    put(".generated/fail-baseline-adoption", "fail");
    const adoptionFailure = spawnSync(
      process.execPath,
      ["scripts/baseline.mjs"],
      {
        cwd: dir,
        encoding: "utf8",
      },
    );
    assert.notEqual(adoptionFailure.status, 0);
    assert.match(adoptionFailure.stderr, /Synthetic baseline adoption failure/);
    assert.deepEqual(JSON.parse(readFileSync(cached)), draft);
    assert.equal(
      JSON.parse(readFileSync(join(dir, ".generated/baseline.json")))
        .recordHash,
      draftHash,
    );
    assert.deepEqual(
      JSON.parse(readFileSync(join(dir, ".generated/sdk/.sdk-generator.json"))),
      candidate,
    );
    rmSync(join(dir, ".generated/fail-baseline-adoption"));
    run(process.execPath, ["scripts/baseline.mjs"]);
    assert.deepEqual(JSON.parse(readFileSync(cached)), record);
    assert.deepEqual(
      JSON.parse(readFileSync(join(dir, ".generated/sdk/.sdk-generator.json"))),
      record,
    );
    const migratedMarker = JSON.parse(
      readFileSync(join(dir, ".generated/baseline.json")),
    );
    assert.equal(migratedMarker.recordHash, recordHash());
    assert.notEqual(migratedMarker.recordHash, draftHash);
    assert.equal(migratedMarker.tag, marker.tag);
    assert.equal(migratedMarker.commit, marker.commit);
    assert.equal(
      readFileSync(join(dir, ".generated/baseline-builds.txt"), "utf8"),
      "3",
    );
    assert.equal(
      readFileSync(join(dir, ".generated/baseline-adoptions.txt"), "utf8"),
      "2",
    );
    // A changed private record cannot silently redefine the published contract.
    writeFileSync(cached, JSON.stringify({ ...draft, api: "changed cache" }));
    const failure = spawnSync(process.execPath, ["scripts/baseline.mjs"], {
      cwd: dir,
      encoding: "utf8",
    });
    assert.notEqual(failure.status, 0);
    assert.match(
      failure.stderr,
      /Cached published SDK baseline record has changed/,
    );
    assert.deepEqual(
      JSON.parse(readFileSync(join(dir, ".generated/sdk/.sdk-generator.json"))),
      record,
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
