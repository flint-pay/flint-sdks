import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.processExisting(
  "example",
  {
    line_items: [
      {
        return_line_item_id: "example",
      },
    ],
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.return.order_id);
console.log(result.return.return_id);
