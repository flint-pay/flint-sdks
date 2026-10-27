import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readFile } from "node:fs/promises";
import { Client } from "../node/index.js";

const exec = promisify(execFile);
const cases = [
  [
    "inventoryCounts",
    "transition",
    [{ inventory_count_id: "ic_test", body: { action: "apply" } }],
    "POST",
    "/v1/inventory-counts/ic_test/transitions",
    { action: "apply" },
  ],
  [
    "inventoryCounts",
    "transition",
    [{ inventory_count_id: "ic_test", body: { action: "cancel" } }],
    "POST",
    "/v1/inventory-counts/ic_test/transitions",
    { action: "cancel" },
  ],
  ...["commit", "consume", "release"].map((action) => {
    const target =
      action === "commit"
        ? "target_committed_quantity"
        : action === "consume"
          ? "target_consumed_quantity"
          : "target_released_from_held_quantity";
    const line = {
      inventory_reservation_line_id: "invrln_test",
      [target]: "1",
    };
    return [
      "inventoryReservations",
      "transition",
      [
        {
          inventory_reservation_id: "invr_test",
          body: { action, lines: [line] },
        },
      ],
      "POST",
      "/v1/inventory-reservations/invr_test/transitions",
      { action, lines: [{ ...line, [target]: 1 }] },
    ];
  }),
  [
    "reviews",
    "approve",
    ["rev_test", null],
    "POST",
    "/v1/payment-reviews/rev_test/approve",
  ],
  [
    "reviews",
    "decline",
    ["rev_test", { add_to_block_lists: false }],
    "POST",
    "/v1/payment-reviews/rev_test/decline",
    { add_to_block_lists: false },
  ],
  ["reviews", "get", ["rev_test", null], "GET", "/v1/payment-reviews/rev_test"],
  [
    "reviews",
    "list",
    [{ status: ["open"] }],
    "GET",
    "/v1/payment-reviews?status=open",
  ],
  [
    "giftCardAdjustments",
    "create",
    [
      "gc_test",
      {
        amount_money: { amount: "500", currency: "USD" },
        reason: "complimentary",
      },
    ],
    "POST",
    "/v1/gift-cards/gc_test/adjust-balance",
    { amount_money: { amount: 500, currency: "USD" }, reason: "complimentary" },
  ],
  [
    "giftCardCashOuts",
    "create",
    [
      "gc_test",
      {
        amount_money: { amount: "500", currency: "USD" },
        cash_out_reference: "synthetic-cash-reference",
      },
    ],
    "POST",
    "/v1/gift-cards/gc_test/cash-out",
    {
      amount_money: { amount: 500, currency: "USD" },
      cash_out_reference: "synthetic-cash-reference",
    },
  ],
  [
    "merchantSubscriptionInvoices",
    "get",
    ["mbi_test", null],
    "GET",
    "/v1/merchant-billing-invoices/mbi_test",
  ],
  [
    "merchantSubscriptionInvoices",
    "list",
    [{}],
    "GET",
    "/v1/merchant-billing-invoices",
  ],
  [
    "invoices",
    "reverseManualPayment",
    ["inv_test", "imp_test", { reversal_note: "Synthetic correction" }],
    "POST",
    "/v1/invoices/inv_test/manual-payments/imp_test/reverse",
    { reversal_note: "Synthetic correction" },
  ],
  [
    "locations",
    "publishGeography",
    ["loc_test", { timezone: "America/Toronto" }],
    "PATCH",
    "/v1/locations/loc_test",
    { timezone: "America/Toronto" },
  ],
  [
    "locations",
    "updateInventory",
    ["loc_test", { inventory_allocation_enabled: true }],
    "PATCH",
    "/v1/locations/loc_test",
    { inventory_allocation_enabled: true },
  ],
  [
    "customers",
    "createDeletionRequest",
    [{ customer_id: "cus_test" }],
    "POST",
    "/v1/customer-deletion-requests",
    { customer_id: "cus_test" },
  ],
  [
    "customers",
    "getDeletionRequest",
    ["cdr_test", null],
    "GET",
    "/v1/customer-deletion-requests/cdr_test",
  ],
  [
    "settings",
    "validateCustomDomain",
    ["cd_test", null],
    "POST",
    "/v1/custom-domains/cd_test/validate",
  ],
  [
    "webhookEvents",
    "listWebhookDeliveries",
    [{ webhook_event_id: "evt_test" }],
    "GET",
    "/v1/webhook-deliveries?webhook_event_id=evt_test",
  ],
  [
    "checkoutSessions",
    "confirmCustomerVerification",
    ["cs_test", "csv_test", { code: "123456" }],
    "POST",
    "/v1/checkout-sessions/cs_test/customer-verifications/csv_test/confirm",
    { code: "123456" },
  ],
];
const errorBody = JSON.stringify({
  error: {
    code: "INVALID_REQUEST",
    message: "Synthetic provider rejection",
    type: "validation_error",
    error_source: "merchant",
    doc_url: "https://developers.withflintpay.com/errors/INVALID_REQUEST",
    request_id: "req_synthetic",
    remediation: { retry: "none" },
    details: [
      {
        code: "INVALID_VALUE",
        message: "Synthetic invalid field",
        param: "body",
      },
    ],
  },
});
const removed = [
  ["inventoryCounts", "apply"],
  ["inventoryCounts", "cancel"],
  ["inventoryReservations", "commit"],
  ["inventoryReservations", "consume"],
  ["inventoryReservations", "release"],
  ["organizations", "transferOwnership"],
  ["me", "setDefaultPaymentMethod"],
  ["paymentMethods", "setDefault"],
  ["payouts", "listEntries"],
  ["capabilities", "list"],
];

