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

const result = await client.returns.createInspection(
  "example",
  {
    inspected_at: "2026-01-01T00:00:00Z",
    line_items: [
      {
        acceptance_status: "accepted",
        condition: "new",
        quantity: "100",
        return_receipt_line_item_id: "example",
      },
    ],
    location_id: "example",
    return_receipt_id: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.location_id);
console.log(result.return_id);
