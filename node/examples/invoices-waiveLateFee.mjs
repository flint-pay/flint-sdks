import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.invoices.waiveLateFee(
  "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  "inlf_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    reason_message: "Courtesy waiver",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.invoice_id);
console.log(result.merchant_id);
