import test from "node:test";
import assert from "node:assert/strict";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
const root = resolve(process.env.FLINT_SDK_TEST_ROOT ?? resolve(import.meta.dirname, ".."));
const { Client } = await import(pathToFileURL(resolve(root, "node/index.js")));

const request_id = "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D";
const timestamp = "2026-11-12T12:00:00Z";
const preferences = { checkout_reminders: false, shipping_updates: true, email: "buyer@example.test", customer_id: null, version: null };
const fulfillment = { created_at: timestamp, updated_at: timestamp, fulfillment_id: "ful_synthetic", order_id: "ord_synthetic", line_items: [], scheduled_start_at: null, status: "pending", type: "shipment", version: 1 };
const parcel = { created_at: timestamp, updated_at: timestamp, fulfillment_id: "ful_synthetic", order_id: "ord_synthetic", package_id: "pkg_synthetic", shipment_id: "shp_synthetic", status: "created", version: 1 };

for (const method of ["getEmailPreferences", "updateEmailPreferences", "listFulfillments", "listPackages"]) {
  test(`buyer ${method} accepts the current nullable and omitted fields`, async (t) => {
    const data = method === "listFulfillments" ? [fulfillment] : method === "listPackages" ? [parcel] : preferences;
    const client = new Client({ customerToken: "synthetic-customer-token", ambientCredentials: false,
      transport: async () => new Response(JSON.stringify({ data, request_id }), { headers: { "content-type": "application/json" } }),
    });
    t.after(() => client.close());
    const result = await client.me[method](method === "updateEmailPreferences" ? { shipping_updates: true } : {});
    if (Array.isArray(data)) {
      assert.equal(result.data[0].version, 1);
      assert.equal(Object.hasOwn(result.data[0], "supported_actions"), false);
    } else {
      assert.equal(result.customer_id, null);
      assert.equal(result.version, null);
    }
  });
}

import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
const api = JSON.parse(readFileSync(new URL("../spec/openapi.json", import.meta.url)));
const operations = Object.values(api.paths).flatMap(Object.values).filter(op => op?.operationId);
const plan = operations.find(op => op.operationId === "createSubscriptionPlan").responses["201"].content["application/json"].example.data;
// Explicitly omit retired fields even if an upstream example accidentally restores them.
delete plan.quantity_options;
const scenarios = [
  ["createLocation", "locations", "create", "location_id", "validation_status"],
  ["createProduct", "products", "create", "product_id", null],
  ["createSubscriptionPlan", "subscriptionPlans", "create", "subscription_plan_id", "quantity_options"],
  ["getSubscriptionPlan", "subscriptionPlans", "get", "subscription_plan_id", "quantity_options"],
  ["listSubscriptionPlans", "subscriptionPlans", "list", "subscription_plan_id", "quantity_options"],
];
for (const [id, resource, method, idField, retired] of scenarios) {
  const operation = operations.find(op => op.operationId === id);
  const status = method === "create" ? 201 : 200;
  const body = structuredClone(operation.responses[String(status)].content["application/json"].example);
  const data = resource === "subscriptionPlans" ? structuredClone(plan) : body.data;
  if (retired) delete data[retired];
  if (resource === "products") for (const category of data.categories) delete category.name;
  body.data = method === "list" ? [data] : data;
  const input = operation.requestBody?.content["application/json"].example ?? {};
  test(`Node ${id} decodes the current response after retired fields are removed`, async t => {
    const client = new Client({ apiKey: "synthetic-catalog-key", ambientCredentials: false,
      transport: async () => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } }) });
    t.after(() => client.close());
    const result = method === "get" ? await client[resource][method](data[idField]) : await client[resource][method](input);
    const entity = method === "list" ? result.data[0] : result;
    assert.equal(entity[idField], data[idField]);
    if (retired) assert.equal(Object.hasOwn(entity, retired), false);
    if (resource === "products") assert.equal(Object.hasOwn(entity.categories[0], "name"), false);
    assert.equal(result.lastResponse.status, status);
  });
  test(`PHP ${id} decodes the current response after retired fields are removed`, () => {
    execFileSync("php", ["-r", String.raw`
require $argv[1] . '/php/src/autoload.php';
$body = $argv[2]; $status = (int)$argv[3];
$client = new \Flint\Client(new \Flint\ClientOptions(apiKey: 'synthetic-catalog-key', ambientCredentials: false,
 transport: fn(array $request): array => ['status' => $status, 'headers' => ['content-type' => 'application/json'], 'body' => $body]));
$resource = $argv[4]; $method = $argv[5]; $field = $argv[6];
$expected = json_decode($body, true)['data']; if ($method === 'list') $expected = $expected[0];
$result = $method === 'get' ? $client->$resource->$method($expected[$field]) : $client->$resource->$method(json_decode($argv[7], true));
$entity = $method === 'list' ? $result->getData()[0] : $result;
$getter = 'get' . str_replace(' ', '', ucwords(str_replace('_', ' ', $field)));
if ($entity->$getter() !== $expected[$field]) throw new \RuntimeException('Wrong resource after decode');
$client->close();
`, root, JSON.stringify(body), String(status), resource, method, idField, JSON.stringify(input)], { timeout: 30000 });
  });
}

const routing = { inventory: { default_routing_source: { type: "fixed_location", location_id: "loc_synthetic" } } };
test("Node sends inventory.default_routing_source to the API", async t => {
  let sent;
  const client = new Client({ apiKey: "synthetic-catalog-key", ambientCredentials: false, maxAttempts: 1,
    transport: async (_url, init) => { sent = JSON.parse(init.body); return new Response("{}", { status: 400 }); } });
  t.after(() => client.close());
  await assert.rejects(client.settings.update(routing));
  assert.deepEqual(sent, routing);
});
test("PHP sends inventory.default_routing_source to the API", () => {
  const result = execFileSync("php", ["-r", String.raw`
require $argv[1] . '/php/src/autoload.php';
$sent = null;
$transport = function (array $request) use (&$sent): array { $sent = json_decode($request['body'], true); return ['status' => 400, 'headers' => ['content-type' => 'application/json'], 'body' => '{}']; };
$client = new \Flint\Client(new \Flint\ClientOptions(apiKey: 'synthetic-catalog-key', ambientCredentials: false, maxAttempts: 1, transport: $transport));
try { $client->settings->update(json_decode($argv[2], true)); } catch (\Flint\SdkError $error) {}
echo json_encode($sent, JSON_THROW_ON_ERROR); $client->close();
`, root, JSON.stringify(routing)], { timeout: 30000 });
  assert.deepEqual(JSON.parse(result), routing);
});
