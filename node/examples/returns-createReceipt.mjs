import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createReceipt(
  "example",
  {
    line_items: [
      {
        type: "matched",
        quantity: "100",
        return_line_item_id: "example",
      },
    ],
    received_at: "2026-01-01T00:00:00Z",
    receiving_location_id: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.receiving_location_id);
console.log(result.return_id);
