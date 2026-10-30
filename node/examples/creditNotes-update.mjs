import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.update(
  "cn_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    memo: "Updated credit note memo",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.credit_note_id);
console.log(result.invoice_id);
