import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
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
  },
  { maxAttempts: 1 },
);
console.log(result.current_delivery_method_revision_id);
console.log(result.delivery_method_id);
