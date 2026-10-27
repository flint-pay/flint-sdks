[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderActivity

Read-only order history row for merchant timeline rendering and debugging. The owning resource remains authoritative for state and money movement.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Optional | string | The action recorded on the order. Omitted when the activity type cannot be identified. Clients must accept values added in future releases. Values: [27 declared values](OrderActivityInput.md#orderactivityinput-activity_type-values). |
| `balance_delta_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Change to the order balance narrated by this row. Informational rows have amount 0. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Related checkout session when activity_type points at checkout session lifecycle. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Required | string | Human-readable Flint description. Provider-specific raw statuses and failure values are not exposed here. |
| `fulfillment_id` | Optional | string |  |
| `order_activity_id` | Required | string |  |
| `order_charge_id` | Optional | string |  |
| `order_discount_id` | Optional | string |  |
| `order_line_item_id` | Optional | string |  |
| `order_tip_id` | Optional | string |  |
| `payment_intent_id` | Optional | string | Related payment intent when activity_type points at a payment attempt or payment outcome. |
| `refund_id` | Optional | string | Related refund when activity_type points at a refund outcome. Read the refund for the authoritative outcome. |
| `running_balance_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Order balance after this activity in chronological time. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |

