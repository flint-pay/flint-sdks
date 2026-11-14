[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceListResponse

A page of `Invoice` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Invoice](../models/Invoice.md#invoice) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InvoiceListResponse.md#invoicelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InvoiceListResponse.data[]

A bill issued to a customer.

Field definitions: [shared fields](InvoiceResponse.md#invoiceresponsedata).

### InvoiceListResponse.data[].collection

Declared alternatives: [InvoiceResponse.data.collection](../models/InvoiceResponse.md#invoiceresponsedatacollection).

### InvoiceListResponse.data[].customer

Declared alternatives: [InvoiceResponse.data.customer](../models/InvoiceResponse.md#invoiceresponsedatacustomer).

### InvoiceListResponse.data[].late_fees[]

Field definitions: [InvoiceResponse.data.late_fees[]](../models/InvoiceResponse.md#invoiceresponsedatalate_fees).

### InvoiceListResponse.data[].metadata

Field definitions: [DeliveryLocationSetResponse.data.metadata](../models/DeliveryLocationSetResponse.md#deliverylocationsetresponsedatametadata).

### InvoiceListResponse.data[].order

Declared alternatives: [InvoiceResponse.data.order](../models/InvoiceResponse.md#invoiceresponsedataorder).

### InvoiceListResponse.data[].payment_due

Declared alternatives: [InvoiceResponse.data.payment_due](../models/InvoiceResponse.md#invoiceresponsedatapayment_due).

### InvoiceListResponse.data[].payment_terms_snapshot

Field definitions: [InvoiceResponse.data.payment_terms_snapshot](../models/InvoiceResponse.md#invoiceresponsedatapayment_terms_snapshot).

### InvoiceListResponse.data[].remit_to_address

Field definitions: [InvoiceResponse.data.remit_to_address](../models/InvoiceResponse.md#invoiceresponsedataremit_to_address).

### InvoiceListResponse.data[].schedule_entries[]

Field definitions: [InvoiceResponse.data.schedule_entries[]](../models/InvoiceResponse.md#invoiceresponsedataschedule_entries).

### InvoiceListResponse.data[].snapshot

Field definitions: [InvoiceResponse.data.snapshot](../models/InvoiceResponse.md#invoiceresponsedatasnapshot).

### InvoiceListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

