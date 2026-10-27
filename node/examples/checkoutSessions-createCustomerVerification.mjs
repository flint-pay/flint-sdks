import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const checkoutToken = process.env.CHECKOUT_TOKEN;
if (!checkoutToken) throw new Error("Set CHECKOUT_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  checkoutToken,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.createCustomerVerification(
  {
    checkout_session_id: "example",
    body: {
      purpose: "gift_card_purchase",
      email: "example@example.invalid",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.checkout_session_customer_verification_id);
console.log(result.checkout_session_id);
