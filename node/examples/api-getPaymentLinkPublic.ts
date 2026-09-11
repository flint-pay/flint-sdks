import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.getPaymentLinkPublic(
  {
    payment_link_id: "example",
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.payment_link.payment_link_id);
console.log(result.data.data.payment_link.status);
console.log(result.meta.requestId);
