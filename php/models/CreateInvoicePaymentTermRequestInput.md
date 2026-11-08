[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoicePaymentTermRequestInput

The request body for: Create invoice payment term.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculationRequestInput](../models/InvoicePaymentTermCalculationRequestInput.md#invoicepaymenttermcalculationrequestinput) | Rule used to calculate the invoice's due date when it is issued. Required on create; omit it on update to preserve the current rule. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicyRequestInput](../models/InvoiceLateFeePolicyRequestInput.md#invoicelatefeepolicyrequestinput) | One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on create or preserve the current policy on update; send null on update to remove it. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. |
| `name` | Required | string | Name of the payment term shown on invoices. Required on create; omit it on update to preserve the current name. minLength: `1`. |

