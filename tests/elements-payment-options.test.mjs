import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { Client } from "../node/index.js";

const exec = promisify(execFile);
const elements = {
  mode: "payment",
  next_step: "create_confirmation_token",
  payment_method_creation: "manual",
  payment_method_types: ["us_bank_account"],
  submit_to: "confirm_payment_intent",
  payment_method_options: {
    us_bank_account: {
      verification_method: "instant",
      financial_connections: { permissions: ["payment_method"] },
    },
  },
};
const envelope = {
  data: {
    amount_money: { amount: 100, currency: "USD" },
    metadata: {},
    payment_flow: "api",
    payment_intent_id: "pi_elements_test",
    payment_options: ["us_bank_account"],
    status: "requires_confirmation",
    support_reference: "synthetic",
    version: 1,
    supported_actions: [],
    last_payment_error: null,
    payment_collection: {
      stripe: {
        account_id: "acct_synthetic",
        publishable_key: "pk_test_placeholder",
        elements,
      },
    },
  },
};

test("Node client preserves nested Stripe Elements response options", async (t) => {
  const client = new Client({
    apiKey: "synthetic-elements-key",
    transport: async () =>
      new Response(JSON.stringify(envelope), {
        headers: { "content-type": "application/json" },
      }),
  });
  t.after(() => client.close());
  const intent = await client.paymentIntents.get("pi_elements_test");
  assert.deepEqual(
    intent.payment_collection.stripe.elements.payment_method_options,
    elements.payment_method_options,
  );
});

test("PHP client preserves nested Stripe Elements response options", async () => {
  const script = String.raw`
require 'php/src/Runtime.php';
require 'php/src/Client.php';
$transport = fn(array $request): array => ['status' => 200, 'headers' => ['content-type' => 'application/json'], 'body' => $argv[1]];
$client = new \Flint\Client(new \Flint\ClientOptions(apiKey: 'synthetic-elements-key', transport: $transport));
try {
    $intent = $client->paymentIntents->get('pi_elements_test');
    $options = $intent->getPaymentCollection()->getStripe()->getElements()->getPaymentMethodOptions();
    if (json_decode(json_encode($options, JSON_THROW_ON_ERROR), true) !== json_decode($argv[2], true)) throw new \RuntimeException('Provider options changed');
} finally { $client->close(); }
`;
  await exec(
    "php",
    [
      "-r",
      script,
      JSON.stringify(envelope),
      JSON.stringify(elements.payment_method_options),
    ],
    { cwd: new URL("..", import.meta.url), timeout: 30000 },
  );
});
