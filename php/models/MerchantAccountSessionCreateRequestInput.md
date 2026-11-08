[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionCreateRequestInput

Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string | Which requirements the session collects. If omitted, `incremental` for an account that hasn't finished onboarding, otherwise `upfront`. Only `account_onboarding` and `account_management` take it. Values: `"upfront"`, `"incremental"`. |
| `components` | Required | Array of string | The embedded components the session opens, such as `account_onboarding`. Send each component once. A partner app install token can open only `account_onboarding` and `notification_banner`; another component returns `400 INVALID_REQUEST` with detail `NOT_ALLOWED`. With an API key or CLI login, `payments` also requires `payments.payment_intents.read` and `payments.disputes.write`; without them the request returns `403 INSUFFICIENT_SCOPE`. minItems: `1`. maxItems: `7`. uniqueItems: `true`. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`, `"payments"`. |
| `future_requirements` | Optional | string | Whether the session also collects requirements that will apply later. If omitted, `omit` while onboarding isn't finished or while something is due, otherwise `include`. Only `account_onboarding` and `account_management` take it. Values: `"omit"`, `"include"`. |
| `targeted_requirements` | Optional | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. At most 100 codes, each up to 255 UTF-8 bytes after trimming surrounding whitespace. Only `account_onboarding` takes them. maxItems: `100`. Items values: [32 declared values](#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |

#### MerchantAccountSessionCreateRequestInput targeted_requirements [] values

- `"additional_account_information"`
- `"business_address"`
- `"business_description"`
- `"business_directors"`
- `"business_executives"`
- `"business_name"`
- `"business_owners"`
- `"business_phone"`
- `"business_support_phone"`
- `"business_support_url"`
- `"business_tax_id"`
- `"business_verification_document"`
- `"business_website"`
- `"merchant_category_code"`
- `"owner_address"`
- `"owner_additional_identity_document"`
- `"owner_date_of_birth"`
- `"owner_first_name"`
- `"owner_identity_document"`
- `"owner_last_name"`
- `"owner_tax_id_last_four"`
- `"payout_destination"`
- `"representative_address"`
- `"representative_additional_identity_document"`
- `"representative_date_of_birth"`
- `"representative_email"`
- `"representative_first_name"`
- `"representative_identity_document"`
- `"representative_last_name"`
- `"representative_phone"`
- `"representative_tax_id"`
- `"representative_tax_id_last_four"`

