import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.orderEditPreviews.create(
  {
    order_id: "ord_01KEZF7C0054GQKJ142A8X367A",
    remove_line_items: [
      {
        order_line_item_id: "li_01KEZF7C008YPRCK7VDKTGWR31",
        quantity: 1,
      },
    ],
  }
);
console.log(result.order_id);
