import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.paymentLinks.get(
  "pl_01KEZF7C007WDMA5P9BPZ8J2AM"
);
console.log(result.merchant_id);
console.log(result.payment_link_id);
