import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.licenseKeyPools.removeKeys(
  "lkp_01KEZF7C00AQV1X2DPWG2NXS7H",
  {
    license_key_pool_key_ids: ["lkpk_01KEZF7C004XWT0EAW2ZQGG93S"],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
