import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.riskRules.get(
  "rule_01KEZF7C00FWGAQJXXA8CRA319"
);
console.log(result.risk_rule_id);
console.log(result.status);
