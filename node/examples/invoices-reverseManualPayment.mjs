import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.invoices.reverseManualPayment(
  "inv_01KEZF7C00A5GEBMWHEAJFSAR4",
  "omp_01KEZF7C007J18203RBJKB9TYE",
  undefined,
  { idempotencyKey: idempotencyKey },
);
console.log(result.invoice.invoice_id);
console.log(result.invoice.merchant_id);
