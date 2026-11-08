[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderActivity

Read-only order history row for merchant timeline rendering and debugging. The owning resource remains authoritative for state and money movement.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Optional | string | The action recorded on the order. Omitted when the activity type cannot be identified. Clients must accept values added in future releases. Values: [28 declared values](OrderActivityInput.md#orderactivityinput-activity_type-values). |
| `balance_delta_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed change this row made to the order balance: running_balance_money minus the balance before the row. Rows that do not change the balance, such as payment_failed, refund_failed, and most refund rows, have amount 0. A payment or refund amount is on the referenced resource. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Related checkout session when activity_type points at checkout session lifecycle. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Required | string | Human-readable Flint description. Provider-specific raw statuses and failure values are not exposed here. |
| `fulfillment_id` | Optional | string | Related fulfillment for a fulfillment_created, fulfillment_updated, or fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment. |
| `order_activity_id` | Required | string | Unique identifier for this activity, prefixed oact_. |
| `order_charge_id` | Optional | string | Related charge for a charge_added, charge_updated, charge_removed, or charge_fulfillment_updated activity. Omitted when the row does not identify one charge. |
| `order_discount_id` | Optional | string | Related discount for a discount_applied or discount_removed activity. Omitted when the row does not identify one discount. |
| `order_line_item_id` | Optional | string | Related line item for a line_item_added, line_item_updated, or line_item_removed activity. Omitted when the row does not identify one line item. |
| `order_tip_id` | Optional | string | Related requested tip for a requested_tip_added, requested_tip_updated, or requested_tip_removed activity. Omitted when the row does not identify one tip. |
| `payment_intent_id` | Optional | string | Related payment intent when activity_type points at a payment attempt or payment outcome. |
| `refund_id` | Optional | string | Related refund when activity_type points at a refund outcome. Read the refund for the authoritative outcome. |
| `running_balance_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed order balance just after this row: settlement_amounts.outstanding_money minus settlement_amounts.overpaid_money at that moment, negative when the order is overpaid. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |

