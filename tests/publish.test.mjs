import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdtempSync,
  realpathSync,
  mkdirSync,
  cpSync,
  writeFileSync,
  readFileSync,
  existsSync,
  chmodSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { sha256 } from "../scripts/packages.mjs";

const root = resolve(import.meta.dirname, "..");
test("publication verifies version, source state and archive hashes before invoking npm", () => {
  const dir = realpathSync(mkdtempSync(join(tmpdir(), "flint-publish-test-")));
  const version = "0.2.0-beta.1";
  const npm = `flintpay-node-${version}.tgz`;
  const log = join(dir, "npm-call.json");
  const putPlan = (extra = {}) =>
    writeFileSync(
      join(dir, "release/publication-plan.json"),
      JSON.stringify({
        version,
        npmTag: "next",
        npm,
        sourceDirty: false,
        artifacts: { [npm]: sha256("reviewed tarball") },
        ...extra,
      }),
    );
  try {
    for (const path of ["scripts", "spec/profiles", "release", "bin"])
      mkdirSync(join(dir, path), { recursive: true });
    for (const file of ["sdk.mjs", "packages.mjs"])
      cpSync(join(root, "scripts", file), join(dir, "scripts", file));
    writeFileSync(join(dir, "sdk.lock.json"), "{}");
    writeFileSync(
      join(dir, "spec/profiles/full-common-sdk.json"),
      JSON.stringify({ version }),
    );
    writeFileSync(join(dir, "release", npm), "reviewed tarball");
    // Intercept npm completely; this test never contacts a registry.
    writeFileSync(
      join(dir, "bin/npm"),
      `#!${process.execPath}\nrequire('node:fs').writeFileSync(process.env.NPM_CALL_LOG, JSON.stringify(process.argv.slice(2)));\n`,
    );
    chmodSync(join(dir, "bin/npm"), 0o755);
    const invoke = (confirmed = version) =>
      spawnSync(
        process.execPath,
        [
          "scripts/sdk.mjs",
          "publish",
          "release",
          "--confirm-version",
          confirmed,
        ],
        {
          cwd: dir,
          encoding: "utf8",
          env: {
            ...process.env,
            PATH: join(dir, "bin") + ":" + process.env.PATH,
            NPM_CALL_LOG: log,
          },
        },
      );
    for (const invalid of [
      { sourceDirty: true },
      { npmTag: "latest" },
      { version: "0.2.0-beta.2" },
      { artifacts: { [npm]: "0".repeat(64) } },
    ]) {
      putPlan(invalid);
      const result = invoke();
      assert.notEqual(result.status, 0);
      assert.equal(existsSync(log), false, result.stdout + result.stderr);
    }
    putPlan();
    const result = invoke();
    assert.equal(result.status, 0, result.stderr);
    const args = JSON.parse(readFileSync(log));
    assert.deepEqual(args, [
      "publish",
      join(dir, "release", npm),
      "--ignore-scripts",
      "--access",
      "public",
      "--registry=https://registry.npmjs.org",
      "--tag",
      "next",
    ]);
    assert.equal(
      JSON.parse(readFileSync(join(dir, "release/publication.json"))).version,
      version,
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
