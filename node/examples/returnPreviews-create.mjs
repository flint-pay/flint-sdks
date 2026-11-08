import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.returnPreviews.create(
  {
    mode: "eligibility",
    eligibility: {
      order_id: "ord_01KEZF7C0054GQKJ142A8X367A",
      selection: {
        selection_type: "all_remaining_fulfilled",
      },
    },
  }
);
console.log(result);
