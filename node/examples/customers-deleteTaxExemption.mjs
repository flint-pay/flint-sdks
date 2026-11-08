import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.deleteTaxExemption(
  "cus_01KEZF7C006X9JK6NZNA2SM9XD",
  "ctex_01KEZF7C009N0YTK0NMWP1XZPW",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.customer_tax_exemption_id);
