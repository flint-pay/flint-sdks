import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryProfiles.assignToUnconfigured(
  "dprof_01KEZF7C0020J13FQYNY9854R0",
  undefined,
  { idempotencyKey: idempotencyKey },
);
console.log(result.delivery_profile_id);
console.log(result.unconfigured_assignment.status);
