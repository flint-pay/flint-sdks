import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.subscriptionDeliveryMigrations.get(
  "sdmig_01KEZF7C00H8KGVKXANJWJVDH7"
);
console.log(result.from_delivery_method_id);
console.log(result.status);
