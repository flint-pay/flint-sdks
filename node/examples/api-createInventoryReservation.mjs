import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createInventoryReservation(
  {
    "Idempotency-Key": "example",
    body: {
      demands: [],
      inventory_routing_source: {
        type: "fixed_location",
        location_id: "example",
      },
      owner: {
        expires_at: "2026-01-01T00:00:00Z",
        key: "example",
      },
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.inventory_reservation.inventory_reservation_id);
console.log(result.data.data.inventory_reservation.status);
console.log(result.meta.requestId);
