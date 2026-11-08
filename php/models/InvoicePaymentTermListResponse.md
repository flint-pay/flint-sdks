[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermListResponse

A page of `InvoicePaymentTerm` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InvoicePaymentTerm](../models/InvoicePaymentTerm.md#invoicepaymentterm) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InvoicePaymentTermListResponse.md#invoicepaymenttermlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InvoicePaymentTermListResponse.data[]

The payment timing agreed for an invoice.

Field definitions: [shared fields](InvoicePaymentTermResponse.md#invoicepaymenttermresponsedata).

### InvoicePaymentTermListResponse.data[].calculation

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot.calculation](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotcalculation).

### InvoicePaymentTermListResponse.data[].late_fee_policy

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot.late_fee_policy](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshotlate_fee_policy).

### InvoicePaymentTermListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

