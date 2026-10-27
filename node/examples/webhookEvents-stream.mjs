import { Client, EventStream } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.webhookEvents.stream();
console.log(result.meta.requestId);
if (result.data instanceof EventStream) {
  for await (const event of result.data) { console.log(event.event, event.id, event.data); break; }
}
await client.close();
