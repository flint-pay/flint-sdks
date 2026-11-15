[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceLateFee

A charge assessed because an invoice payment is overdue.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeeamount_money). |
| `assessed_at` | Required | string | When the fee was assessed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `base_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `base_outstanding_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeebase_outstanding_money). |
| `invoice_id` | Required | string | Invoice that owns this late fee. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `invoice_late_fee_id` | Required | string | Flint invoice late fee ID. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. |
| `invoice_schedule_entry_id` | Optional | string | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `late_fee_policy` | Required | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. `late_fee_policy`: [declared alternatives](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy). |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeeoutstanding_money). |
| `paid_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `paid_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeepaid_money). |
| `waived_at` | Optional | string | When the fee was waived. Absent unless it was waived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `waived_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `waived_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeewaived_money). |
| `written_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `written_off_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeewritten_off_money). |

### BuyerInvoiceLateFee.amount_money

The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoiceLateFee.base_outstanding_money

The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoiceLateFee.late_fee_policy

The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money). |
| `application_mode` | Conditional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Conditional | integer | Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Conditional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Conditional | string | How the one-time late fee is calculated. Values: `"fixed"`, `"percentage"`. |

### BuyerInvoiceLateFee.late_fee_policy variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicy: A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`, `grace_period_days`, `type`.
- Optional: `application_mode`, `percent`.
- Constraints for `type`: Values: `"fixed"`.

### BuyerInvoiceLateFee.late_fee_policy variant 2: `type` = `"percentage"`

anyOf InvoiceLateFeePolicy: A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `grace_period_days`, `percent`, `type`.
- Optional: `amount_money`, `application_mode`.
- Constraints for `type`: Values: `"percentage"`.

### BuyerInvoiceLateFee.late_fee_policy variant 3

anyOf variant 2.

- Undeclared: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Value shape: null. The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. 

### BuyerInvoiceLateFee.late_fee_policy variant 1.amount_money

Fixed fee in the invoice currency. Required for fixed and omitted for percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoiceLateFee.late_fee_policy variant 2.amount_money

Field definitions: [BuyerInvoiceLateFee.late_fee_policy variant 1.amount_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money).

### BuyerInvoiceLateFee.outstanding_money

What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoiceLateFee.paid_money

Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoiceLateFee.waived_money

The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerInvoiceLateFee.written_off_money

The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

