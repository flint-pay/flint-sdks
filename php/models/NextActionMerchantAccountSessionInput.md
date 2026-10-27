[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## NextActionMerchantAccountSessionInput

Recommended request body fields for creating a merchant account session when a next action is `create_merchant_account_session`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string | Recommended verification collection breadth. Values: `"upfront"`, `"incremental"`. |
| `component` | Required | string | Resolver-recommended component to send to POST /v1/merchant-account-sessions. Values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`. |
| `future_requirements` | Optional | string | Recommended future-requirement collection behavior. Values: `"omit"`, `"include"`. |

