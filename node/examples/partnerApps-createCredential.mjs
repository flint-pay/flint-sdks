import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.createCredential(
  "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    name: "Production signing key",
    public_key: {
      jwk: {
        crv: "P-256",
        kid: "production-key",
        kty: "EC",
        x: "axfR8uEsQkf4vOblY6RA8ncDfYEt6zOg9KE5RdiYwpY",
        y: "T-NC4v4af5uO5-tKfA-eFivOM1drMV7Oy7ZAaDe_UfU",
      },
    },
    type: "public_key",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.partner_app_credential_id);
console.log(result.partner_app_id);
