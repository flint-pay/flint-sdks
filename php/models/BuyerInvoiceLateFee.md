[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceLateFee

A charge assessed because an invoice payment is overdue.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_at` | Required | string | When the fee was assessed. Format: `date-time`. |
| `base_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `invoice_late_fee_id` | Required | string | Flint invoice late fee ID. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. |
| `late_fee_policy` | Required | object and Alternative shapes (see declared variants) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `late_fee_policy`: [declared alternatives](../models/InvoiceLateFee.md#invoicelatefeelate_fee_policy). |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments applied to this fee, minus reversed payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `waived_at` | Optional | string | When the fee was waived. Absent unless it was waived. Format: `date-time`. |
| `waived_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BuyerInvoiceLateFee.late_fee_policy

Declared alternatives: [InvoiceLateFee.late_fee_policy](../models/InvoiceLateFee.md#invoicelatefeelate_fee_policy).

