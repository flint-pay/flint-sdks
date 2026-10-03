import { Client, EventStream } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.webhookEvents.stream(

);
console.log(result.meta.requestId);
if (result.data instanceof EventStream) {
  for await (const event of result.data) { console.log(event.event, event.id, event.data); break; }
}
await client.close();
