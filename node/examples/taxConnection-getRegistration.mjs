import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.taxConnection.getRegistration(
  "trg_01KEZF7C008JBM8XMQB3J1FK7J"
);
console.log(result.status);
console.log(result.tax_registration_id);
