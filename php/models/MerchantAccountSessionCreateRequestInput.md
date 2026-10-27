[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionCreateRequestInput

Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string | Values: `"upfront"`, `"incremental"`. |
| `components` | Required | Array of string | minItems: `1`. maxItems: `6`. uniqueItems: `true`. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`. |
| `future_requirements` | Optional | string | Values: `"omit"`, `"include"`. |
| `targeted_requirements` | Optional | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |

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

