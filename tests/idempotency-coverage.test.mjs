// Checks the compiled Node and PHP policies against Flint's public API contract
// (docs/public-api-contract.md, Idempotency and Errors) read from the pinned OpenAPI.
// The expectations here are computed independently of scripts/profiles.mjs.
import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadContract } from "../.tools/sdk-generator/dist/index.js";
import { runtimeContract } from "../.tools/sdk-generator/dist/target-plan.js";
import { compileRuntimePlan } from "../.tools/sdk-generator/dist/runtime-plan.js";
import { deriveProfile } from "../scripts/profiles.mjs";
import { formatted } from "../scripts/packages.mjs";
import * as nodeDescriptorData from "../node/descriptors/data.js";
import nodeSettings from "../node/descriptors/settings.js";
import { Client } from "../node/index.js";

const json = (path) =>
  JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const api = json("../spec/openapi.json");
const common = json("../spec/profiles/full-common-sdk.json");
const KEY_PATTERN =
  /^flint-sdk-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const ENVELOPELESS = [429, 500, 502, 503, 504];

/** Contract expectations for every exported operation. */
function expectations() {
  const result = new Map();
  for (const item of Object.values(api.paths))
    for (const [verb, operation] of Object.entries(item)) {
      if (!operation?.operationId) continue;
      const header = (operation.parameters ?? []).find(
        (p) => p.in === "header" && p.name.toLowerCase() === "idempotency-key",
      );
      const cls = header ? (header.required ? "required" : "optional") : "none";
      if (verb === "get") assert.equal(cls, "none", operation.operationId);
      const sameRequest = new Set();
      for (const [status, response] of Object.entries(
        operation.responses ?? {},
      ))
        for (const media of Object.values(response.content ?? {}))
          for (const example of [
            media.example,
            ...Object.values(media.examples ?? {}).map((e) => e.value),
          ])
            if (example?.error?.remediation?.retry === "same_request")
              sameRequest.add(Number(status));
      result.set(operation.operationId, {
        verb: verb.toUpperCase(),
        cls,
        replaySafe: verb === "get" || cls !== "none",
        sameRequest,
      });
    }
  return result;
}

function nodeDescriptors() {
  const operations = new Map();
  for (const value of Object.values(nodeDescriptorData)) {
    if (typeof value !== "string" || !value.startsWith("[{")) continue;
    for (const descriptor of JSON.parse(value))
      if (descriptor && typeof descriptor.id === "string" && descriptor.verb)
        operations.set(descriptor.id, descriptor);
  }
  return operations;
}

function phpDescriptors() {
  const directory = new URL(
    "../php/src/descriptors/resources/",
    import.meta.url,
  );
  const operations = new Map();
  for (const name of readdirSync(directory).filter((n) => n.endsWith(".json")))
    for (const descriptor of JSON.parse(
      readFileSync(new URL(name, directory), "utf8"),
    ).operations)
      operations.set(descriptor.id, descriptor);
  return operations;
}

test("profile retry and idempotency settings are derived from the pinned OpenAPI", () => {
  assert.equal(
    formatted(deriveProfile(api, common)),
    readFileSync(
      new URL("../spec/profiles/full-common-sdk.json", import.meta.url),
      "utf8",
    ),
    "Run npm run profiles and commit the result.",
  );
});

