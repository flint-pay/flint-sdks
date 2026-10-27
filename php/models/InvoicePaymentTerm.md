[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTerm

The payment timing agreed for an invoice.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | object and ([InvoicePaymentTermCalculationOnReceipt](../models/InvoicePaymentTermCalculationOnReceipt.md#invoicepaymenttermcalculationonreceipt) or [InvoicePaymentTermCalculationNetDays](../models/InvoicePaymentTermCalculationNetDays.md#invoicepaymenttermcalculationnetdays) or [InvoicePaymentTermCalculationDaysAfterMonthEnd](../models/InvoicePaymentTermCalculationDaysAfterMonthEnd.md#invoicepaymenttermcalculationdaysaftermonthend) or [InvoicePaymentTermCalculationDayOfMonth](../models/InvoicePaymentTermCalculationDayOfMonth.md#invoicepaymenttermcalculationdayofmonth) or [InvoicePaymentTermCalculationDayOfNextMonth](../models/InvoicePaymentTermCalculationDayOfNextMonth.md#invoicepaymenttermcalculationdayofnextmonth)) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshotcalculation). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `invoice_payment_term_id` | Required | string |  |
| `late_fee_policy` | Optional | object and Alternative shapes (see declared variants) | A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. `late_fee_policy`: [declared alternatives](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshotlate_fee_policy). |
| `merchant_id` | Required | string |  |
| `name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int32`. |

### InvoicePaymentTerm.calculation

Declared alternatives: [InvoicePaymentTermsSnapshot.calculation](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshotcalculation).

### InvoicePaymentTerm.late_fee_policy

Declared alternatives: [InvoicePaymentTermsSnapshot.late_fee_policy](../models/InvoicePaymentTermsSnapshot.md#invoicepaymenttermssnapshotlate_fee_policy).

