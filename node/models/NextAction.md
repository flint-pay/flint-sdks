[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## NextAction

A suggested next step for resolving an error, warning, or blocked state, such as the API operation to call or the scope it needs.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Action to take next. Use its target resource and required_fields to prepare the request. Values: [26 declared values](#nextaction-action_type-values). |
| `expires_at` | Optional | string | When this suggested action expires, in RFC3339 format. Format: `date-time`. |
| `merchant_account_session` | Optional | [NextActionMerchantAccountSession](../models/NextActionMerchantAccountSession.md#nextactionmerchantaccountsession) | Request body fields to send to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. Recommended request body fields for creating a merchant account session when a next action is `create_merchant_account_session`. |
| `reason_code` | Optional | string | Machine-readable reason this action is suggested. |
| `reason_message` | Optional | string | Explanation of why this action is suggested. |
| `required_fields` | Optional | Array of string | Field names that must be supplied to perform this action. |
| `required_scope` | Optional | string | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [95 declared values](APIKey.md#apikey-scopes--values). |
| `requires_human_confirmation` | Optional | boolean | Whether a person must approve the action before it is performed. |
| `suggested_delay_milliseconds` | Optional | integer | Suggested wait before performing the action, in milliseconds. Format: `int32`. |
| `url` | Optional | string | Public endpoint or launch URL for this remediation action, when applicable. |

#### NextAction action_type values

- `"get_operation"`
- `"get_checkout_session"`
- `"get_payment_intent"`
- `"confirm_payment_intent"`
- `"capture_payment_intent"`
- `"cancel_payment_intent"`
- `"get_order"`
- `"capture_order_payment"`
- `"cancel_order_payment"`
- `"pay_order"`
- `"close_order"`
- `"add_line_items"`
- `"update_checkout_session"`
- `"close_checkout_session"`
- `"create_refund"`
- `"get_refund"`
- `"get_dispute"`
- `"review_onboarding_state"`
- `"review_merchant_readiness"`
- `"recreate_delivery_quote"`
- `"create_merchant_account_session"`
- `"issue_developer_sandbox_test_key"`
- `"start_new_image_ingestion"`
- `"get_payout_settings"`
- `"payment_authentication"`
- `"complete_gift_card_challenge"`

