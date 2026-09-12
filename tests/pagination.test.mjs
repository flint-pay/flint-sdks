import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { Client, SdkError } from "../node/index.js";

const exec = promisify(execFile);

test("pagination follows cursors and bounds requests; reads and keyed writes stay single-attempt in Node and PHP", async (t) => {
  const requests = [];
  const server = createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    const mode = req.headers["x-sdk-test"];
    requests.push({ mode, path: url.pathname, query: Object.fromEntries(url.searchParams), key: req.headers["idempotency-key"] });
    res.setHeader("content-type", "application/json");
    if (mode.includes("fail")) {
      res.writeHead(503, { "retry-after": "0" });
      res.end(JSON.stringify({ error: { code: "SERVICE_UNAVAILABLE", message: "Synthetic unavailable response" } }));
      return;
    }
    const second = url.searchParams.get("page_token") === "cursor-two";
    res.end(JSON.stringify({ data: [{ customer_id: second ? "cus_two" : "cus_one", email: "buyer@example.com" }], ...(second ? {} : { next_page_token: "cursor-two" }) }));
  });
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const client = new Client({ baseUrl, allowInsecureHttp: true, apiKey: "synthetic-key" });
  const input = { page_size: 1, query: "buyer" };
  const options = mode => ({ headers: { "x-sdk-test": mode }, deadlineMs: 5000 });
  const customers = [];
  for await (const customer of client.customers.listItems(input, options("node-pages"))) customers.push(customer.customer_id);
  assert.deepEqual(customers, ["cus_one", "cus_two"]);
  const limited = [];
  for await (const customer of client.customers.listItems(input, { ...options("node-limit"), maxItems: 1 })) limited.push(customer.customer_id);
  assert.deepEqual(limited, ["cus_one"]);
  await assert.rejects(client.customers.list(input, options("node-fail-read")), SdkError);
  const body = { amount_money: { amount: "2500", currency: "USD" }, payment_options: ["card"] };
  await assert.rejects(client.paymentIntents.create(body, { ...options("node-fail-write"), idempotencyKey: "persisted-action-key" }), SdkError);
  await assert.rejects(client.customers.update("cus_test", { email: "buyer@example.com" }, { ...options("node-fail-update"), idempotencyKey: "persisted-action-key" }), SdkError);
  const command = { inventory_count_id: "ic_test", body: {} };
  await assert.rejects(client.inventoryCounts.cancel(command.inventory_count_id, command.body, { ...options("node-fail-inventory"), idempotencyKey: "persisted-action-key" }), SdkError);
  await assert.rejects(client.inventoryCounts.cancel(command.inventory_count_id, command.body, options("node-no-dispatch")), SdkError);
  await assert.rejects(client.customers.list(input, { ...options("node-no-dispatch"), maxAttempts: 2 }), SdkError);

  await exec("php", ["-r", String.raw`
require 'php/src/Runtime.php';
require 'php/src/Client.php';
$client = new \Flint\Client(new \Flint\ClientOptions(baseUrl: $argv[1], allowInsecureHttp: true, apiKey: 'synthetic-key'));
$input = ['page_size' => 1, 'query' => 'buyer'];
$ids = [];
foreach ($client->customers->listItems($input, new \Flint\RequestOptions(headers: ['x-sdk-test' => 'php-pages'], deadlineMs: 5000)) as $customer) $ids[] = $customer->customer_id;
if ($ids !== ['cus_one', 'cus_two']) throw new \RuntimeException('Incorrect pagination');
$ids = [];
foreach ($client->customers->listItems($input, new \Flint\RequestOptions(headers: ['x-sdk-test' => 'php-limit'], maxItems: 1)) as $customer) $ids[] = $customer->customer_id;
if ($ids !== ['cus_one']) throw new \RuntimeException('Incorrect item limit');
try {
  $client->customers->list($input, new \Flint\RequestOptions(headers: ['x-sdk-test' => 'php-fail-read']));
  throw new \RuntimeException('Expected read failure');
} catch (\Flint\SdkError $e) {}
try {
  $client->paymentIntents->create(['amount_money' => ['amount' => '2500', 'currency' => 'USD'], 'payment_options' => ['card']], new \Flint\RequestOptions(headers: ['x-sdk-test' => 'php-fail-write'], idempotencyKey: 'persisted-action-key'));
  throw new \RuntimeException('Expected write failure');
} catch (\Flint\SdkError $e) {}
try {
  $client->customers->update('cus_test', ['email' => 'buyer@example.com'], new \Flint\RequestOptions(headers: ['x-sdk-test' => 'php-fail-update'], idempotencyKey: 'persisted-action-key'));
  throw new \RuntimeException('Expected update failure');
} catch (\Flint\SdkError $e) {}
$command = ['inventory_count_id' => 'ic_test', 'body' => (object) []];
try {
  $client->inventoryCounts->cancel($command['inventory_count_id'], [], new \Flint\RequestOptions(headers: ['x-sdk-test' => 'php-fail-inventory'], idempotencyKey: 'persisted-action-key'));
  throw new \RuntimeException('Expected inventory failure');
} catch (\Flint\SdkError $e) {}
try {
  $client->inventoryCounts->cancel($command['inventory_count_id'], [], new \Flint\RequestOptions(headers: ['x-sdk-test' => 'php-no-dispatch']));
  throw new \RuntimeException('Expected required key validation');
} catch (\Flint\SdkError $e) {}
try {
  $client->customers->list($input, new \Flint\RequestOptions(headers: ['x-sdk-test' => 'php-no-dispatch'], maxAttempts: 2));
  throw new \RuntimeException('Expected attempt limit validation');
} catch (\Flint\SdkError $e) {}
$client->close();
`, baseUrl], { cwd: new URL("..", import.meta.url), timeout: 30000 });

  for (const language of ["node", "php"]) {
    const pages = requests.filter(r => r.mode === language + "-pages");
    assert.deepEqual(pages.map(r => r.query), [{ page_size: "1", query: "buyer" }, { page_size: "1", query: "buyer", page_token: "cursor-two" }]);
    assert.ok(pages.every(r => r.path === "/v1/customers"));
    for (const mode of ["limit", "fail-read", "fail-write", "fail-update", "fail-inventory"]) assert.equal(requests.filter(r => r.mode === language + "-" + mode).length, 1);
    for (const mode of ["fail-write", "fail-update", "fail-inventory"]) assert.equal(requests.find(r => r.mode === language + "-" + mode).key, "persisted-action-key");
    assert.equal(requests.filter(r => r.mode === language + "-no-dispatch").length, 0);
  }
});
