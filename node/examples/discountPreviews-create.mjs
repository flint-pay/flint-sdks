import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.discountPreviews.create(
  {
    discount: {
      promotion: {
        promotion_code: "SPRING15",
      },
    },
    order_id: "ord_01HZYV7Q9Y0Y4H8Q3H9F6R7T8J",
  }
);
console.log(result);
