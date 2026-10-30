[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFee

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
| `waiver_reason_message` | Optional | string | Why the fee was waived, as given when waiving it. |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### InvoiceLateFee.late_fee_policy

The late fee policy from payment_terms_snapshot, copied when the fee was assessed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `application_mode` | Conditional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Conditional | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Conditional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Conditional | string | Values: `"fixed"`, `"percentage"`. |

### InvoiceLateFee.late_fee_policy variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicy: A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`, `grace_period_days`, `type`.
- Optional: `application_mode`, `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceLateFee.late_fee_policy variant 2: `type` = `"percentage"`

anyOf InvoiceLateFeePolicy: A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `grace_period_days`, `percent`, `type`.
- Optional: `amount_money`, `application_mode`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceLateFee.late_fee_policy variant 3

anyOf variant 2.

- Undeclared: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Value shape: null. The late fee policy from payment_terms_snapshot, copied when the fee was assessed. 

