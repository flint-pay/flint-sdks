import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const exec = promisify(execFile);
const root = resolve(
  process.env.FLINT_SDK_TEST_ROOT ?? resolve(import.meta.dirname, ".."),
);
const { Client, errors } = await import(pathToFileURL(resolve(root, "node/index.js")));
const categories = {
  explicit: "service_fee",
  inherited: null,
  future: "future_category",
  invalid: false,
};

function deliveryMethod(id) {
  const configuration = {
    estimate: { type: "none" },
    minimum_option_lifetime_seconds: 0,
    origin: { type: "fixed_location", location_id: "loc_test" },
    pricing: { type: "calculated", calculated: {} },
    selection_guarantee_seconds: 0,
    taxable: null,
  };
  if (id !== "omitted") configuration.charge_tax_category = categories[id];
  return {
    data: {
      delivery_method_id: id,
      current_delivery_method_revision_id: "dmetr_test",
      name: "Synthetic delivery method",
      status: "active",
      subscription_counts: { active: 0, past_due: 0, paused: 0 },
      version: 1,
      type: "shipment",
      display_position: 0,
      configuration,
      created_at: "2026-10-06T00:00:00Z",
      updated_at: "2026-10-06T00:00:00Z",
    },
    request_id: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D",
  };
}

async function transport(t) {
  const requests = [];
  const server = createServer((req, res) => {
    requests.push({
      method: req.method,
      path: req.url,
      auth: req.headers.authorization,
      version: req.headers["flint-version"],
    });
    const id = req.url.split("/").at(-1);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(deliveryMethod(id)));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(() => {
    server.closeAllConnections();
    server.close();
  });
  return { requests, baseUrl: `http://127.0.0.1:${server.address().port}` };
}

function verifyRequests(requests) {
  assert.deepEqual(
    requests.map((req) => req.path),
    [
      "explicit",
      "inherited",
      "future",
      "omitted",
      "invalid",
    ].map((id) => `/v1/delivery-methods/${id}`),
  );
  for (const req of requests) {
    assert.equal(req.method, "GET");
    assert.equal(req.auth, "Bearer delivery-null-test");
    assert.equal(req.version, "2026-09-07");
  }
}

test("Node deliveryMethods.get preserves inherited null through the HTTP transport", async (t) => {
  const { requests, baseUrl } = await transport(t);
  const client = new Client({
    baseUrl,
    allowInsecureHttp: true,
    apiKey: "delivery-null-test",
  });
  t.after(() => client.close());
  for (const id of ["explicit", "inherited", "future"]) {
    const value = await client.deliveryMethods.get(id);
    for (const payload of [value, value.lastResponse.body.data]) {
      assert.equal(payload.delivery_method_id, id);
      assert.ok(Object.hasOwn(payload.configuration, "charge_tax_category"));
      assert.equal(payload.configuration.charge_tax_category, categories[id]);
      assert.equal(payload.configuration.taxable, null);
      assert.equal(payload.configuration.minimum_option_lifetime_seconds, 0);
    }
  }
  for (const id of ["omitted", "invalid"]) {
    await assert.rejects(
      client.deliveryMethods.get(id),
      (error) =>
        error instanceof errors.UnexpectedResponseError &&
        error.code === "schema_mismatch" &&
        error.message.includes("charge_tax_category"),
    );
  }
  verifyRequests(requests);
});

test("PHP deliveryMethods.get preserves inherited null and typed accessors through cURL", async (t) => {
  const { requests, baseUrl } = await transport(t);
  const php = String.raw`
require $argv[1] . '/php/src/Runtime.php';
require $argv[1] . '/php/src/Client.php';
$client = new \Flint\Client(new \Flint\ClientOptions(baseUrl: $argv[2], allowInsecureHttp: true, apiKey: 'delivery-null-test'));
try {
    foreach (['explicit' => 'service_fee', 'inherited' => null, 'future' => 'future_category'] as $id => $category) {
        $result = $client->deliveryMethods->get($id);
        foreach ([$result, $result->lastResponse()->body->data] as $value) {
            if (!$value instanceof \Flint\DeliveryMethod) throw new \RuntimeException('Response was not hydrated');
            $configuration = $value->getConfiguration();
            if (!$configuration instanceof \Flint\DeliveryMethodConfiguration) throw new \RuntimeException('Configuration was not hydrated');
            if (!$configuration->hasChargeTaxCategory()) throw new \RuntimeException('Present category was lost');
            if ($configuration->charge_tax_category !== $category || $configuration->getChargeTaxCategory() !== $category) throw new \RuntimeException('Category was not preserved');
            if ($configuration->getTaxable() !== null || $configuration->getMinimumOptionLifetimeSeconds() !== 0) throw new \RuntimeException('Configuration control failed');
        }
    }
    foreach (['omitted', 'invalid'] as $id) {
        $rejected = false;
        try { $client->deliveryMethods->get($id); }
        catch (\Flint\SdkError $error) { $rejected = $error instanceof \Flint\Errors\UnexpectedResponseError && $error->code === 'schema_mismatch' && str_contains($error->getMessage(), 'charge_tax_category'); }
        if (!$rejected) throw new \RuntimeException('Invalid category was accepted: ' . $id);
    }
} finally { $client->close(); }
`;
  await exec("php", ["-r", php, root, baseUrl], { timeout: 30000 });
  verifyRequests(requests);
});
