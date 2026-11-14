[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessAction

A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | The kind of step to take. Each value says what the step is and who carries it out. Values: [7 declared values](#readinessaction-action_type-values). |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSession](../models/ReadinessMerchantAccountSession.md#readinessmerchantaccountsession) | Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged. Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect. |
| `owner` | Required | string | Who has to act on this step. Values: `"integrator"`, `"merchant"`, `"flint"`. |
| `required_fields` | Optional | Array of string | Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. |

#### ReadinessAction action_type values

- `"advance_onboarding"`
- `"create_merchant_account_session"`
- `"wait_for_review"`
- `"settle_flint_balance"`
- `"set_tax_category"`
- `"contact_support"`
- `"other"`

