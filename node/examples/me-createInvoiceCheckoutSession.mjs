import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const customerToken = process.env.CUSTOMER_TOKEN;
if (!customerToken) throw new Error("Set CUSTOMER_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  customerToken,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createInvoiceCheckoutSession(
  "inv_01KEZF7C00A5GEBMWHEAJFSAR4",
  undefined,
  { idempotencyKey: idempotencyKey },
);
console.log(result.checkout_session.checkout_session_id);
console.log(result.checkout_session.merchant_id);
