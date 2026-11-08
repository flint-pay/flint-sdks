[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshot

The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculation](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | Rule used to calculate the invoice's due date when it is issued. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/InvoicePaymentTerm.md#invoicepaymenttermcalculation-fields-1). |
| `invoice_payment_term_id` | Required | string | ID of the payment term captured on this invoice. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) | One-time late fee policy captured with this term. Absent when no late fee policy applies. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. `late_fee_policy`: [declared alternatives](../models/InvoicePaymentTerm.md#invoicepaymenttermlate_fee_policy). |
| `name` | Required | string | Name of the payment term shown on invoices. |
| `version` | Required | integer | Version of the invoice payment term captured in this snapshot. Format: `int32`. |

### InvoicePaymentTermsSnapshot.calculation

Declared alternatives: [InvoicePaymentTerm.calculation fields 1](../models/InvoicePaymentTerm.md#invoicepaymenttermcalculation-fields-1).

### InvoicePaymentTermsSnapshot.late_fee_policy

Declared alternatives: [InvoicePaymentTerm.late_fee_policy](../models/InvoicePaymentTerm.md#invoicepaymenttermlate_fee_policy).

