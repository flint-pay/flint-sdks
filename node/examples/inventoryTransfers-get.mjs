import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.inventoryTransfers.get(
  "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP"
);
console.log(result.destination_location_id);
console.log(result.inventory_transfer_id);
