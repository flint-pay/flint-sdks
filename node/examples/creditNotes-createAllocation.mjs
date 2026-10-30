import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.createAllocation(
  "cn_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    amount_money: {
      amount: "100",
      currency: "USD",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.credit_note.credit_note_id);
console.log(result.credit_note.invoice_id);
