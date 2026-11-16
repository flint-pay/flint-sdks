[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## NextActionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | Action to take next. Use its target resource and required_fields to prepare the request. Values: [163 declared values](NextActionInput.md#nextactioninput-action_type-values). `action_type`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1action_type). |
| `expires_at` | Optional | string or null | When this suggested action expires, in RFC3339 format. `expires_at`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesexpires_at). |
| `merchant_account_session` | Optional | Alternative shapes (see declared variants) | Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. `merchant_account_session`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session). |
| `method` | Optional | string or null | HTTP method for the recovery read. Values: `"GET"`. `method`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1method). |
| `reason_code` | Optional | string or null | Machine-readable reason this action is suggested. `reason_code`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1reason_code). |
| `reason_message` | Optional | string or null | Explanation of why this action is suggested. `reason_message`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1reason_message). |
| `required_fields` | Optional | Array of string or null | Field names that must be supplied to perform this action. `required_fields`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1required_fields). |
| `required_scope` | Optional | string or null | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). `required_scope`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1required_scope). |
| `requires_human_confirmation` | Optional | boolean or null | Whether a person must approve the action before it is performed. `requires_human_confirmation`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1requires_human_confirmation). |
| `suggested_delay_milliseconds` | Optional | integer or null | Suggested wait before performing the action, in milliseconds. `suggested_delay_milliseconds`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1suggested_delay_milliseconds). |
| `target_resource` | Optional | Alternative shapes (see declared variants) | Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. `target_resource`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1target_resource). |
| `url` | Optional | string or null | Public endpoint or launch URL for this remediation action, when applicable. `url`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1url). |

### NextActionPreviousAttributes.action_type

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.action_type](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1action_type).

### NextActionPreviousAttributes.expires_at

### NextActionPreviousAttributes.expires_at variant 1

anyOf variant 1: When this suggested action expires, in RFC3339 format..

- Value shape: string. When this suggested action expires, in RFC3339 format. When this suggested action expires, in RFC3339 format. Format: `date-time`. 

### NextActionPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When this suggested action expires, in RFC3339 format. 

### NextActionPreviousAttributes.merchant_account_session

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session).

### NextActionPreviousAttributes.method

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.method](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1method).

### NextActionPreviousAttributes.reason_code

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.reason_code](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1reason_code).

### NextActionPreviousAttributes.reason_message

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.reason_message](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1reason_message).

### NextActionPreviousAttributes.required_fields

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.required_fields](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1required_fields).

### NextActionPreviousAttributes.required_scope

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.required_scope](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1required_scope).

### NextActionPreviousAttributes.requires_human_confirmation

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.requires_human_confirmation](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1requires_human_confirmation).

### NextActionPreviousAttributes.suggested_delay_milliseconds

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.suggested_delay_milliseconds](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1suggested_delay_milliseconds).

### NextActionPreviousAttributes.target_resource

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.target_resource](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1target_resource).

### NextActionPreviousAttributes.url

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.url](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1url).

