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

const result = await client.me.changeSubscriptionQuantity(
  "sub_01KEZF7C00BVRE8YDBXQB74BBM",
  {
    billing_starts: "period_end",
    expected_version: 1,
    line_items: [
      {
        quantity: 2,
        subscription_line_item_id: "sli_01KEZF7C00VQ081BX7W2T96R71",
      },
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.subscription.customer_id);
console.log(result.subscription.merchant_id);
