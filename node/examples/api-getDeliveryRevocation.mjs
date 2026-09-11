import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.getDeliveryRevocation(
  {
    delivery_revocation_id: "example",
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.delivery_revocation_id);
console.log(result.meta.requestId);
