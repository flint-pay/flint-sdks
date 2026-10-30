[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderActivityInput

Read-only order history row for merchant timeline rendering and debugging. The owning resource remains authoritative for state and money movement.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Optional | string | The action recorded on the order. Omitted when the activity type cannot be identified. Clients must accept values added in future releases. Values: [27 declared values](#orderactivityinput-activity_type-values). |
| `balance_delta_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Change to the order balance narrated by this row. Informational rows have amount 0. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Related checkout session when activity_type points at checkout session lifecycle. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Required | string | Human-readable Flint description. Provider-specific raw statuses and failure values are not exposed here. |
| `fulfillment_id` | Optional | string | Related fulfillment for a fulfillment_created, fulfillment_updated, or fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment. |
| `order_activity_id` | Required | string | Unique identifier for this activity, prefixed oact_. |
| `order_charge_id` | Optional | string | Related charge for a charge_added, charge_updated, charge_removed, or charge_fulfillment_updated activity. Omitted when the row does not identify one charge. |
| `order_discount_id` | Optional | string | Related discount for a discount_applied or discount_removed activity. Omitted when the row does not identify one discount. |
| `order_line_item_id` | Optional | string | Related line item for a line_item_added, line_item_updated, or line_item_removed activity. Omitted when the row does not identify one line item. |
| `order_tip_id` | Optional | string | Related requested tip for a requested_tip_added, requested_tip_updated, or requested_tip_removed activity. Omitted when the row does not identify one tip. |
| `payment_intent_id` | Optional | string | Related payment intent when activity_type points at a payment attempt or payment outcome. |
| `refund_id` | Optional | string | Related refund when activity_type points at a refund outcome. Read the refund for the authoritative outcome. |
| `running_balance_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Order balance after this activity in chronological time. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### OrderActivityInput activity_type values

- `"created"`
- `"line_item_added"`
- `"line_item_updated"`
- `"line_item_removed"`
- `"discount_applied"`
- `"discount_removed"`
- `"tax_updated"`
- `"requested_tip_added"`
- `"requested_tip_updated"`
- `"requested_tip_removed"`
- `"charge_added"`
- `"charge_updated"`
- `"charge_removed"`
- `"charge_fulfillment_updated"`
- `"order_updated"`
- `"adjustment"`
- `"closed"`
- `"payment"`
- `"payment_failed"`
- `"refund"`
- `"refund_failed"`
- `"checkout_session_created"`
- `"checkout_session_expired"`
- `"checkout_session_invalidated"`
- `"fulfillment_created"`
- `"fulfillment_updated"`
- `"fulfillment_state_changed"`

