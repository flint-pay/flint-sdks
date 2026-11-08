[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnResolutionResponse

A response containing `ReturnResolution` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnResolution](../models/ReturnResolution.md#returnresolution) | Resource, collection, or operation result returned by this request. The refund, exchange, or other outcome of a return. `data`: [field definitions](../models/CancelReturnResolutionResponse.md#cancelreturnresolutionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CancelReturnResolutionResponse.data

Resource, collection, or operation result returned by this request. The refund, exchange, or other outcome of a return.

Field definitions: [shared fields](CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutions).

### CancelReturnResolutionResponse.data.adjustments[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].adjustments[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsadjustments).

### CancelReturnResolutionResponse.data.canceled_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscanceled_by).

### CancelReturnResolutionResponse.data.confirmed_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].confirmed_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsconfirmed_by).

### CancelReturnResolutionResponse.data.created_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].created_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscreated_by).

### CancelReturnResolutionResponse.data.execution_blockers[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].execution_blockers[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsexecution_blockers).

### CancelReturnResolutionResponse.data.line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items).

### CancelReturnResolutionResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CancelReturnResolutionResponse.data.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### CancelReturnResolutionResponse.data.refunds[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefunds).

### CancelReturnResolutionResponse.data.replacement_line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].replacement_line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items).

### CancelReturnResolutionResponse.data.replacement_order

Declared alternatives: [CancelReturnResponse.data.return_resolutions[].replacement_order](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_order).

### CancelReturnResolutionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

