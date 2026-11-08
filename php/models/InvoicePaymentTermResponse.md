[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermResponse

A response containing `InvoicePaymentTerm` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InvoicePaymentTerm](../models/InvoicePaymentTerm.md#invoicepaymentterm) | Resource, collection, or operation result returned by this request. The payment timing agreed for an invoice. `data`: [field definitions](../models/InvoicePaymentTermResponse.md#invoicepaymenttermresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InvoicePaymentTermResponse.data

Resource, collection, or operation result returned by this request. The payment timing agreed for an invoice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | object and ([InvoicePaymentTermCalculationOnReceipt](../models/InvoicePaymentTermCalculationOnReceipt.md#invoicepaymenttermcalculationonreceipt) or [InvoicePaymentTermCalculationNetDays](../models/InvoicePaymentTermCalculationNetDays.md#invoicepaymenttermcalculationnetdays) or [InvoicePaymentTermCalculationDaysAfterMonthEnd](../models/InvoicePaymentTermCalculationDaysAfterMonthEnd.md#invoicepaymenttermcalculationdaysaftermonthend) or [InvoicePaymentTermCalculationDayOfMonth](../models/InvoicePaymentTermCalculationDayOfMonth.md#invoicepaymenttermcalculationdayofmonth) or [InvoicePaymentTermCalculationDayOfNextMonth](../models/InvoicePaymentTermCalculationDayOfNextMonth.md#invoicepaymenttermcalculationdayofnextmonth)) | Rule used to calculate the invoice's due date when it is issued. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. `calculation`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotcalculation). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `invoice_payment_term_id` | Required | string | ID of the payment term captured on this invoice. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `late_fee_policy` | Optional | object and Alternative shapes (see declared variants) | One-time late fee policy captured with this term. Absent when no late fee policy applies. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. `late_fee_policy`: [declared alternatives](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotlate_fee_policy). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Required | string | Name of the payment term shown on invoices. |
| `status` | Required | string | Whether the term can be selected for new invoices. Archiving preserves terms captured on existing invoices. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int32`. |

### InvoicePaymentTermResponse.data.calculation

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotcalculation).

### InvoicePaymentTermResponse.data.late_fee_policy

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot.late_fee_policy](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotlate_fee_policy).

### InvoicePaymentTermResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

