[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessMerchantAccountSessionInput

Settings for the merchant account session a `ReadinessAction` calls for: which components to show and which requirements to collect.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Required | string | Values: `"upfront"`, `"incremental"`. |
| `components` | Required | Array of string | Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`. |
| `future_requirements` | Required | string | Values: `"omit"`, `"include"`. |
| `targeted_requirements` | Optional | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |

