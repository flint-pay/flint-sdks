[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessActionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | The kind of step to take. Each value says what the step is and who carries it out. Values: [9 declared values](#readinessactionpreviousattributesinput-action_type-values). `action_type`: [declared alternatives](../models/ReadinessActionPreviousAttributesInput.md#readinessactionpreviousattributesinputaction_type). |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSessionPreviousAttributesInput](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinput) or null | Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged. |
| `owner` | Optional | string or null | Who has to act on this step. Values: `"integrator"`, `"merchant"`, `"flint"`. `owner`: [declared alternatives](../models/ReadinessActionPreviousAttributesInput.md#readinessactionpreviousattributesinputowner). |
| `required_fields` | Optional | Array of string or null | Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. `required_fields`: [declared alternatives](../models/ReadinessActionPreviousAttributesInput.md#readinessactionpreviousattributesinputrequired_fields). |
| `url` | Optional | string or null | The API endpoint for this step, when one applies. `url`: [declared alternatives](../models/ReadinessActionPreviousAttributesInput.md#readinessactionpreviousattributesinputurl). |

#### ReadinessActionPreviousAttributesInput action_type values

- `"advance_onboarding"`
- `"create_merchant_account_session"`
- `"wait_for_review"`
- `"settle_flint_balance"`
- `"set_tax_category"`
- `"update_payment_settings"`
- `"replace_default_payout_destination"`
- `"contact_support"`
- `"other"`

### ReadinessActionPreviousAttributesInput.action_type

### ReadinessActionPreviousAttributesInput.action_type variant 1

anyOf variant 1: The kind of step to take. Each value says what the step is and who carries it out..

- Value shape: string. The kind of step to take. Each value says what the step is and who carries it out. Values: `"advance_onboarding"`, `"create_merchant_account_session"`, `"wait_for_review"`, `"settle_flint_balance"`, `"set_tax_category"`, `"update_payment_settings"`, `"replace_default_payout_destination"`, `"contact_support"`, `"other"`.

### ReadinessActionPreviousAttributesInput.action_type variant 2

anyOf variant 2.

- Value shape: null. The kind of step to take. Each value says what the step is and who carries it out. 

### ReadinessActionPreviousAttributesInput.owner

### ReadinessActionPreviousAttributesInput.owner variant 1

anyOf variant 1: Who has to act on this step..

- Value shape: string. Who has to act on this step. Values: `"integrator"`, `"merchant"`, `"flint"`.

### ReadinessActionPreviousAttributesInput.owner variant 2

anyOf variant 2.

- Value shape: null. Who has to act on this step. 

### ReadinessActionPreviousAttributesInput.required_fields

### ReadinessActionPreviousAttributesInput.required_fields variant 1

anyOf variant 1: Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare..

- Value shape: Array of string. Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. 

### ReadinessActionPreviousAttributesInput.required_fields variant 2

anyOf variant 2.

- Value shape: null. Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. 

### ReadinessActionPreviousAttributesInput.url

### ReadinessActionPreviousAttributesInput.url variant 1

anyOf variant 1: The API endpoint for this step, when one applies..

- Value shape: string. The API endpoint for this step, when one applies. 

### ReadinessActionPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. The API endpoint for this step, when one applies. 

