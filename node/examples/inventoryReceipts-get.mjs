import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.inventoryReceipts.get(
  "invrec_01KEZF7C00JXXCYA06SH8RCM2N"
);
console.log(result.inventory_receipt_id);
