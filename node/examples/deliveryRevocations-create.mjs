import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRevocations.create(
  {
    reason: "unsafe_configuration",
    target: {
      location_geography_version: 1,
      location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX",
      target_type: "location_geography",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.delivery_revocation_id);
