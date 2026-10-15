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

const result = await client.returns.processExisting(
  "example",
  {
    line_items: [
      {
        return_line_item_id: "example",
      },
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.return.order_id);
console.log(result.return.return_id);
