import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createDisposition(
  "ret_01KEZF7C00PG93650ZKVQNGF7X",
  {
    disposition_type: "sellable",
    inventory_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX",
    occurred_at: "2026-09-08T14:20:00Z",
    quantity: 1,
    reason: "return_policy",
    return_receipt_line_item_id: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.return_disposition_id);
console.log(result.return_id);
