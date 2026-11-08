import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.riskLists.getItem(
  "rl_01KEZF7C00VYSERA4QCTJP147A",
  "rli_01KEZF7C006BND1CJYPAJW9JWE"
);
console.log(result.risk_list_id);
console.log(result.risk_list_item_id);
