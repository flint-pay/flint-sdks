import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.customerVerifications.get(
  "cver_01KEZF7C00E7S01991S7457CVK"
);
console.log(result.customer_id);
console.log(result.customer_verification_id);
