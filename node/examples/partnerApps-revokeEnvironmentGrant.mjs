import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.revokeEnvironmentGrant(
  "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV",
  "pinst_01KEZF7C003HVKZR3GZAW6AFAZ",
  "egrt_01KEZF7C00MQQDDB7YWGXV3MXY",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result);
