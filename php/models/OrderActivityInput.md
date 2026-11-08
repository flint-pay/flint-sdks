[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderActivityInput

Read-only order history row for merchant timeline rendering and debugging. The owning resource remains authoritative for state and money movement.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Optional | string | The action recorded on the order. Omitted when the activity type cannot be identified. Clients must accept values added in future releases. Values: [28 declared values](#orderactivityinput-activity_type-values). |
| `balance_delta_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Signed change this row made to the order balance: running_balance_money minus the balance before the row. Rows that do not change the balance, such as payment_failed, refund_failed, and most refund rows, have amount 0. A payment or refund amount is on the referenced resource. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Related checkout session when activity_type points at checkout session lifecycle. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Required | string | Human-readable Flint description. Provider-specific raw statuses and failure values are not exposed here. |
| `fulfillment_id` | Optional | string | Related fulfillment for a fulfillment_created, fulfillment_updated, or fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `order_activity_id` | Required | string | Unique identifier for this activity, prefixed oact_. Example: `"oact_01KEZF7C006V2DKWC7N41DXD7T"`. |
| `order_charge_id` | Optional | string | Related charge for a charge_added, charge_updated, charge_removed, or charge_fulfillment_updated activity. Omitted when the row does not identify one charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_discount_id` | Optional | string | Related discount for a discount_applied or discount_removed activity. Omitted when the row does not identify one discount. Example: `"ad_01KEZF7C00T30DH97GR0A9BF31"`. |
| `order_line_item_id` | Optional | string | Related line item for a line_item_added, line_item_updated, or line_item_removed activity. Omitted when the row does not identify one line item. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `order_tip_id` | Optional | string | Related requested tip for a requested_tip_added, requested_tip_updated, or requested_tip_removed activity. Omitted when the row does not identify one tip. Example: `"tip_01KEZF7C00JRPYP11RTMB97MYH"`. |
| `payment_intent_id` | Optional | string | Related payment intent when activity_type points at a payment attempt or payment outcome. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refund_id` | Optional | string | Related refund when activity_type points at a refund outcome. Read the refund for the authoritative outcome. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `running_balance_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Signed order balance just after this row: settlement_amounts.outstanding_money minus settlement_amounts.overpaid_money at that moment, negative when the order is overpaid. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |

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
- `"order_edited"`
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

