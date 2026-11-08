import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.partnerApps.getCredential(
  "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV",
  "pacr_01KEZF7C005RDK44XFG5WF94BB"
);
console.log(result.partner_app_credential_id);
console.log(result.partner_app_id);
