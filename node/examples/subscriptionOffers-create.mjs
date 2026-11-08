import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionOffers.create(
  {
    billing_interval_options: [
      {
        billing_interval: "monthly",
        billing_interval_count: 1,
      },
    ],
    name: "Monthly coffee",
    product_ids: ["prod_01KEZF7C00027JTCXQ7TQF86X8"],
    status: "active",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.status);
console.log(result.subscription_offer_id);
