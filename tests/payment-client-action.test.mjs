import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdirSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
const sourceRoot = resolve(import.meta.dirname, "..");

const root = resolve(process.env.FLINT_SDK_TEST_ROOT ?? sourceRoot);
const { Client } = await import(pathToFileURL(join(root, "node/index.js")));
const api = JSON.parse(readFileSync(join(sourceRoot, "spec/openapi.json"), "utf8"));
const example = (operationId) => structuredClone(
  Object.values(api.paths).flatMap(Object.values).find((op) => op.operationId === operationId)
    .responses[200].content["application/json"].example,
);
const expiresAt = "2026-11-12T12:30:00Z";
const actions = [
  { type: "url", url: "https://payment.example.test/authenticate/synthetic" },
  { type: "stripe", stripe: {
    account_id: "acct_synthetic", publishable_key: "pk_test_placeholder",
    payment_intent: { client_secret: "synthetic-client-secret", stripe_js_call: "handle_next_action" },
  } },
];
const pendingAction = (client_action) => ({
  action_type: "payment_authentication", client_action, expires_at: expiresAt,
  pending_action_id: "pendact_synthetic",
  subject: { payment_intent: { payment_intent_id: "pi_synthetic" } },
});

for (const clientAction of actions) {
  for (const operation of ["getOrderPaymentAttempt", "payOrder", "confirmPaymentIntent"]) {
    test(`${operation} decodes the ${clientAction.type} client action`, async (t) => {
      const body = example(operation);
      const pending = pendingAction(clientAction);
      if (operation === "getOrderPaymentAttempt") body.data.pending_actions = [pending];
      if (operation === "payOrder") body.data.order_payment_attempt.pending_actions = [pending];
      if (operation === "confirmPaymentIntent") {
        body.data.status = "requires_action";
        body.data.current_payment_action = pending;
      }
      const client = new Client({ apiKey: "synthetic-api-key", ambientCredentials: false,
        transport: async () => new Response(JSON.stringify(body), { headers: { "content-type": "application/json" } }),
      });
      t.after(() => client.close());
      let result;
      if (operation === "getOrderPaymentAttempt") {
        result = (await client.orders.getPaymentAttempt("ord_synthetic", "opat_synthetic")).pending_actions[0];
      } else if (operation === "payOrder") {
        result = (await client.orders.pay("ord_synthetic", { action: "resume", order_payment_attempt_id: "opat_synthetic" }, { idempotencyKey: "synthetic-pay" }))
          .order_payment_attempt.pending_actions[0];
      } else {
        result = (await client.paymentIntents.confirm("pi_synthetic", { credential_type: "attached" }, { idempotencyKey: "synthetic-confirm" }))
          .current_payment_action;
      }
      assert.deepEqual(JSON.parse(JSON.stringify(result.client_action)), clientAction);
      // Expiry belongs to the pending action, outside its discriminated client_action.
      assert.equal(result.expires_at, expiresAt);
      if (result.client_action.type === "url") assert.equal(result.client_action.url, actions[0].url);
      else assert.equal(result.client_action.stripe.payment_intent.stripe_js_call, "handle_next_action");
    });
  }
}

test("TypeScript exposes client actions in attempt, pay and standalone confirm results", async () => {
  mkdirSync(join(root, ".context"), { recursive: true });
  const directory = mkdtempSync(join(root, ".context/payment-action-types-"));
  try {
    const fixture = join(directory, "consumer.mts");
    writeFileSync(fixture, `import { Client, type PaymentClientAction, type PaymentClientActionURL, type PaymentClientActionStripe } from "../../node/index.js";
const client = new Client({ apiKey: "synthetic-api-key" });
async function probe() {
  const attempt = await client.orders.getPaymentAttempt("ord_synthetic", "opat_synthetic");
  const paid = await client.orders.pay("ord_synthetic", { action: "resume", order_payment_attempt_id: "opat_synthetic" }, { idempotencyKey: "synthetic-pay" });
  const confirmed = await client.paymentIntents.confirm("pi_synthetic", { credential_type: "attached" }, { idempotencyKey: "synthetic-confirm" });
  for (const pending of [attempt.pending_actions[0], paid.order_payment_attempt?.pending_actions[0], confirmed.current_payment_action]) {
    if (!pending) continue;
    const expiry: string = pending.expires_at;
    const action: PaymentClientAction = pending.client_action;
    // Response unions preserve future variants. Check the tag and field shape.
    if (action.type === "url" && "url" in action && typeof action.url === "string") {
      const url: string = action.url;
    }
    if (action.type === "stripe" && "stripe" in action && action.stripe && typeof action.stripe === "object" && "publishable_key" in action.stripe && typeof action.stripe.publishable_key === "string") {
      const key: string = action.stripe.publishable_key;
    }
    const urlMember: PaymentClientActionURL = { type: "url", url: "https://payment.example.test/authenticate" };
    const stripeMember: PaymentClientActionStripe = { type: "stripe", stripe: { account_id: "acct_synthetic", publishable_key: "pk_test_placeholder" } };
  }
}
`);
    await promisify(execFile)(process.execPath, [
      join(sourceRoot, ".tools/sdk-generator/node_modules/typescript/bin/tsc"),
      "--strict", "--noEmit", "--skipLibCheck", "--target", "ES2022", "--module", "NodeNext", "--moduleResolution", "NodeNext", fixture,
    ], { cwd: root, timeout: 120000 });
  } finally { rmSync(directory, { recursive: true, force: true }); }
});
