import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const customerToken = process.env.CUSTOMER_TOKEN;
if (!customerToken) throw new Error("Set CUSTOMER_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  customerToken,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createReturn(
  {
    line_items: [
      {
        order_line_item_id: "example",
        requested_quantity: "100",
        return_reason_id: "example",
      },
    ],
    order_id: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.order_id);
console.log(result.return_id);
