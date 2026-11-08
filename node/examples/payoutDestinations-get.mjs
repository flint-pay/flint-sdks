import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.payoutDestinations.get(
  "pdest_01KEZF7C00M55HZDZXZP6YVE6B"
);
console.log(result.merchant_id);
console.log(result.payout_destination_id);
