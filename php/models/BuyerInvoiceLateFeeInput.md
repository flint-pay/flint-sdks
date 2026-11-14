[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceLateFeeInput

A charge assessed because an invoice payment is overdue.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_at` | Required | string | When the fee was assessed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `base_outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `invoice_id` | Required | string | Invoice that owns this late fee. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_late_fee_id` | Required | string | Flint invoice late fee ID. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `late_fee_policy` | Required | [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicyInput.md#invoicelatefeepolicyinput) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. |
| `outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `paid_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `waived_at` | Optional | string | When the fee was waived. Absent unless it was waived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `waived_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `written_off_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

