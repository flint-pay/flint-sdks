import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.previewPartnerInstallAuthorization(
  {
    client_id: "example",
    redirect_uri: "example",
    mode: "test",
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.client_id);
console.log(result.data.data.partner_app_id);
console.log(result.meta.requestId);
