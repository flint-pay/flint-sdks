import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadContract } from "../.tools/sdk-generator/dist/index.js";
import { runtimeContract } from "../.tools/sdk-generator/dist/target-plan.js";
import { compileRuntimePlan } from "../.tools/sdk-generator/dist/runtime-plan.js";

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
      if (["get", "head", "options"].includes(verb)) {
        assert.equal(config.retry.maxAttempts, 1, operation.operationId);
        assert.deepEqual(config.retry.statuses, [], operation.operationId);
        assert.equal(config.retry.transport, false, operation.operationId);
      } else assert.equal(config.retry, undefined, operation.operationId);
      if (supported) {
        count++;
        assert.equal(config.idempotency.header, header.name);
        assert.equal(config.idempotency.auto, false);
      }
    }
  }
  assert.equal(count, 324);
});

test("pickup discovery compiles checkout authentication declared by the public API", () => {
  const api = json("../spec/openapi.json");
  const common = json("../spec/profiles/full-common-sdk.json");
  const checkout = json("../spec/profiles/full-checkout-sdk.json");
  const merchant = json("../spec/profiles/full-merchant-sdk.json");
  const operation = api.paths["/v1/delivery-previews"].post;
  assert.equal(operation.operationId, "createDeliveryPreview");
  assert.ok(operation.security.some(requirement =>
    Object.hasOwn(requirement, "CheckoutSessionIDHeader") &&
    Object.hasOwn(requirement, "CheckoutSessionSecretHeader")));
  assert.ok(checkout.include.includes(operation.operationId));

  const dir = mkdtempSync(join(tmpdir(), "flint-pickup-auth-"));
  try {
    const profile = join(dir, "sdk.json");
    writeFileSync(profile, JSON.stringify({
      ...common,
      include: [operation.operationId],
      auth: { modes: { ...merchant.auth.modes, ...checkout.auth.modes } },
      operations: { [operation.operationId]: common.operations[operation.operationId] },
    }));
    const contract = loadContract(fileURLToPath(new URL("../spec/openapi.json", import.meta.url)), profile);
    const descriptor = compileRuntimePlan(runtimeContract(contract)).operations.find(item => item.id === operation.operationId);
    assert.deepEqual(descriptor.authModes, ["merchant", "checkout"]);
    assert.equal(descriptor.path, "/v1/delivery-previews");
    assert.equal(descriptor.idempotency, undefined);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
