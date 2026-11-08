import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.invoices.getPaymentAttempt(
  "inv_01KEZF7C00A5GEBMWHEAJFSAR4",
  "invpa_01KEZF7C00PMWEDPAYYEKDTPBX"
);
console.log(result.invoice_id);
console.log(result.invoice_payment_attempt_id);
