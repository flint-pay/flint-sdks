import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryCounts.apply(
  "invc_01KEZF7C00B47NXRE3ET37QQ59",
  undefined,
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_count.inventory_count_id);
console.log(result.inventory_count.location_id);
