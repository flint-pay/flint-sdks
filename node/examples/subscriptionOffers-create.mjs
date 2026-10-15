import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
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
    name: "Monthly product subscription",
    product_ids: ["prod_01J00000000000000000000001"],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.status);
console.log(result.subscription_offer_id);
