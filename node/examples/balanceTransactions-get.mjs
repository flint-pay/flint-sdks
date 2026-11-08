import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.balanceTransactions.get(
  "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"
);
console.log(result.balance_transaction_id);
console.log(result.merchant_id);
