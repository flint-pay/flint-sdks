import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.retryReturnDisposition(
  {
    return_disposition_id: "example",
    body: {
      reason: "dependency_recovered",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.return_disposition_id);
console.log(result.data.data.return_id);
console.log(result.meta.requestId);
