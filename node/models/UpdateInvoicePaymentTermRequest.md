[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInvoicePaymentTermRequest

The request body for: Update invoice payment term. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [InvoicePaymentTermCalculation](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | Rule used to calculate the invoice's due date when it is issued. Required on create; omit it on update to preserve the current rule. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/CreateInvoicePaymentTermRequest.md#createinvoicepaymenttermrequestcalculation). |
| `expected_version` | Optional | integer | Optional version last read by the caller. Format: `uint32`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) or null | One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on create or preserve the current policy on update; send null on update to remove it. `late_fee_policy`: [declared alternatives](../models/UpdateInvoicePaymentTermRequest.md#updateinvoicepaymenttermrequestlate_fee_policy). |
| `name` | Optional | string | Name of the payment term shown on invoices. Required on create; omit it on update to preserve the current name. minLength: `1`. |

### UpdateInvoicePaymentTermRequest.calculation

Declared alternatives: [CreateInvoicePaymentTermRequest.calculation](../models/CreateInvoicePaymentTermRequest.md#createinvoicepaymenttermrequestcalculation).

### UpdateInvoicePaymentTermRequest.late_fee_policy

One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on create or preserve the current policy on update; send null on update to remove it.

Field definitions: [shared fields](BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy).

### UpdateInvoicePaymentTermRequest.late_fee_policy variant 1: `type` = `"fixed"`

anyOf InvoiceLateFeePolicyRequest: A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "fixed": The `fixed` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`percent`)).
- Required: `amount_money`, `grace_period_days`, `type`.
- Optional: `application_mode`, `percent`.
- Constraints for `type`: Values: `"fixed"`.

### UpdateInvoicePaymentTermRequest.late_fee_policy variant 2: `type` = `"percentage"`

anyOf InvoiceLateFeePolicyRequest: A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.; oneOf with type: "percentage": The `percentage` variant of `InvoiceLateFeePolicy`..

- Condition: not (present(`amount_money`)).
- Required: `grace_period_days`, `percent`, `type`.
- Optional: `amount_money`, `application_mode`.
- Constraints for `type`: Values: `"percentage"`.

### UpdateInvoicePaymentTermRequest.late_fee_policy variant 3

anyOf variant 2.

- Undeclared: `amount_money`, `application_mode`, `grace_period_days`, `percent`, `type`.
- Value shape: null. One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on create or preserve the current policy on update; send null on update to remove it. 

### UpdateInvoicePaymentTermRequest.late_fee_policy variant 1.amount_money

Field definitions: [BuyerInvoiceLateFee.late_fee_policy variant 1.amount_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money).

### UpdateInvoicePaymentTermRequest.late_fee_policy variant 2.amount_money

Field definitions: [BuyerInvoiceLateFee.late_fee_policy variant 1.amount_money](../models/BuyerInvoiceLateFee.md#buyerinvoicelatefeelate_fee_policy-variant-1amount_money).

