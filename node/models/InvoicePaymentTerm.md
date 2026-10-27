[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTerm

The payment timing agreed for an invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculation](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `invoice_payment_term_id` | Required | string |  |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) | A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. |
| `merchant_id` | Required | string |  |
| `name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int32`. |

