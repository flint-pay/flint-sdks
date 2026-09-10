import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdtempSync,
  mkdirSync,
  cpSync,
  writeFileSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

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
      `import fs from 'node:fs'; import path from 'node:path'; const [action,api,config,out] = process.argv.slice(2); fs.mkdirSync(out,{recursive:true}); fs.writeFileSync(path.join(out,'.sdk-generator.json'),JSON.stringify({api:fs.readFileSync(api,'utf8'),config:fs.readFileSync(config,'utf8')}));`,
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
    const record = JSON.parse(
      readFileSync(join(dir, ".generated/sdk/.sdk-generator.json")),
    );
    assert.equal(record.api, '{"original":"second"}\n');
    assert.equal(run(process.execPath, ["scripts/baseline.mjs"]), ""); // retained baseline
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
