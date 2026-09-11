import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createFulfillmentEvent(
  {
    fulfillment_id: "example",
    body: {
      event_type: "shipped",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.fulfillment_event.fulfillment_event_id);
console.log(result.data.data.fulfillment_event.fulfillment_id);
console.log(result.meta.requestId);
