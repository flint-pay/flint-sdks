import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.commitInventoryReservation(
  {
    "Idempotency-Key": "example",
    inventory_reservation_id: "example",
    body: {
      lines: [],
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.inventory_reservation.inventory_reservation_id);
console.log(result.data.data.inventory_reservation.status);
console.log(result.meta.requestId);
