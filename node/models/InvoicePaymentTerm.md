[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTerm

The payment timing agreed for an invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculation](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | Rule used to calculate the invoice's due date when it is issued. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/InvoicePaymentTerm.md#invoicepaymenttermcalculation-fields-1). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `invoice_payment_term_id` | Required | string | ID of the payment term captured on this invoice. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) | One-time late fee policy captured with this term. Absent when no late fee policy applies. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. `late_fee_policy`: [declared alternatives](../models/InvoicePaymentTerm.md#invoicepaymenttermlate_fee_policy). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Required | string | Name of the payment term shown on invoices. |
| `status` | Required | string | Whether the term can be selected for new invoices. Archiving preserves terms captured on existing invoices. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int32`. |

### InvoicePaymentTerm.calculation fields 1

Rule used to calculate the invoice's due date when it is issued. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.

Field definitions: [shared fields](InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation).

### InvoicePaymentTerm.calculation fields 1 variant 1: `type` = `"on_receipt"`

oneOf with type: "on_receipt": The `on_receipt` variant of `InvoicePaymentTermCalculation`..

- Condition: not (at least one(present(`days`); present(`day`))).
- Optional: `day`, `days`.
- Constraints for `type`: Values: `"on_receipt"`.

### InvoicePaymentTerm.calculation fields 1 variant 2: `type` = `"net_days"`

oneOf with type: "net_days": The `net_days` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"net_days"`.

### InvoicePaymentTerm.calculation fields 1 variant 3: `type` = `"days_after_month_end"`

oneOf with type: "days_after_month_end": The `days_after_month_end` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"days_after_month_end"`.

### InvoicePaymentTerm.calculation fields 1 variant 4: `type` = `"day_of_month"`

oneOf with type: "day_of_month": The `day_of_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_month"`.

### InvoicePaymentTerm.calculation fields 1 variant 5: `type` = `"day_of_next_month"`

oneOf with type: "day_of_next_month": The `day_of_next_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_next_month"`.

### InvoicePaymentTerm.late_fee_policy

One-time late fee policy captured with this term. Absent when no late fee policy applies. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.

Field definitions: [shared fields](InvoiceLateFeePolicy.md#invoicelatefeepolicy).

### InvoicePaymentTerm.late_fee_policy variant 1: `type` = `"fixed"`

oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoicePaymentTerm.late_fee_policy variant 2: `type` = `"percentage"`

oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoicePaymentTerm.late_fee_policy.amount_money

Field definitions: [BuyerInvoiceLateFee.late_fee_policy variant 1.amount_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money).

