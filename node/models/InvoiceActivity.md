[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceActivity

Read-only invoice history row for timeline rendering and debugging. Detail fields are present only on the activity types their descriptions list. The invoice and the referenced resources remain authoritative for state and money movement.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | What happened. other means an activity this API version doesn't describe yet. New values may be added; treat an unrecognized value like `other`. Values: [26 declared values](#invoiceactivity-activity_type-values). |
| `actor_id` | Optional | string | Merchant ID of the actor, when actor_type is merchant. Some system activities also carry the merchant ID. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `actor_type` | Optional | string | Who performed the activity: the merchant (an API key or dashboard user), the buyer, or Flint on a schedule or in response to a payment event. Absent when no actor was recorded. Example: `"merchant"`. Values: `"merchant"`, `"buyer"`, `"system"`. |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount of the payment, refund, or late fee. Present on payment_applied, manual_payment_recorded, manual_payment_reversed, refund_succeeded, late_fee_assessed, and late_fee_waived, and on updated when a card refund changed or a credit note refund was requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/InvoiceActivity.md#invoiceactivityamount_money). |
| `channel` | Optional | string | Delivery channel. Present on delivery_sent and reminder_sent. Values: `"email"`. |
| `checkout_session_id` | Optional | string | Checkout session the buyer paid through. Present on payment_attempt_started for hosted payments. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `collection_block_reason` | Optional | string | Why collection was blocked or unblocked. Present on collection_blocked and collection_block_resolved. Values: `"inventory_unavailable"`, `"inventory_restored"`. |
| `created_at` | Required | string | When the activity happened. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total credit applied to the invoice. Present on credited. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_money`: [field definitions](../models/InvoiceActivity.md#invoiceactivitycredit_money). |
| `credit_note_id` | Optional | string | Credit note that requested the refund. Present on updated when a credit note refund was requested or changed. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `description` | Required | string | Human-readable Flint description of the activity. |
| `due_at` | Optional | string | Due date that triggered the activity. Present on overdue, reminder_due, and late_fee_due. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `error_code` | Optional | string | Public error code of the failed scheduled issue. Present on issue_failed. |
| `expected_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the processing payment is expected to settle. Present on payment_processing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_amount_money`: [field definitions](../models/InvoiceActivity.md#invoiceactivityexpected_amount_money). |
| `invoice_activity_id` | Required | string | Flint invoice activity ID. IDs begin with inevt_. Example: `"inevt_01KEZF7C00RQVKGDVE88YNX9FQ"`. |
| `invoice_delivery_attempt_id` | Optional | string | The delivery attempt that sent the email. Present on delivery_sent and reminder_sent. Example: `"indel_01KEZF7C001BBS41T0ZVY8VMEQ"`. |
| `invoice_id` | Required | string | Invoice whose history contains this activity and owns its referenced delivery attempt, late fee, or manual payment. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_late_fee_id` | Optional | string | The late fee. Present on late_fee_assessed and late_fee_waived. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. |
| `invoice_manual_payment_id` | Optional | string | The manual payment. Present on manual_payment_recorded and manual_payment_reversed. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. |
| `invoice_payment_attempt_id` | Optional | string | The payment attempt. Present on payment_attempt_started and payment_processing. Example: `"invpa_01KEZF7C00PMWEDPAYYEKDTPBX"`. |
| `invoice_schedule_entry_id` | Optional | string | Schedule entry the activity applies to. Present on overdue, reminder_due, late_fee_due, late_fee_assessed, and late_fee_waived when the invoice has a payment schedule. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `payment_intent_id` | Optional | string | Payment intent whose funds were applied. Present on payment_applied. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `rail` | Optional | string | Payment rail of the attempt. Present on payment_processing. Values: `"card"`, `"ach_debit"`. |
| `refund_id` | Optional | string | Related refund. Present on refund_succeeded, and on updated when a card refund changed or a credit note refund was requested or changed. Read the refund for its current status. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `to_email` | Optional | string | Recipient of the email. Present on delivery_sent and reminder_sent. |
| `written_off_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Balance written off. Present on marked_uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/InvoiceActivity.md#invoiceactivitywritten_off_money). |

#### InvoiceActivity activity_type values

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

### InvoiceActivity.amount_money

Amount of the payment, refund, or late fee. Present on payment_applied, manual_payment_recorded, manual_payment_reversed, refund_succeeded, late_fee_assessed, and late_fee_waived, and on updated when a card refund changed or a credit note refund was requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceActivity.credit_money

Total credit applied to the invoice. Present on credited. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceActivity.expected_amount_money

Amount the processing payment is expected to settle. Present on payment_processing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceActivity.written_off_money

Balance written off. Present on marked_uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

