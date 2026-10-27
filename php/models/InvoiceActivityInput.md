[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceActivityInput

Read-only invoice history row for timeline rendering and debugging. Detail fields are present only on the activity types their descriptions list. The invoice and the referenced resources remain authoritative for state and money movement.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | What happened. other means an activity this API version doesn't describe yet. New values may be added; treat an unrecognized value like `other`. Values: [26 declared values](#invoiceactivityinput-activity_type-values). |
| `actor_id` | Optional | string | Merchant ID of the actor, when actor_type is merchant. Some system activities also carry the merchant ID. |
| `actor_type` | Optional | string | Who performed the activity: the merchant (an API key or dashboard user), the buyer, or Flint on a schedule or in response to a payment event. Absent when no actor was recorded. Values: `"merchant"`, `"buyer"`, `"system"`. |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount of the payment, refund, or late fee. Present on payment_applied, manual_payment_recorded, manual_payment_reversed, refund_succeeded, late_fee_assessed, and late_fee_waived, and on updated when a card refund changed or a credit note refund was requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `channel` | Optional | string | Delivery channel. Present on delivery_sent and reminder_sent. Values: `"email"`. |
| `checkout_session_id` | Optional | string | Checkout session the buyer paid through. Present on payment_attempt_started for hosted payments. |
| `collection_block_reason` | Optional | string | Why collection was blocked or unblocked. Present on collection_blocked and collection_block_resolved. Values: `"inventory_unavailable"`, `"inventory_restored"`. |
| `created_at` | Required | string | When the activity happened. Format: `date-time`. |
| `credit_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total credit applied to the invoice. Present on credited. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_note_id` | Optional | string | Credit note that requested the refund. Present on updated when a credit note refund was requested or changed. |
| `description` | Required | string | Human-readable Flint description of the activity. |
| `due_at` | Optional | string | Due date that triggered the activity. Present on overdue, reminder_due, and late_fee_due. Format: `date-time`. |
| `error_code` | Optional | string | Public error code of the failed scheduled issue. Present on issue_failed. |
| `expected_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount the processing payment is expected to settle. Present on payment_processing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_settlement_at` | Optional | string | When the processing payment is expected to settle. Present on payment_processing when known. Format: `date-time`. |
| `invoice_activity_id` | Required | string | Flint invoice activity ID. IDs begin with inevt_. |
| `invoice_delivery_attempt_id` | Optional | string | The delivery attempt that sent the email. Present on delivery_sent and reminder_sent. |
| `invoice_late_fee_id` | Optional | string | The late fee. Present on late_fee_assessed and late_fee_waived. |
| `invoice_manual_payment_id` | Optional | string | The manual payment. Present on manual_payment_recorded and manual_payment_reversed. |
| `invoice_payment_attempt_id` | Optional | string | The payment attempt. Present on payment_attempt_started and payment_processing. |
| `invoice_schedule_entry_id` | Optional | string | Schedule entry the activity applies to. Present on overdue, reminder_due, late_fee_due, late_fee_assessed, and late_fee_waived when the invoice has a payment schedule. |
| `payment_intent_id` | Optional | string | Payment intent whose funds were applied. Present on payment_applied. |
| `rail` | Optional | string | Payment rail of the attempt. Present on payment_processing. Values: `"card"`, `"ach_debit"`. |
| `refund_id` | Optional | string | Related refund. Present on refund_succeeded, and on updated when a card refund changed or a credit note refund was requested or changed. Read the refund for its current status. |
| `to_email` | Optional | string | Recipient of the email. Present on delivery_sent and reminder_sent. |
| `written_off_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Balance written off. Present on marked_uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### InvoiceActivityInput activity_type values

- `"draft_created"`
- `"issued"`
- `"sent"`
- `"delivery_sent"`
- `"reminder_sent"`
- `"viewed"`
- `"payment_attempt_started"`
- `"payment_applied"`
- `"manual_payment_recorded"`
- `"manual_payment_reversed"`
- `"refund_succeeded"`
- `"voided"`
- `"token_regenerated"`
- `"collection_blocked"`
- `"collection_block_resolved"`
- `"updated"`
- `"marked_uncollectible"`
- `"payment_processing"`
- `"issue_failed"`
- `"overdue"`
- `"reminder_due"`
- `"late_fee_due"`
- `"late_fee_assessed"`
- `"late_fee_waived"`
- `"credited"`
- `"other"`

