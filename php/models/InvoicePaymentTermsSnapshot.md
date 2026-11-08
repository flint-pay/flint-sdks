[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshot

The payment terms saved on an invoice: the term's name, version, due date calculation, and late fee policy.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | object and ([InvoicePaymentTermCalculationOnReceipt](../models/InvoicePaymentTermCalculationOnReceipt.md#invoicepaymenttermcalculationonreceipt) or [InvoicePaymentTermCalculationNetDays](../models/InvoicePaymentTermCalculationNetDays.md#invoicepaymenttermcalculationnetdays) or [InvoicePaymentTermCalculationDaysAfterMonthEnd](../models/InvoicePaymentTermCalculationDaysAfterMonthEnd.md#invoicepaymenttermcalculationdaysaftermonthend) or [InvoicePaymentTermCalculationDayOfMonth](../models/InvoicePaymentTermCalculationDayOfMonth.md#invoicepaymenttermcalculationdayofmonth) or [InvoicePaymentTermCalculationDayOfNextMonth](../models/InvoicePaymentTermCalculationDayOfNextMonth.md#invoicepaymenttermcalculationdayofnextmonth)) | Rule used to calculate the invoice's due date when it is issued. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotcalculation). |
| `invoice_payment_term_id` | Required | string | ID of the payment term captured on this invoice. |
| `late_fee_policy` | Optional | object and Alternative shapes (see declared variants) | One-time late fee policy captured with this term. Absent when no late fee policy applies. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. `late_fee_policy`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotlate_fee_policy). |
| `name` | Required | string | Name of the payment term shown on invoices. |
| `version` | Required | integer | Version of the invoice payment term captured in this snapshot. Format: `int32`. |

### InvoicePaymentTermsSnapshot.calculation

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotcalculation).

### InvoicePaymentTermsSnapshot.late_fee_policy

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot.late_fee_policy](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotlate_fee_policy).

