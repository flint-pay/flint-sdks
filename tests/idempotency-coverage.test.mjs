import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const json = path => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
test("every write declaring Idempotency-Key supports the option without automatic retries or generated keys", () => {
  const api = json("../spec/openapi.json");
  const common = json("../spec/profiles/full-common-sdk.json");
  const overrides = json("../sdk.json");
  let count = 0;
  for (const item of Object.values(api.paths)) {
    for (const [verb, operation] of Object.entries(item)) {
      if (!operation.operationId) continue;
      const config = { ...common.operations[operation.operationId], ...overrides.operations[operation.operationId] };
      const header = (operation.parameters ?? []).find(p => p.in === "header" && p.name.toLowerCase() === "idempotency-key");
      const supported = ["post", "put", "patch", "delete"].includes(verb) && !!header;
      assert.equal(!!config.idempotency, supported, operation.operationId);
      assert.equal(config.retry, undefined, operation.operationId);
      if (supported) {
        count++;
        assert.equal(config.idempotency.header, header.name);
        assert.equal(config.idempotency.auto, false);
      }
    }
  }
  assert.equal(count, 278);
});
