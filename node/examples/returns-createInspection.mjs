import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createInspection(
  "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    inspected_at: "2026-01-01T00:00:00Z",
    inspection_location_id: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    line_items: [
      {
        acceptance_status: "accepted",
        condition: "new",
        quantity: 1,
        return_receipt_line_item_id: "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      },
    ],
    return_receipt_id: "retrc_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inspection_location_id);
console.log(result.return_id);
