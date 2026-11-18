[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessActionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | The kind of step to take. Each value says what the step is and who carries it out. Values: [8 declared values](#readinessactionpreviousattributes-action_type-values). `action_type`: [declared alternatives](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributesaction_type). |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSessionPreviousAttributes](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributes) or null | Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged. |
| `owner` | Optional | string or null | Who has to act on this step. Values: `"integrator"`, `"merchant"`, `"flint"`. `owner`: [declared alternatives](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributesowner). |
| `required_fields` | Optional | Array of string or null | Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. `required_fields`: [declared alternatives](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributesrequired_fields). |

#### ReadinessActionPreviousAttributes action_type values

- `"advance_onboarding"`
- `"create_merchant_account_session"`
- `"wait_for_review"`
- `"settle_flint_balance"`
- `"set_tax_category"`
- `"update_payment_settings"`
- `"contact_support"`
- `"other"`

### ReadinessActionPreviousAttributes.action_type

### ReadinessActionPreviousAttributes.action_type variant 1

anyOf variant 1: The kind of step to take. Each value says what the step is and who carries it out..

- Value shape: string. The kind of step to take. Each value says what the step is and who carries it out. Values: `"advance_onboarding"`, `"create_merchant_account_session"`, `"wait_for_review"`, `"settle_flint_balance"`, `"set_tax_category"`, `"update_payment_settings"`, `"contact_support"`, `"other"`.

### ReadinessActionPreviousAttributes.action_type variant 2

anyOf variant 2.

- Value shape: null. The kind of step to take. Each value says what the step is and who carries it out. 

### ReadinessActionPreviousAttributes.owner

### ReadinessActionPreviousAttributes.owner variant 1

anyOf variant 1: Who has to act on this step..

- Value shape: string. Who has to act on this step. Values: `"integrator"`, `"merchant"`, `"flint"`.

### ReadinessActionPreviousAttributes.owner variant 2

anyOf variant 2.

- Value shape: null. Who has to act on this step. 

### ReadinessActionPreviousAttributes.required_fields

### ReadinessActionPreviousAttributes.required_fields variant 1

anyOf variant 1: Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare..

- Value shape: Array of string. Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. 

### ReadinessActionPreviousAttributes.required_fields variant 2

anyOf variant 2.

- Value shape: null. Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. 

