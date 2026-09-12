import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { Client } from "../node/index.js";

const exec = promisify(execFile);

test("Node and PHP support apiKey, direct payloads, and full response access", async (t) => {
  const authorizations = [];
  const payload = {
    amount_money: { amount: 100, currency: "USD" },
    payment_flow: "api",
    payment_intent_id: "pi_shortcut_test",
    payment_options: ["card"],
    status: "succeeded",
    support_reference: "support_test",
  };
  const server = createServer((req, res) => {
    assert.equal(req.url, "/v1/payment-intents/pi_shortcut_test");
    authorizations.push(req.headers.authorization);
    res.writeHead(200, { "content-type": "application/json", "x-request-id": "req_shortcut_test" });
    res.end(JSON.stringify({ data: payload, request_id: "req_shortcut_test" }));
  });
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const client = new Client({ baseUrl, allowInsecureHttp: true, apiKey: "client-test-key" });
  const input = { payment_intent_id: payload.payment_intent_id };
  const payment = await client.paymentIntents.get(input.payment_intent_id);
  assert.equal(payment.payment_intent_id, payload.payment_intent_id);
  assert.equal(payment.amount_money.amount, "100");
  assert.equal(payment.data, undefined);
  const response = await client.paymentIntents.getWithResponse(input.payment_intent_id, {}, { apiKey: "request-test-key" });
  assert.equal(response.body.data.payment_intent_id, payload.payment_intent_id);
  assert.equal(response.meta.requestId, "req_shortcut_test");
  assert.deepEqual(JSON.parse(response.raw).data, payload);

  const php = String.raw`
require 'php/src/Runtime.php';
require 'php/src/Client.php';
$client = new \Flint\Client(new \Flint\ClientOptions(baseUrl: $argv[1], allowInsecureHttp: true, apiKey: 'client-test-key'));
$paymentIntentId = 'pi_shortcut_test';
$payment = $client->paymentIntents->get($paymentIntentId);
if ($payment->payment_intent_id !== 'pi_shortcut_test' || property_exists($payment, 'data')) throw new \RuntimeException('Payload was not unwrapped');
$response = $client->paymentIntents->getWithResponse($paymentIntentId, [], new \Flint\RequestOptions(apiKey: 'request-test-key'));
if ($response->body->data->payment_intent_id !== 'pi_shortcut_test') throw new \RuntimeException('Missing full response body');
if ($response->meta['requestId'] !== 'req_shortcut_test') throw new \RuntimeException('Missing request metadata');
if (json_decode($response->raw, true)['data']['payment_intent_id'] !== 'pi_shortcut_test') throw new \RuntimeException('Missing raw response');
$client->close();
`;
  await exec("php", ["-r", php, baseUrl], { cwd: new URL("..", import.meta.url), timeout: 30000 });
  assert.deepEqual(authorizations, ["Bearer client-test-key", "Bearer request-test-key", "Bearer client-test-key", "Bearer request-test-key"]);
});
