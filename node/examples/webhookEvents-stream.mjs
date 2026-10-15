import { Client, EventStream } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
});
const result = await client.webhookEvents.stream();
console.log(result.meta.requestId);
if (result.data instanceof EventStream) {
  for await (const event of result.data) { console.log(event.event, event.id, event.data); break; }
}
await client.close();
