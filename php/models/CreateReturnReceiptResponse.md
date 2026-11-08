[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnReceiptResponse

A response containing `ReturnReceipt` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | Resource, collection, or operation result returned by this request. A record of returned items arriving at a location. `data`: [field definitions](../models/CreateReturnReceiptResponse.md#createreturnreceiptresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateReturnReceiptResponse.data

Resource, collection, or operation result returned by this request. A record of returned items arriving at a location.

Field definitions: [shared fields](CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts).

### CreateReturnReceiptResponse.data.generated_dispositions[]

Field definitions: [CancelReturnResponse.data.return_dispositions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions).

### CreateReturnReceiptResponse.data.line_items[]

Field definitions: [CancelReturnResponse.data.return_receipts[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receiptsline_items).

### CreateReturnReceiptResponse.data.source_system

Declared alternatives: [CancelReturnResponse.data.return_inspections[].source_system](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionssource_system).

### CreateReturnReceiptResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

