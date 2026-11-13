[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## NextActionInput

A follow-up action. When target_resource is present, send its resource_id in the target request field named {resource_type}_id.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Action to take next. Use its target resource and required_fields to prepare the request. Values: [34 declared values](#nextactioninput-action_type-values). |
| `expires_at` | Optional | string | When this suggested action expires, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSessionInput](../models/ReadinessMerchantAccountSessionInput.md#readinessmerchantaccountsessioninput) | Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect. |
| `reason_code` | Optional | string | Machine-readable reason this action is suggested. |
| `reason_message` | Optional | string | Explanation of why this action is suggested. |
| `required_fields` | Optional | Array of string | Field names that must be supplied to perform this action. |
| `required_scope` | Optional | string | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `requires_human_confirmation` | Optional | boolean | Whether a person must approve the action before it is performed. |
| `suggested_delay_milliseconds` | Optional | integer | Suggested wait before performing the action, in milliseconds. Format: `int32`. |
| `target_resource` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. A reference to another resource by `resource_type` and `resource_id`. |
| `url` | Optional | string | Public endpoint or launch URL for this remediation action, when applicable. |

#### NextActionInput action_type values

- `"get_operation"`
- `"create_checkout_session_customer_verification"`
- `"get_checkout_session"`
- `"get_payment_intent"`
- `"confirm_payment_intent"`
- `"capture_payment_intent"`
- `"cancel_payment_intent"`
- `"get_order"`
- `"update_order"`
- `"update_invoice"`
- `"pay_order"`
- `"close_order"`
- `"add_line_items"`
- `"update_checkout_session"`
- `"close_checkout_session"`
- `"create_refund"`
- `"get_refund"`
- `"get_payment_link_public"`
- `"update_payment_link"`
- `"update_inventory_allocation_policy"`
- `"update_settings"`
- `"update_location"`
- `"update_delivery_profile"`
- `"get_dispute"`
- `"review_onboarding_state"`
- `"create_dispute_response_session"`
- `"review_merchant_readiness"`
- `"recreate_delivery_quote"`
- `"create_merchant_account_session"`
- `"issue_developer_sandbox_test_key"`
- `"start_new_image_ingestion"`
- `"get_payout_settings"`
- `"payment_authentication"`
- `"complete_gift_card_challenge"`

