[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptListResponse

A page of `InvoicePaymentAttempt` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InvoicePaymentAttemptListResponse.md#invoicepaymentattemptlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InvoicePaymentAttemptListResponse.data[]

An attempt to collect payment for an invoice.

Field definitions: [shared fields](InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedata).

### InvoicePaymentAttemptListResponse.data[].last_payment_error

Field definitions: [InvoicePaymentAttemptResponse.data.last_payment_error](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error).

### InvoicePaymentAttemptListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

