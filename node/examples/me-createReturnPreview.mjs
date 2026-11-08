import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const customerToken = process.env.CUSTOMER_TOKEN;
if (!customerToken) throw new Error("Set CUSTOMER_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  customerToken,
});
const result = await client.me.createReturnPreview(
  {
    eligibility: {
      order_id: "ord_01KEZF7C00RWKW7JDYTZ5A6ET0",
      selection: {
        line_items: [
          {
            order_line_item_id: "li_01KEZF7C00XM6VK5KNWVC3T907",
            requested_quantity: 1,
            return_reason_id: "rrsn_01KEZF7C005274REWXTZRJ4BM0",
          },
        ],
        selection_type: "line_items",
      },
    },
    mode: "eligibility",
  }
);
console.log(result);
