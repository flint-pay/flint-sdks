import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.refunds.get(
  "ref_01KEZF7C003DTD59WKYHEXYQ1K"
);
console.log(result.merchant_id);
console.log(result.refund_id);
