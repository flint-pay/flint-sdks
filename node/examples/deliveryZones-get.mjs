import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.deliveryZones.get(
  "dzone_01KEZF7C005RY7KGCN4M2CH5WP"
);
console.log(result.current_delivery_zone_revision_id);
console.log(result.delivery_zone_id);
