import test from "node:test";
import assert from "node:assert/strict";
import {
  composerManifest,
  nodeManifest,
  npmPackResult,
} from "../scripts/packages.mjs";

test("npm pack accepts legacy and npm 12 JSON reports and rejects invalid archives", () => {
  const packed = { filename: "flintpay-node-3.0.0-beta.20261007031000.tgz" };
  assert.deepEqual(npmPackResult(JSON.stringify([packed])), packed);
  assert.deepEqual(
    npmPackResult(JSON.stringify({ "@flintpay/node": packed })),
    packed,
  );
  for (const report of [
    null,
    [],
    {},
    [packed, packed],
    { a: packed, b: packed },
    [{ filename: "../unsafe.tgz" }],
    [{ filename: 42 }],
  ]) {
    assert.throws(
      () => npmPackResult(JSON.stringify(report)),
      /Expected one npm pack archive/,
    );
  }
});

test("Composer root manifest relocates every supported autoload path and derives its version from tags", () => {
  const result = composerManifest({
    name: "flintpay/flint",
    version: "0.2.0-beta.1",
    require: { "ext-curl": "*" },
    autoload: {
      files: ["src/Runtime.php", "src/Client.php"],
      classmap: ["custom/"],
      "psr-4": { "Flint\\": ["src/", "custom/"] },
    },
  });
  assert.equal(result.version, undefined);
  assert.deepEqual(result.autoload.files, [
    "php/src/Runtime.php",
    "php/src/Client.php",
  ]);
  assert.deepEqual(result.autoload.classmap, ["php/custom/"]);
  assert.deepEqual(result.autoload["psr-4"]["Flint\\"], [
    "php/src/",
    "php/custom/",
  ]);
  assert.equal(result.require["ext-curl"], "*");
  assert.ok(result.archive.exclude.includes("/node"));
  assert.ok(result.archive.exclude.includes("/.generated"));
});

test("npm metadata identifies this release repository without changing package exports", () => {
  const source = {
    name: "@flintpay/node",
    version: "0.2.0-beta.1",
    exports: { ".": { import: "./index.js" } },
  };
  const result = nodeManifest(source);
  assert.equal(
    result.repository.url,
    "https://github.com/flint-pay/flint-sdks.git",
  );
  assert.equal(result.repository.directory, "node");
  assert.deepEqual(result.exports, source.exports);
});