test("Node preserves moved method names, routes and typed provider error metadata", async (t) => {
  const requests = [];
  const client = new Client({
    apiKey: "synthetic-release-key",
    transport: async (url, init) => {
      requests.push({ url, init });
      return new Response(errorBody, {
        status: 400,
        headers: {
          "content-type": "application/json",
          "x-request-id": "req_synthetic",
        },
      });
    },
  });
  t.after(() => client.close());
  for (const [resource, method, args, verb, path, body] of cases) {
    await assert.rejects(
      client[resource][method](
        ...args.map((value) => (value === null ? undefined : value)),
        {
          ...(verb === "GET" ? {} : { idempotencyKey: "synthetic-action-key" }),
          ...(resource === "checkoutSessions"
            ? { checkoutToken: "synthetic-checkout-token" }
            : {}),
        },
      ),
      (error) => {
        assert.equal(error.kind, "validation");
        assert.equal(error.status, 400);
        assert.equal(error.code, "INVALID_REQUEST");
        assert.equal(error.meta.requestId, "req_synthetic");
        assert.ok(
          error.details,
          "declared error details must survive decoding",
        );
        return true;
      },
    );
    const actual = requests.at(-1);
    assert.equal(
      new URL(actual.url).pathname + new URL(actual.url).search,
      path,
      `${resource}.${method}`,
    );
    assert.equal(actual.init.method, verb);
    if (body) assert.deepEqual(JSON.parse(actual.init.body), body);
  }
  assert.equal(requests.length, cases.length);
  for (const [resource, method] of removed)
    assert.equal(client[resource]?.[method], undefined);
  assert.equal(client.paymentReviews, undefined);
  assert.equal(client.merchantBillingInvoices, undefined);
  assert.equal(client.giftCards.adjustBalance, undefined);
  assert.equal(client.giftCards.cashOut, undefined);
  const locations = await readFile(
    new URL("../node/resources/locations.d.ts", import.meta.url),
    "utf8",
  );
  for (const method of ["publishGeography", "updateInventory"]) {
    assert.match(
      locations,
      new RegExp(
        "@deprecated Use locations\\.update; HTTP behavior is unchanged\\.[\\s\\S]*?\\*/\\s+" +
          method +
          "\\(",
      ),
    );
  }
});

test("PHP preserves moved methods and typed provider error metadata", async () => {
  const script = String.raw`
require 'php/src/Runtime.php';
require 'php/src/Client.php';
$cases = json_decode($argv[1], true, 512, JSON_THROW_ON_ERROR);
$requests = [];
$errorBody = $argv[2];
$transport = function(array $request) use (&$requests, $errorBody): array {
    $requests[] = $request;
    return ['status' => 400, 'headers' => ['content-type' => 'application/json', 'x-request-id' => 'req_synthetic'], 'body' => $errorBody];
};
$client = new \Flint\Client(new \Flint\ClientOptions(apiKey: 'synthetic-release-key', transport: $transport));
try {
    foreach ($cases as $case) {
        [$resource, $method, $args, $verb, $path] = $case;
        $args[] = new \Flint\RequestOptions(idempotencyKey: $verb === 'GET' ? null : 'synthetic-action-key', checkoutToken: $resource === 'checkoutSessions' ? 'synthetic-checkout-token' : null);
        $failed = false;
        try { $client->$resource->$method(...$args); }
        catch (\Flint\Errors\ValidationError $error) {
            $failed = $error->status === 400 && $error->errorCode === 'INVALID_REQUEST' && $error->meta['requestId'] === 'req_synthetic' && $error->details !== null;
        }
        if (!$failed) throw new \RuntimeException($resource . '.' . $method . ' lost provider error metadata');
        $actual = end($requests);
        $url = parse_url($actual['url']);
        if ($url['path'] . (isset($url['query']) ? '?' . $url['query'] : '') !== $path || $actual['method'] !== $verb) throw new \RuntimeException('Wrong route for ' . $resource . '.' . $method);
        if (isset($case[5]) && json_decode($actual['body'], true, 512, JSON_THROW_ON_ERROR) !== $case[5]) throw new \RuntimeException('Wrong body for ' . $resource . '.' . $method);
    }
    if (count($requests) !== count($cases)) throw new \RuntimeException('Unexpected attempt count');
    foreach (['inventoryCounts' => ['apply', 'cancel'], 'inventoryReservations' => ['commit', 'consume', 'release']] as $resource => $methods) {
        foreach ($methods as $method) if (method_exists($client->$resource, $method)) throw new \RuntimeException('Removed action alias still exists: ' . $resource . '.' . $method);
    }
    foreach (['publishGeography', 'updateInventory'] as $method) {
        $reflection = new \ReflectionMethod($client->locations, $method);
        if (!str_contains($reflection->getDocComment(), '@deprecated Use update.')) throw new \RuntimeException('Location alias lost its canonical deprecation target');
    }
    if (isset($client->paymentReviews) || isset($client->merchantBillingInvoices) || method_exists($client->giftCards, 'adjustBalance') || method_exists($client->giftCards, 'cashOut')) throw new \RuntimeException('Unexpected replacement for a retained primary binding');
} finally { $client->close(); }
`;
  await exec("php", ["-r", script, JSON.stringify(cases), errorBody], {
    cwd: new URL("..", import.meta.url),
    timeout: 30000,
  });
});
