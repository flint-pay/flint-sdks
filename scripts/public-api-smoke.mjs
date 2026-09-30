import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Client, SdkError } from "../node/index.js";

const root = resolve(import.meta.dirname, "..");
const baseUrl = "https://api.staging.withflintpay.com";
const client = new Client({
  baseUrl,
  apiKey: "flint_test_invalid_sdk_smoke",
  maxAttempts: 1,
});
const results = [];
try {
  const response = await client.specification.get({ version: "2026-09-07" });
  assert.equal(response.meta.status, 200);
  assert.ok(response.data.openapi.startsWith("3."));
  const ids = (spec) =>
    Object.values(spec.paths)
      .flatMap((path) =>
        Object.values(path)
          .filter(
            (op) =>
              op &&
              typeof op === "object" &&
              typeof op.operationId === "string",
          )
          .map((op) => op.operationId),
      )
      .sort();
  const pinned = JSON.parse(
    await readFile(resolve(root, "spec/openapi.json"), "utf8"),
  );
  const actual = ids(response.data);
  const expected = ids(pinned);
  results.push({
    name: "versioned public API specification via generated client",
    status: "PASS",
    operations: actual.length,
  });
  results.push({
    name: "deployed operation inventory matches pinned generation input",
    status:
      JSON.stringify(actual) === JSON.stringify(expected) ? "PASS" : "FAIL",
    missing: expected.filter((id) => !actual.includes(id)),
    added: actual.filter((id) => !expected.includes(id)),
  });
  await assert.rejects(
    client.customers.list({ page_size: 1 }),
    (e) =>
      e instanceof SdkError && e.status === 401 && e.kind === "authentication",
  );
  results.push({
    name: "invalid API key returns a typed authentication error",
    status: "PASS",
  });
} catch (error) {
  results.push({
    name: "public API smoke",
    status: "FAIL",
    kind: error instanceof SdkError ? error.kind : error.name,
    httpStatus: error instanceof SdkError ? error.status : undefined,
    code: error instanceof SdkError ? error.code : undefined,
  });
} finally {
  await client.close();
  await mkdir(resolve(root, ".context"), { recursive: true, mode: 0o700 });
  const report = {
    at: new Date().toISOString(),
    baseUrl,
    readOnly: true,
    results,
  };
  await writeFile(
    resolve(root, ".context/public-api-smoke.json"),
    JSON.stringify(report, null, 2) + "\n",
    { mode: 0o600 },
  );
  console.log(JSON.stringify(report, null, 2));
  if (results.some((r) => r.status !== "PASS")) process.exitCode = 1;
}
