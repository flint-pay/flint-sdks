[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoicePaymentTermRequest

The request body for: Create invoice payment term.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculation](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | Rule used to calculate the invoice's due date when it is issued. Required on create; omit it on update to preserve the current rule. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/CreateInvoicePaymentTermRequest.md#createinvoicepaymenttermrequestcalculation). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) | One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on create or preserve the current policy on update; send null on update to remove it. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. `late_fee_policy`: [declared alternatives](../models/CreateInvoicePaymentTermRequest.md#createinvoicepaymenttermrequestlate_fee_policy). |
| `name` | Required | string | Name of the payment term shown on invoices. Required on create; omit it on update to preserve the current name. minLength: `1`. |

### CreateInvoicePaymentTermRequest.calculation

Rule used to calculate the invoice's due date when it is issued. Required on create; omit it on update to preserve the current rule. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.

Field definitions: [shared fields](InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation).

### CreateInvoicePaymentTermRequest.calculation variant 1: `type` = `"on_receipt"`

oneOf with type: "on_receipt": The `on_receipt` variant of `InvoicePaymentTermCalculation`..

- Condition: not (at least one(present(`days`); present(`day`))).
- Optional: `day`, `days`.
- Constraints for `type`: Values: `"on_receipt"`.

### CreateInvoicePaymentTermRequest.calculation variant 2: `type` = `"net_days"`

oneOf with type: "net_days": The `net_days` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"net_days"`.

### CreateInvoicePaymentTermRequest.calculation variant 3: `type` = `"days_after_month_end"`

oneOf with type: "days_after_month_end": The `days_after_month_end` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`day`)).
- Required: `days`.
- Optional: `day`.
- Constraints for `type`: Values: `"days_after_month_end"`.

### CreateInvoicePaymentTermRequest.calculation variant 4: `type` = `"day_of_month"`

oneOf with type: "day_of_month": The `day_of_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_month"`.

### CreateInvoicePaymentTermRequest.calculation variant 5: `type` = `"day_of_next_month"`

oneOf with type: "day_of_next_month": The `day_of_next_month` variant of `InvoicePaymentTermCalculation`..

- Condition: not (present(`days`)).
- Required: `day`.
- Optional: `days`.
- Constraints for `type`: Values: `"day_of_next_month"`.

### CreateInvoicePaymentTermRequest.late_fee_policy

One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on create or preserve the current policy on update; send null on update to remove it. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.

Field definitions: [shared fields](InvoiceLateFeePolicy.md#invoicelatefeepolicy).

### CreateInvoicePaymentTermRequest.late_fee_policy variant 1: `type` = `"fixed"`

oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### CreateInvoicePaymentTermRequest.late_fee_policy variant 2: `type` = `"percentage"`

oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### CreateInvoicePaymentTermRequest.late_fee_policy.amount_money

Field definitions: [BuyerInvoiceLateFee.late_fee_policy variant 1.amount_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money).

