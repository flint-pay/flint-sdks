import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
});
const result = await client.demoSessions.reset(
  {}
);
console.log(result.demo_session_id);
console.log(result.sandbox_id);
