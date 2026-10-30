import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnReceipts.verifyLineItem(
  "retrc_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    return_line_item_id: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    verification_reason: "order_match_confirmed",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.receiving_location_id);
console.log(result.return_id);
