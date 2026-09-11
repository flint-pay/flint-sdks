import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.updateDeliveryZone(
  {
    delivery_zone_id: "example",
    body: {
      name: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.current_delivery_zone_revision_id);
console.log(result.data.data.delivery_zone_id);
console.log(result.meta.requestId);
