[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnDispositionResponse

A response containing `ReturnDisposition` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) | Resource, collection, or operation result returned by this request. A decision about how returned merchandise will be handled. `data`: [field definitions](../models/CancelReturnDispositionResponse.md#cancelreturndispositionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CancelReturnDispositionResponse.data

Resource, collection, or operation result returned by this request. A decision about how returned merchandise will be handled.

Field definitions: [shared fields](CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions).

### CancelReturnDispositionResponse.data.canceled_by

Field definitions: [CancelReturnResponse.data.return_dispositions[].canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscanceled_by).

### CancelReturnDispositionResponse.data.created_by

Field definitions: [CancelReturnResponse.data.return_dispositions[].created_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscreated_by).

### CancelReturnDispositionResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CancelReturnDispositionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

