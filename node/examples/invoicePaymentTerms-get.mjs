import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.invoicePaymentTerms.get(
  "ipt_01KEZF7C0064N1V301BBMQ37R4"
);
console.log(result.invoice_payment_term_id);
console.log(result.merchant_id);
