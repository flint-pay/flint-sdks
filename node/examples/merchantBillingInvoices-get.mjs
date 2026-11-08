import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.merchantBillingInvoices.get(
  "msinv_01KEZF7C00MB754KPEPACGRMNP"
);
console.log(result.merchant_billing_invoice_id);
console.log(result.status);
