[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## NextAction

A suggested next step for resolving an error, warning, or blocked state, such as the API operation to call or the scope it needs.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Action to take next. Use its target resource and required_fields to prepare the request. Values: [25 declared values](NextActionInput.md#nextactioninput-action_type-values). |
| `expires_at` | Optional | string | When this suggested action expires, in RFC3339 format. Format: `date-time`. |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSession](../models/ReadinessMerchantAccountSession.md#readinessmerchantaccountsession) | Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect. |
| `reason_code` | Optional | string | Machine-readable reason this action is suggested. |
| `reason_message` | Optional | string | Explanation of why this action is suggested. |
| `required_fields` | Optional | Array of string | Field names that must be supplied to perform this action. |
| `required_scope` | Optional | string | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [96 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `requires_human_confirmation` | Optional | boolean | Whether a person must approve the action before it is performed. |
| `suggested_delay_milliseconds` | Optional | integer | Suggested wait before performing the action, in milliseconds. Format: `int32`. |
| `url` | Optional | string | Public endpoint or launch URL for this remediation action, when applicable. |

