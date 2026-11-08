import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.inventoryItems.get(
  "invi_01KEZF7C00A6YEM25MTHW2MPZY"
);
console.log(result.inventory_item_id);
console.log(result.status);
