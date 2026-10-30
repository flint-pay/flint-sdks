import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryItems.create(
  {
    barcode: "0781234567890",
    name: "Ceramic mug, 12oz",
    sku: "mug-12-white",
    status: "active",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_item_id);
console.log(result.status);
