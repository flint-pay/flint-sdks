import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.updateTaxExemption(
  "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  "ctex_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    description: "Example exemption",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.customer_tax_exemption_id);
