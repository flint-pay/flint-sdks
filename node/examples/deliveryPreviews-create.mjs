import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.deliveryPreviews.create(
  {
    body: {
      currency: "USD",
      line_items: [
        {
          type: "variant",
          variant_id: "example",
        },
      ],
      mode: "delivery_options",
    },
  }
);
console.log(result);
