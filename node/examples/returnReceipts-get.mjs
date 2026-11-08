import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.returnReceipts.get(
  "retrc_01KEZF7C0052GWDW41D9AJAVJZ"
);
console.log(result.receiving_location_id);
console.log(result.return_id);
