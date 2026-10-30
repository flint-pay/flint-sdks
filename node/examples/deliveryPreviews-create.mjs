import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.deliveryPreviews.create(
  {
    currency: "USD",
    line_items: [
      {
        type: "variant",
        variant_id: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      },
    ],
    mode: "delivery_options",
  }
);
console.log(result);
