import { Client, EventStream } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.webhookEvents.stream();
console.log(result.lastResponse.requestId);
if (result.data instanceof EventStream) {
  for await (const event of result.data) { console.log(event.event, event.id, event.data); break; }
}
await client.close();
