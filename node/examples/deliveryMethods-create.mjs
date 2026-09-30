import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryMethods.create(
  {
    configuration: {
      minimum_option_lifetime_seconds: "120",
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
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.current_delivery_method_revision_id);
console.log(result.delivery_method_id);
