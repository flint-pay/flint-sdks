[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorRemediationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Optional | Array of [NextActionPreviousAttributes](../models/NextActionPreviousAttributes.md#nextactionpreviousattributes) or null | Suggested actions for resolving the error, including the target resource and any required input. `next_actions`: [declared alternatives](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributesnext_actions). |
| `next_steps` | Optional | string or null | What to change or check before attempting the operation again. `next_steps`: [declared alternatives](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributesnext_steps). |
| `retry` | Optional | string or null | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. `retry`: [declared alternatives](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributesretry). |

### ErrorRemediationPreviousAttributes.next_actions

### ErrorRemediationPreviousAttributes.next_actions variant 1

anyOf variant 1: Suggested actions for resolving the error, including the target resource and any required input..

- Value shape: Array of [NextActionPreviousAttributes](../models/NextActionPreviousAttributes.md#nextactionpreviousattributes). Suggested actions for resolving the error, including the target resource and any required input. 

### ErrorRemediationPreviousAttributes.next_actions variant 2

anyOf variant 2.

- Value shape: null. Suggested actions for resolving the error, including the target resource and any required input. 

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | Action to take next. Use its target resource and required_fields to prepare the request. Values: [172 declared values](NextActionInput.md#nextactioninput-action_type-values). `action_type`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesaction_type). |
| `expires_at` | Optional | string or null | When this suggested action expires, in RFC3339 format. `expires_at`: [declared alternatives](../models/ErrorRemediationPreviousAttributes.md#errorremediationpreviousattributesnext_actions-variant-1-fields-1expires_at). |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSessionPreviousAttributes](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributes) or null | Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. |
| `method` | Optional | string or null | HTTP method for the recovery read. Values: `"GET"`. `method`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesmethod). |
| `reason_code` | Optional | string or null | Machine-readable reason this action is suggested. `reason_code`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesreason_code). |
| `reason_message` | Optional | string or null | Explanation of why this action is suggested. `reason_message`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesreason_message). |
| `required_fields` | Optional | Array of string or null | Field names that must be supplied to perform this action. `required_fields`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesrequired_fields). |
| `required_scope` | Optional | string or null | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [105 declared values](APIKeyInput.md#apikeyinput-scopes--values). `required_scope`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesrequired_scope). |
| `requires_human_confirmation` | Optional | boolean or null | Whether a person must approve the action before it is performed. `requires_human_confirmation`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesrequires_human_confirmation). |
| `suggested_delay_milliseconds` | Optional | integer or null | Suggested wait before performing the action, in milliseconds. `suggested_delay_milliseconds`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributessuggested_delay_milliseconds). |
| `target_resource` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. `target_resource`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributestarget_resource). |
| `url` | Optional | string or null | Public endpoint or launch URL for this remediation action, when applicable. `url`: [declared alternatives](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesurl). |

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.action_type

Declared alternatives: [NextActionPreviousAttributes.action_type](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesaction_type).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.expires_at

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.expires_at variant 1

anyOf variant 1: When this suggested action expires, in RFC3339 format..

- Value shape: string. When this suggested action expires, in RFC3339 format. When this suggested action expires, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. When this suggested action expires, in RFC3339 format. 

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.method

Declared alternatives: [NextActionPreviousAttributes.method](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesmethod).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.reason_code

Declared alternatives: [NextActionPreviousAttributes.reason_code](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesreason_code).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.reason_message

Declared alternatives: [NextActionPreviousAttributes.reason_message](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesreason_message).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.required_fields

Declared alternatives: [NextActionPreviousAttributes.required_fields](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesrequired_fields).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.required_scope

Declared alternatives: [NextActionPreviousAttributes.required_scope](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesrequired_scope).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.requires_human_confirmation

Declared alternatives: [NextActionPreviousAttributes.requires_human_confirmation](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesrequires_human_confirmation).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.suggested_delay_milliseconds

Declared alternatives: [NextActionPreviousAttributes.suggested_delay_milliseconds](../models/NextActionPreviousAttributes.md#nextactionpreviousattributessuggested_delay_milliseconds).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.target_resource

Declared alternatives: [NextActionPreviousAttributes.target_resource](../models/NextActionPreviousAttributes.md#nextactionpreviousattributestarget_resource).

### ErrorRemediationPreviousAttributes.next_actions variant 1.[] fields 1.url

Declared alternatives: [NextActionPreviousAttributes.url](../models/NextActionPreviousAttributes.md#nextactionpreviousattributesurl).

### ErrorRemediationPreviousAttributes.next_steps

### ErrorRemediationPreviousAttributes.next_steps variant 1

anyOf variant 1: What to change or check before attempting the operation again..

- Value shape: string. What to change or check before attempting the operation again. 

### ErrorRemediationPreviousAttributes.next_steps variant 2

anyOf variant 2.

- Value shape: null. What to change or check before attempting the operation again. 

### ErrorRemediationPreviousAttributes.retry

### ErrorRemediationPreviousAttributes.retry variant 1

anyOf variant 1: Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each..

- Value shape: string. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`.

### ErrorRemediationPreviousAttributes.retry variant 2

anyOf variant 2.

- Value shape: null. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. 

