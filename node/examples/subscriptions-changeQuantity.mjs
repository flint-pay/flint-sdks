import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.changeQuantity(
  "sub_01KEZF7C00BVRE8YDBXQB74BBM",
  {
    billing_starts: "prorated_now",
    expected_version: 1,
    quantity: 2,
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.subscription.customer_id);
console.log(result.subscription.merchant_id);
