import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.subscriptionPreviews.create(
  {
    mode: "next_renewal",
    subscription_id: "sub_00000000000000000000000000",
  }
);
console.log(result);
