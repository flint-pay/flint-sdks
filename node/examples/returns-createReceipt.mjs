import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createReceipt(
  "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    line_items: [
      {
        type: "matched",
        quantity: 1,
        return_line_item_id: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      },
    ],
    received_at: "2026-01-01T00:00:00Z",
    receiving_location_id: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.receiving_location_id);
console.log(result.return_id);
