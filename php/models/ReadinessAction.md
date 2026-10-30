[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessAction

A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Values: [8 declared values](#readinessaction-action_type-values). |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSession](../models/ReadinessMerchantAccountSession.md#readinessmerchantaccountsession) | Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect. |
| `owner` | Required | string | Values: `"integrator"`, `"merchant"`, `"flint"`. |
| `required_fields` | Optional | Array of string |  |

#### ReadinessAction action_type values

- `"advance_onboarding"`
- `"create_api_key"`
- `"create_merchant_account_session"`
- `"wait_for_review"`
- `"settle_flint_balance"`
- `"set_tax_category"`
- `"contact_support"`
- `"other"`

