import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryMethods.create(
  {
    configuration: {
      minimum_option_lifetime_seconds: 120,
      origin: {
        location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX",
        type: "fixed_location",
      },
      pricing: {
        calculated: {},
        type: "calculated",
      },
    },
    name: "Standard shipping",
    type: "shipment",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.current_delivery_method_revision_id);
console.log(result.delivery_method_id);
