import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.customerDeletionRequests.get(
  "cdel_01KEZF7C009P94WEXW5RMRFXAY"
);
console.log(result.customer_deletion_request_id);
console.log(result.customer_id);
