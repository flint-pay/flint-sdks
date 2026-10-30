[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessMerchantAccountSession

Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Required | string | Values: `"upfront"`, `"incremental"`. |
| `components` | Required | Array of string | Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`. |
| `future_requirements` | Required | string | Values: `"omit"`, `"include"`. |
| `targeted_requirements` | Optional | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). |

