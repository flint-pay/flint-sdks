import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.merchantBillingBalances.get(
  "mbbal_01KEZF7C002TWWZA70R4DRVJC9"
);
console.log(result.merchant_billing_balance_id);
