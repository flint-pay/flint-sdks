[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessMerchantAccountSessionInput

Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Required | string | How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Values: `"upfront"`, `"incremental"`. |
| `components` | Required | Array of string | Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`, `"payments"`. |
| `future_requirements` | Required | string | Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Values: `"omit"`, `"include"`. |
| `targeted_requirements` | Optional | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |

