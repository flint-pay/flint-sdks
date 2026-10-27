[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshot

The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculation](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `invoice_payment_term_id` | Required | string |  |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) | A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. |
| `name` | Required | string |  |
| `version` | Required | integer | Version of the invoice payment term captured in this snapshot. Format: `int32`. |