for (const [runtime, load, settings] of [
  ["Node", nodeDescriptors, () => nodeSettings],
  ["PHP", phpDescriptors, () => json("../php/src/descriptors/settings.json")],
]) {
  test(`${runtime} compiled policies follow each route's idempotency class and retry contract`, () => {
    assert.deepEqual(settings().errors.retry, {
      path: "error.remediation.retry",
      retryValues: ["same_request"],
    });
    const expected = expectations();
    const compiled = load();
    const counts = { optional: 0, required: 0, none: 0, retrying: 0 };
    assert.equal(compiled.size, 606);
    for (const [id, descriptor] of compiled) {
      const contract = expected.get(id);
      assert.ok(contract, `${id} is not in the pinned OpenAPI`);
      assert.equal(descriptor.verb, contract.verb, id);
      counts[contract.cls]++;
      const { idempotency, retry } = descriptor;
      if (contract.cls === "none")
        assert.equal(idempotency, undefined, `${id} must not send a key`);
      else {
        assert.equal(idempotency?.header, "Idempotency-Key", id);
        if (contract.cls === "optional") {
          assert.equal(idempotency.auto, true, `${id} must mint a key`);
          assert.equal(idempotency.autoKeyPrefix, "flint-sdk-", id);
        } else {
          // A minted key lasts one call; required routes need the caller's saved key.
          assert.equal(idempotency.auto, false, `${id} must not mint a key`);
          assert.ok(
            descriptor.parameters.some(
              (p) =>
                p.in === "header" && p.name === "Idempotency-Key" && p.required,
            ),
            `${id} must require the caller's key`,
          );
        }
      }
      assert.ok(
        !retry.statuses.includes(409) && !retry.statuses.includes(412),
        id,
      );
      if (contract.replaySafe) {
        assert.equal(retry.maxAttempts, 3, `${id} must retry`);
        assert.equal(retry.transport, true, id);
        assert.deepEqual(retry.statuses, ENVELOPELESS, id);
        assert.ok(
          retry.baseDelayMs > 0 && retry.maxDelayMs >= retry.baseDelayMs,
        );
        counts.retrying++;
      } else {
        assert.equal(retry.maxAttempts, 1, `${id} must be sent once`);
        assert.equal(retry.transport, false, id);
        assert.deepEqual(retry.statuses, [], id);
      }
      // Errors the contract marks same_request must be retryable on replay-safe calls.
      if (contract.replaySafe && contract.sameRequest.size)
        assert.ok(
          retry.maxAttempts > 1,
          `${id} compiles same_request as one attempt`,
        );
    }
    assert.deepEqual(counts, {
      optional: 298,
      required: 33,
      none: 275,
      retrying: 597,
    });
  });
}

const errorBody = (status, code, retry) =>
  new Response(
    JSON.stringify({
      error: {
        code,
        message: "Synthetic error.",
        type: status >= 500 ? "api_error" : "invalid_request_error",
        request_id: "req_01JAAAAAAAAAAAAAAAAAAAAAAA",
        remediation: { retry, next_steps: "Synthetic guidance." },
      },
    }),
    { status, headers: { "content-type": "application/json" } },
  );

function scripted(...responses) {
  const calls = [];
  const transport = async (url, init) => {
    const headers = new Headers(init.headers);
    calls.push({
      url: String(url),
      method: init.method,
      key: headers.get("idempotency-key"),
    });
    const next = responses.shift();
    if (!next) throw new Error("Unexpected extra attempt");
    return next();
  };
  return {
    calls,
    client: new Client({ transport, apiKey: "synthetic-api-key" }),
  };
}

test("Node optional writes mint one flint-sdk- key and reuse it across same_request retries", async () => {
  const { client, calls } = scripted(
    () => errorBody(503, "SERVICE_UNAVAILABLE", "same_request"),
    () => errorBody(409, "ACTION_NOT_ALLOWED", "none"),
  );
  const error = await client.payouts.cancel("po_synthetic").catch((e) => e);
  assert.equal(error.status ?? error.meta?.status, 409);
  assert.equal(calls.length, 2);
  assert.match(calls[0].key, KEY_PATTERN);
  assert.equal(calls[1].key, calls[0].key);
  assert.equal(error.idempotencyKey, calls[0].key);

  const second = scripted(() => errorBody(409, "ACTION_NOT_ALLOWED", "none"));
  await assert.rejects(second.client.payouts.cancel("po_synthetic"));
  assert.match(second.calls[0].key, KEY_PATTERN);
  assert.notEqual(second.calls[0].key, calls[0].key);
});

test("Node required writes send only the caller's key and retry with it", async () => {
  const { client, calls } = scripted(
    () => errorBody(500, "INTERNAL_ERROR", "same_request"),
    () => errorBody(409, "ACTION_NOT_ALLOWED", "none"),
  );
  const error = await client.creditNotes
    .issue("cn_synthetic", undefined, { idempotencyKey: "synthetic-saved-key" })
    .catch((e) => e);
  assert.equal(calls.length, 2);
  assert.deepEqual(
    calls.map((call) => call.key),
    ["synthetic-saved-key", "synthetic-saved-key"],
  );
  assert.equal(error.idempotencyKey, "synthetic-saved-key");

  const unkeyed = scripted();
  await assert.rejects(unkeyed.client.creditNotes.issue("cn_synthetic"));
  assert.equal(unkeyed.calls.length, 0);
});

