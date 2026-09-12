import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRevocations.revokeDeliveryDependency(
  {
    reason: "unsafe_configuration",
    target: {
      target_type: "location_geography",
      location_id: "example",
      location_geography_revision: "100",
    },
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.delivery_revocation_id);
