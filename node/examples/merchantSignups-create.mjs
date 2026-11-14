import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantSignups.create(
  {
    business_name: "Tidewater Yoga",
    code_challenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
    code_challenge_method: "S256",
    external_reference_id: "studio_8812",
    modes: ["test", "live"],
    owner: {
      email: "maya@tidewateryoga.example",
      first_name: "Maya",
      last_name: "Okafor",
    },
    partner_app_id: "papp_01KEZF7C00D8DXK5AXR7NPRJ0J",
    requested_permission_ids: ["setup_payments", "sell"],
    sandbox_initial_onboarding: "not_started",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_signup_id);
console.log(result.partner_app_id);
