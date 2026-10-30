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
    version: 1,
    metadata: {},
    supported_actions: [],
    // The contract requires both fields; the API sends null when they do not apply.
    risk: null,
    last_payment_error: null,
  };
  const server = createServer((req, res) => {
    assert.equal(req.url, "/v1/payment-intents/pi_shortcut_test");
    authorizations.push(req.headers.authorization);
    res.writeHead(200, {
      "content-type": "application/json",
      "x-request-id": "req_shortcut_test",
    });
    res.end(JSON.stringify({ data: payload, request_id: "req_shortcut_test" }));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  t.after(() => {
    server.closeAllConnections();
    server.close();
  });
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const client = new Client({
    baseUrl,
    allowInsecureHttp: true,
    apiKey: "client-test-key",
  });
  const input = { payment_intent_id: payload.payment_intent_id };
  const payment = await client.paymentIntents.get(input.payment_intent_id);
  assert.equal(payment.payment_intent_id, payload.payment_intent_id);
  assert.equal(payment.amount_money.amount, "100");
  assert.equal(payment.data, undefined);
  assert.equal(payment.version, 1);
  assert.equal(payment.lastResponse.requestId, "req_shortcut_test");
  assert.equal(Object.getOwnPropertyDescriptor(payment, "lastResponse").enumerable, false);
  assert.equal(Object.getOwnPropertyDescriptor(payment, "lastResponse").writable, false);
  assert.equal(Object.hasOwn(JSON.parse(JSON.stringify(payment)), "lastResponse"), false);
  const response = await client.paymentIntents.get(
    input.payment_intent_id,
    {},
    { apiKey: "request-test-key" },
  );
  assert.equal(response.lastResponse.body.data.payment_intent_id, payload.payment_intent_id);
  assert.equal(response.lastResponse.body.data.amount_money.amount, "100");
  assert.equal(response.lastResponse.status, 200);
  assert.equal(response.lastResponse.requestId, "req_shortcut_test");
  assert.deepEqual(response.lastResponse.requestIds, ["req_shortcut_test"]);
  assert.equal(response.lastResponse.attempts, 1);
  assert.equal(typeof response.lastResponse.durationMs, "number");
  assert.equal(client.paymentIntents.getWithResponse, undefined);

  const php = String.raw`
require 'php/src/Runtime.php';
require 'php/src/Client.php';
$client = new \Flint\Client(new \Flint\ClientOptions(baseUrl: $argv[1], allowInsecureHttp: true, apiKey: 'client-test-key'));
$paymentIntentId = 'pi_shortcut_test';
$payment = $client->paymentIntents->get($paymentIntentId);
if ($payment->payment_intent_id !== 'pi_shortcut_test' || property_exists($payment, 'data')) throw new \RuntimeException('Payload was not unwrapped');
$response = $client->paymentIntents->get($paymentIntentId, [], new \Flint\RequestOptions(apiKey: 'request-test-key'));
if ($response->lastResponse()->body->data->payment_intent_id !== 'pi_shortcut_test') throw new \RuntimeException('Missing full response body');
if ($response->lastResponse()->requestId !== 'req_shortcut_test') throw new \RuntimeException('Missing request metadata');
if ($payment->getVersion() !== 1 || $payment->getAmountMoney()->getAmount() !== '100') throw new \RuntimeException('Integer representation changed');
if ($response->lastResponse()->status !== 200 || $response->lastResponse()->attempts !== 1) throw new \RuntimeException('Missing response information');
if (method_exists($client->paymentIntents, 'getWithResponse')) throw new \RuntimeException('Removed companion remains');
$client->close();
`;
  await exec("php", ["-r", php, baseUrl], {
    cwd: new URL("..", import.meta.url),
    timeout: 30000,
  });
  assert.deepEqual(authorizations, [
    "Bearer client-test-key",
    "Bearer request-test-key",
    "Bearer client-test-key",
    "Bearer request-test-key",
  ]);
});

