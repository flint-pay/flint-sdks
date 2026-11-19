import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import test from "node:test";
import { promisify } from "node:util";
import { Client } from "../node/index.js";

const api = JSON.parse(readFileSync(new URL("../spec/openapi.json", import.meta.url)));
const timestamp = "2026-08-02T16:00:00Z";
const money = { amount: 1000, currency: "USD" };
const refundOperation = api.paths["/v1/refunds"].post;
const refundRequest = refundOperation.requestBody.content["application/json"].examples.amount.value;
const options = { idempotencyKey: "synthetic-refund-key" };
const requestId = "req_01KWM6N1JHF8ZAKK41C12T5VJ9";
const refund = api.paths["/v1/refunds/{refund_id}"].get.responses[200].content["application/json"].examples.default.value.data;
const movement = api.paths["/v1/inventory-movements/{inventory_movement_id}"].get.responses[200].content["application/json"].examples.default.value.data;
const fixtures = {
  "POST /v1/refunds": refund,
  "GET /v1/gift-card-funding-dispositions/gfd_fixture": {
    created_at: timestamp,
    disposition: "honor_value",
    dispute_amount_money: money,
    dispute_id: "du_fixture",
    gift_card_funding_disposition_id: "gfd_fixture",
    gift_card_ids: ["gc_fixture"],
    honored_value_money: money,
    original_gift_card_consideration_money: money,
    payment_intent_id: "pi_fixture",
    preserved_reserved_value_money: { ...money, amount: 0 },
    reason_message: "Synthetic disposition",
  },
  "GET /v1/inventory-adjustments/invadj_fixture": {
    created_at: timestamp,
    inventory_adjustment_id: "invadj_fixture",
    lines: [{
      damaged_quantity_delta: 0,
      inventory_item_id: "invi_fixture",
      inventory_movement_id: "invm_fixture",
      location_id: "loc_fixture",
      on_hand_quantity_delta: 1,
      quality_control_quantity_delta: 0,
      quarantined_quantity_delta: 0,
    }],
    occurred_at: timestamp,
    reason: "received",
    source_system: { type: "manual" },
  },
  "GET /v1/inventory-movements/invm_fixture": movement,
};

test("Node and PHP preserve explicit nulls in creating-key responses without matching webhooks", async (t) => {
  const server = createServer((request, response) => {
    const fixture = fixtures[`${request.method} ${request.url}`];
    request.resume();
    if (!fixture) return response.writeHead(404).end();
    response.writeHead(request.method === "POST" ? 201 : 200, { "content-type": "application/json" });
    response.end(JSON.stringify({ data: { ...fixture, idempotency_key: null }, request_id: requestId }));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(() => {
    server.closeAllConnections();
    server.close();
  });
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const client = new Client({ baseUrl, allowInsecureHttp: true, apiKey: "nullable-key-fixture" });
  t.after(() => client.close());
  for (const value of [
    await client.refunds.create(refundRequest, options),
    await client.giftCardFundingDispositions.get("gfd_fixture"),
    await client.inventoryAdjustments.get("invadj_fixture"),
    await client.inventoryMovements.get("invm_fixture"),
  ]) {
    assert.equal(value.idempotency_key, null);
  }
  const php = String.raw`
require 'php/src/autoload.php';
$client = new \Flint\Client(new \Flint\ClientOptions(baseUrl: $argv[1], allowInsecureHttp: true, apiKey: 'nullable-key-fixture'));
try {
    foreach ([
        $client->refunds->create(json_decode($argv[2], true, 512, JSON_THROW_ON_ERROR), new \Flint\RequestOptions(idempotencyKey: 'synthetic-refund-key')),
        $client->giftCardFundingDispositions->get('gfd_fixture'),
        $client->inventoryAdjustments->get('invadj_fixture'),
        $client->inventoryMovements->get('invm_fixture'),
    ] as $value) {
        if (!$value->hasIdempotencyKey() || $value->getIdempotencyKey() !== null) {
            throw new \RuntimeException(get_class($value) . ' lost explicit null');
        }
    }
} finally { $client->close(); }
`;
  await promisify(execFile)("php", ["-r", php, baseUrl, JSON.stringify(refundRequest)], {
    cwd: new URL("..", import.meta.url),
    timeout: 30000,
  });
});
