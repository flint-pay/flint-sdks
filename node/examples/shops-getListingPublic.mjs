import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.shops.getListingPublic(
  "shop_01KEZF7C005VQBPV4FZHDZPAHE",
  "shl_01KEZF7C005YZXRPWEH31ZXGKA"
);
console.log(result.shop_listing_id);
