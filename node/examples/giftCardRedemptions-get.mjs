import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.giftCardRedemptions.get(
  "gcr_01KEZF7C002YD2G2J734RRZTWT"
);
console.log(result.gift_card_id);
console.log(result.gift_card_redemption_id);
