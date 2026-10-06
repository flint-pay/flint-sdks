import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdirSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { Client } from "../node/index.js";

const exec = promisify(execFile);
const root = resolve(import.meta.dirname, "..");
const methods = [
  "listFulfillmentEvents",
  "listFulfillmentEventsWithResponse",
  "listFulfillmentEventsPages",
  "listFulfillmentEventsPagesWithResponse",
  "listFulfillmentEventsItems",
];

test("buyer fulfillment event helpers require an order before dispatch in Node and PHP", async (t) => {
  const requests = [];
  const server = createServer((req, res) => {
    requests.push(req.url);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ data: [] }));
  });
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const client = new Client({ baseUrl, allowInsecureHttp: true, customerToken: "customer-test" });
  for (const method of methods) {
    for (const args of [[], [{}]]) {
      await assert.rejects(async () => {
        const result = client.me[method](...args);
        if (method.includes("Pages") || method.endsWith("Items")) await result.next();
        else await result;
      }, error => error.kind === "validation" && error.outcome === "not_sent", method);
    }
  }
  assert.deepEqual(requests, []);
  const page = await client.me.listFulfillmentEvents({ order_id: "ord_test", fulfillment_id: "ful_test", page_size: 25 });
  assert.deepEqual(page.data, []);
  assert.equal(page.next_page_token, undefined);

  const php = String.raw`
require 'php/src/Runtime.php';
require 'php/src/Client.php';
$client = new \Flint\Client(new \Flint\ClientOptions(baseUrl: $argv[1], allowInsecureHttp: true, customerToken: 'customer-test'));
$methods = json_decode($argv[2], true);
foreach ($methods as $method) {
    foreach ([[], [[]]] as $args) {
        $rejected = false;
        try {
            $result = $client->me->$method(...$args);
            if ($result instanceof \Generator) $result->rewind();
        } catch (\ArgumentCountError $error) {
            $rejected = $args === [];
        } catch (\Flint\SdkError $error) {
            $rejected = $error->kind === 'validation' && $error->outcome === 'not_sent';
        }
        if (!$rejected) throw new \RuntimeException($method . ' accepted a missing order ID');
    }
}
$page = $client->me->listFulfillmentEvents(['order_id' => 'ord_test', 'fulfillment_id' => 'ful_test', 'page_size' => 25]);
if ($page->data !== []) throw new \RuntimeException('Expected an empty fulfillment event page');
$client->close();
`;
  await exec("php", ["-r", php, baseUrl, JSON.stringify(methods)], { cwd: root, timeout: 30000 });
  assert.deepEqual(requests, [
    "/v1/me/fulfillment-events?order_id=ord_test&fulfillment_id=ful_test&page_size=25",
    "/v1/me/fulfillment-events?order_id=ord_test&fulfillment_id=ful_test&page_size=25",
  ]);
});

test("TypeScript fulfillment event helpers require the order ID", async () => {
  mkdirSync(join(root, ".context"), { recursive: true });
  const directory = mkdtempSync(join(root, ".context/fulfillment-types-"));
  try {
    const fixture = join(directory, "consumer.mts");
    writeFileSync(fixture, `import { Client } from "../../node/index.js";
const client = new Client({ customerToken: "customer-test" });
${methods.map(method => `
client.me.${method}({ order_id: "ord_test", page_size: 25 });
// @ts-expect-error An order ID is required.
client.me.${method}({});
// @ts-expect-error Params cannot be omitted.
client.me.${method}();`).join("\n")}
`);
    await exec(process.execPath, [
      join(root, ".tools/sdk-generator/node_modules/typescript/bin/tsc"),
      "--noEmit", "--strict", "--skipLibCheck", "--target", "ES2022",
      "--module", "NodeNext", "--moduleResolution", "NodeNext", fixture,
    ], { cwd: root, timeout: 30000 });
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
