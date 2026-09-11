import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.revokeDeliveryDependency(
  {
    body: {
      reason: "unsafe_configuration",
      target: {
        target_type: "location_geography",
        location_id: "example",
        location_geography_revision: "100",
      },
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.delivery_revocation_id);
console.log(result.meta.requestId);
