import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReservations.create(
  {
    demands: [],
    inventory_routing_source: {
      type: "fixed_location",
      location_id: "example",
    },
    owner: {
      expires_at: "2026-01-01T00:00:00Z",
      key: "example",
    },
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.inventory_reservation.inventory_reservation_id);
console.log(result.inventory_reservation.status);