test("Node retries honor the remediation signal and send none-class writes once", async () => {
  const vetoed = scripted(() => errorBody(503, "SERVICE_UNAVAILABLE", "none"));
  await assert.rejects(vetoed.client.payouts.cancel("po_synthetic"));
  assert.equal(vetoed.calls.length, 1);

  const read = scripted(
    () => new Response("proxy error", { status: 502 }),
    () => errorBody(404, "RESOURCE_NOT_FOUND", "none"),
  );
  await assert.rejects(read.client.payouts.get("po_synthetic"));
  assert.equal(read.calls.length, 2);
  assert.equal(read.calls[0].key, null);

  const lookup = scripted(() =>
    errorBody(503, "SERVICE_UNAVAILABLE", "same_request"),
  );
  await assert.rejects(
    lookup.client.giftCards.lookup({ code: "SYNTHETIC-CODE" }),
  );
  assert.equal(lookup.calls.length, 1);
  assert.equal(lookup.calls[0].key, null);
});

test("PHP optional writes mint one flint-sdk- key and reuse it across same_request retries", () => {
  const source = `require getcwd().'/php/src/autoload.php';
$keys = [];
$responses = [[503, 'SERVICE_UNAVAILABLE', 'same_request'], [409, 'ACTION_NOT_ALLOWED', 'none']];
$transport = function ($request) use (&$keys, &$responses) {
    $keys[] = array_change_key_case($request['headers'])['idempotency-key'] ?? null;
    [$status, $code, $retry] = array_shift($responses) ?? [599, 'UNEXPECTED', 'none'];
    return ['status'=>$status, 'headers'=>['content-type'=>'application/json'], 'body'=>json_encode(['error'=>['code'=>$code, 'message'=>'Synthetic error.', 'type'=>'api_error', 'request_id'=>'req_01JAAAAAAAAAAAAAAAAAAAAAAA', 'remediation'=>['retry'=>$retry, 'next_steps'=>'Synthetic guidance.']]])];
};
$client = new \\Flint\\Client(new \\Flint\\ClientOptions(transport: $transport, apiKey: 'synthetic-api-key'));
try { $client->payouts->cancel('po_synthetic'); exit(2); } catch (\\Flint\\SdkError $e) { $error = $e; }
if (count($keys) !== 2 || $keys[0] !== $keys[1]) exit(3);
if (!preg_match('/^flint-sdk-[0-9a-f-]{36}$/', $keys[0])) exit(4);
if ($error->idempotencyKey !== $keys[0]) exit(5);
echo 'ok';`;
  const result = spawnSync("php", ["-r", source], {
    cwd: fileURLToPath(new URL("..", import.meta.url)),
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.equal(result.stdout, "ok");
});

test("pickup discovery compiles checkout authentication declared by the public API", () => {
  const checkout = json("../spec/profiles/full-checkout-sdk.json");
  const merchant = json("../spec/profiles/full-merchant-sdk.json");
  const operation = api.paths["/v1/delivery-previews"].post;
  assert.equal(operation.operationId, "createDeliveryPreview");
  assert.ok(
    operation.security.some((requirement) =>
      Object.hasOwn(requirement, "CheckoutSessionBearer"),
    ),
  );
  assert.ok(checkout.include.includes(operation.operationId));

  const dir = mkdtempSync(join(tmpdir(), "flint-pickup-auth-"));
  try {
    const profile = join(dir, "sdk.json");
    writeFileSync(
      profile,
      JSON.stringify({
        ...common,
        include: [operation.operationId],
        auth: { modes: { ...merchant.auth.modes, ...checkout.auth.modes } },
        operations: {
          [operation.operationId]: common.operations[operation.operationId],
        },
      }),
    );
    const contract = loadContract(
      fileURLToPath(new URL("../spec/openapi.json", import.meta.url)),
      profile,
    );
    const descriptor = compileRuntimePlan(
      runtimeContract(contract),
    ).operations.find((item) => item.id === operation.operationId);
    assert.deepEqual(descriptor.authModes, ["merchant", "checkout"]);
    assert.equal(descriptor.path, "/v1/delivery-previews");
    assert.equal(descriptor.idempotency, undefined);
    assert.equal(descriptor.retry.maxAttempts, 1);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
