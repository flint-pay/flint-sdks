import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.createTaxExemption(
  "cus_01KEZF7C006X9JK6NZNA2SM9XD",
  {
    coverage: {
      country: "US",
      states: ["TX"],
      type: "states",
    },
    reason: "resale",
    start_date: "2026-01-01",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.customer_tax_exemption_id);
