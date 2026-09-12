import { Client, EventStream } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.webhookEvents.stream(
  {},
  { maxAttempts: 1 },
);
console.log(result.meta.requestId);
if (result.data instanceof EventStream) {
  for await (const event of result.data) { console.log(event.event, event.id, event.data); break; }
}
await client.close();
