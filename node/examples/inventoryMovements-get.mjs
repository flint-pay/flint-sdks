import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.inventoryMovements.get(
  "invm_01KEZF7C00DYPFT9PS0NZY805Z"
);
console.log(result.inventory_item_id);
console.log(result.inventory_level_id);