test("Node and PHP expose API refusals as status classes with first-class fields", async () => {
  const envelope = {
    error: {
      code: "INSUFFICIENT_SCOPE",
      message: "The API key needs an additional scope.",
      type: "invalid_request_error",
      error_source: "caller",
      param: "customer_id",
      doc_url: "https://developers.example.invalid/errors/INSUFFICIENT_SCOPE",
      request_id: "req_envelope",
      request_log_url: "/requests/req_header",
      remediation: { retry: "none", next_steps: "Use a key with the required scope." },
      details: [{ code: "INSUFFICIENT_SCOPE", message: "Missing scope.", missing_scopes: ["customers:read"] }],
    },
  };
  const { errors, SdkError } = await import("../node/index.js");
  const client = new Client({
    apiKey: "synthetic-scope-key",
    transport: async () => new Response(JSON.stringify(envelope), {
      status: 403,
      headers: { "content-type": "application/json", "x-request-id": "req_header" },
    }),
  });
  try {
    await assert.rejects(client.customers.get("cus_synthetic"), (error) => {
      assert.ok(error instanceof SdkError);
      assert.ok(error instanceof errors.ApiError);
      assert.ok(error instanceof errors.PermissionError);
      assert.equal(error.status, 403);
      assert.equal(error.code, envelope.error.code);
      assert.equal(error.message, envelope.error.message);
      assert.equal(error.type, envelope.error.type);
      assert.equal(error.param, envelope.error.param);
      assert.equal(error.errorSource, envelope.error.error_source);
      assert.equal(error.docUrl, envelope.error.doc_url);
      assert.equal(error.requestLogUrl, envelope.error.request_log_url);
      assert.deepEqual(error.details, envelope.error.details);
      assert.deepEqual(error.remediation, envelope.error.remediation);
      assert.equal(error.requestId, "req_header");
      assert.deepEqual(error.requestIds, ["req_header"]);
      assert.equal(error.operation, "customers.get");
      assert.equal(error.attempts, 1);
      assert.equal(error.outcome, "response");
      assert.equal(error.retryAllowed, false);
      assert.deepEqual(error.body, envelope);
      assert.deepEqual(JSON.parse(error.raw), envelope);
      assert.equal(Object.hasOwn(error, "kind"), false);
      assert.equal(Object.hasOwn(error, "meta"), false);
      const inspected = error.toJSON();
      for (const field of ["body", "raw", "headers", "kind", "meta"])
        assert.equal(Object.hasOwn(inspected, field), false, field);
      return true;
    });
  } finally {
    client.close();
  }
  const php = String.raw`
require 'php/src/autoload.php';
$envelope = json_decode($argv[1], true, 512, JSON_THROW_ON_ERROR);
$transport = fn(array $request): array => ['status' => 403, 'headers' => ['content-type' => 'application/json', 'x-request-id' => 'req_header'], 'body' => $argv[1]];
$client = new \Flint\Client(new \Flint\ClientOptions(apiKey: 'synthetic-scope-key', transport: $transport));
try {
    try { $client->customers->get('cus_synthetic'); throw new \RuntimeException('Expected API refusal'); }
    catch (\Flint\Errors\PermissionError $error) {
        if (!$error instanceof \Flint\Errors\ApiError || !$error instanceof \Flint\SdkError) throw new \RuntimeException('Missing error hierarchy');
        foreach (['code' => 'code', 'type' => 'type', 'param' => 'param', 'errorSource' => 'error_source', 'docUrl' => 'doc_url', 'requestLogUrl' => 'request_log_url', 'details' => 'details', 'remediation' => 'remediation'] as $property => $wire) {
            if ($error->$property !== $envelope['error'][$wire]) throw new \RuntimeException('Missing API field: ' . $property);
        }
        if ($error->getCode() !== 'INSUFFICIENT_SCOPE' || $error->getMessage() !== $envelope['error']['message']) throw new \RuntimeException('Code or message changed');
        if ($error->status !== 403 || $error->requestId !== 'req_header' || $error->requestIds !== ['req_header'] || $error->attempts !== 1 || $error->operation !== 'customers.get') throw new \RuntimeException('Missing request fields');
        if ($error->outcome !== 'response' || $error->retryAllowed) throw new \RuntimeException('Incorrect refusal outcome');
        if (json_decode(json_encode($error->body, JSON_THROW_ON_ERROR), true) !== $envelope || json_decode($error->raw, true) !== $envelope) throw new \RuntimeException('Missing explicit response recovery');
        foreach (['kind', 'meta', 'errorCode'] as $property) if (property_exists($error, $property)) throw new \RuntimeException('Removed property remains: ' . $property);
        foreach (['body', 'raw', 'headers', 'kind', 'meta'] as $property) if (array_key_exists($property, $error->jsonSerialize())) throw new \RuntimeException('Unsafe inspection field: ' . $property);
    }
} finally { $client->close(); }
`;
  await exec("php", ["-r", php, JSON.stringify(envelope)], {
    cwd: new URL("..", import.meta.url), timeout: 30000,
  });
});
