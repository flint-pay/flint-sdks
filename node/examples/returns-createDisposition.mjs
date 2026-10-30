import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createDisposition(
  "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    disposition_type: "sellable",
    occurred_at: "2026-01-01T00:00:00Z",
    quantity: 1,
    reason: "inspection_result",
    return_receipt_line_item_id: "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.return_disposition_id);
console.log(result.return_id);
