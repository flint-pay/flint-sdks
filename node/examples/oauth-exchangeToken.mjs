import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.oauth.exchangeToken(
  {
    grant_type: "authorization_code",
    code: "example",
    redirect_uri: "example",
    code_verifier: "examplexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  }
);
console.log(result);
