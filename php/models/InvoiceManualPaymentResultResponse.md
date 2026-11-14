[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentResultResponse

A response containing `InvoiceManualPaymentResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InvoiceManualPaymentResult](../models/InvoiceManualPaymentResult.md#invoicemanualpaymentresult) | Resource, collection, or operation result returned by this request. The recorded or reversed payment and the updated invoice. expected_invoice_version on create and expected_version on reversal fence the invoice; use the returned invoice version for the next write. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InvoiceManualPaymentResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

