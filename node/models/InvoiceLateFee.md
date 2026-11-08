[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFee

A charge assessed because an invoice payment is overdue.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeeamount_money). |
| `assessed_at` | Required | string | When the fee was assessed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `base_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `base_outstanding_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeebase_outstanding_money). |
| `invoice_late_fee_id` | Required | string | Flint invoice late fee ID. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `late_fee_policy` | Required | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. `late_fee_policy`: [declared alternatives](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy). |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeeoutstanding_money). |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments applied to this fee, minus reversed payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeepaid_money). |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`. |
| `waived_at` | Optional | string | When the fee was waived. Absent unless it was waived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `waived_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `waived_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeewaived_money). |
| `waiver_reason_message` | Optional | string | Why the fee was waived, as given when waiving it. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeewritten_off_money). |

### InvoiceLateFee.amount_money

Field definitions: [BuyerInvoiceLateFee.amount_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeeamount_money).

### InvoiceLateFee.base_outstanding_money

Field definitions: [BuyerInvoiceLateFee.base_outstanding_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeebase_outstanding_money).

### InvoiceLateFee.late_fee_policy

Declared alternatives: [BuyerInvoiceLateFee.late_fee_policy](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy).

### InvoiceLateFee.outstanding_money

Field definitions: [BuyerInvoiceLateFee.outstanding_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeeoutstanding_money).

### InvoiceLateFee.paid_money

Field definitions: [BuyerInvoiceLateFee.paid_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeepaid_money).

### InvoiceLateFee.waived_money

Field definitions: [BuyerInvoiceLateFee.waived_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeewaived_money).

### InvoiceLateFee.written_off_money

Field definitions: [BuyerInvoiceLateFee.written_off_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeewritten_off_money).

