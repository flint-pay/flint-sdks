import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createReturnReason(
  {
    body: {
      handle: "example",
      name: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.return_reason_id);
console.log(result.data.data.status);
console.log(result.meta.requestId);
