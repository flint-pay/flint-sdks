[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderActivity

Read-only order history row for merchant timeline rendering and debugging. The owning resource remains authoritative for state and money movement.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Optional | string | The action recorded on the order. Omitted when the activity type cannot be identified. Clients must accept values added in future releases. Values: [32 declared values](#orderactivity-activity_type-values). |
| `balance_delta_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed change this row made to the order balance: running_balance_money minus the balance before the row. Rows that do not change the balance, such as payment_failed, refund_failed, and most refund rows, have amount 0. A payment or refund amount is on the referenced resource. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_delta_money`: [field definitions](../models/OrderActivity.md#orderactivitybalance_delta_money). |
| `checkout_session_id` | Optional | string | Related checkout session when activity_type points at checkout session lifecycle. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Required | string | Human-readable Flint description. Provider-specific raw statuses and failure values are not exposed here. |
| `dispute_id` | Optional | string | Related Flint dispute, prefixed du_, for dispute_opened and dispute_closed activities. Omitted for other activities. Dispute activities do not change the order balance. Merchant reads only. Buyer activity lists omit it. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `fulfillment_id` | Optional | string | Related fulfillment for a fulfillment_created, fulfillment_updated, or fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `order_activity_id` | Required | string | Unique identifier for this activity, prefixed oact_. Example: `"oact_01KEZF7C006V2DKWC7N41DXD7T"`. |
| `order_charge_id` | Optional | string | Related charge for a charge_added, charge_updated, charge_removed, or charge_fulfillment_updated activity. Omitted when the row does not identify one charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_discount_id` | Optional | string | Related discount for a discount_applied or discount_removed activity. Omitted when the row does not identify one discount. Example: `"ad_01KEZF7C00T30DH97GR0A9BF31"`. |
| `order_id` | Required | string | Order that owns this record or its referenced line item and charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Optional | string | Related line item for a line_item_added, line_item_updated, or line_item_removed activity. Omitted when the row does not identify one line item. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `order_tip_id` | Optional | string | Related requested tip for a requested_tip_added, requested_tip_updated, or requested_tip_removed activity. Omitted when the row does not identify one tip. Example: `"tip_01KEZF7C00JRPYP11RTMB97MYH"`. |
| `payment_intent_id` | Optional | string | Related payment intent when activity_type points at a payment attempt or payment outcome. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_review_id` | Optional | string | Payment review recorded by this row. Omitted for activities unrelated to payment reviews. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. |
| `refund_id` | Optional | string | Related refund when activity_type points at a refund outcome. Read the refund for the authoritative outcome. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `running_balance_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed order balance just after this row: settlement_amounts.outstanding_money minus settlement_amounts.overpaid_money at that moment, negative when the order is overpaid. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `running_balance_money`: [field definitions](../models/OrderActivity.md#orderactivityrunning_balance_money). |

#### OrderActivity activity_type values

- `"created"`
- `"dispute_opened"`
- `"dispute_closed"`
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
- `"payment_review_opened"`
- `"payment_review_closed"`
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

### OrderActivity.balance_delta_money

Signed change this row made to the order balance: running_balance_money minus the balance before the row. Rows that do not change the balance, such as payment_failed, refund_failed, and most refund rows, have amount 0. A payment or refund amount is on the referenced resource. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

### OrderActivity.running_balance_money

Signed order balance just after this row: settlement_amounts.outstanding_money minus settlement_amounts.overpaid_money at that moment, negative when the order is overpaid. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

