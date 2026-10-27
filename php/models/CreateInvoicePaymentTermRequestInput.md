[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoicePaymentTermRequestInput

The request body for: Create invoice payment term.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicyInput.md#invoicelatefeepolicyinput) | A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. |
| `name` | Required | string | minLength: `1`. |

