import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryZones.create(
  {
    configuration: {
      country: {
        values: ["example"],
      },
    },
    name: "Standard delivery",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.current_delivery_zone_revision_id);
console.log(result.delivery_zone_id);
