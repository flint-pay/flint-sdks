import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
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
  }
);
console.log(result.inventory_reservation.inventory_reservation_id);
console.log(result.inventory_reservation.status);
