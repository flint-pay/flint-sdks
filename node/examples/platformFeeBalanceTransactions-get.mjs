import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.platformFeeBalanceTransactions.get(
  "pfbt_01KEZF7C0079KPKMAHC7C60G1T"
);
console.log(result.partner_app_id);
console.log(result.platform_fee_balance_transaction_id);
