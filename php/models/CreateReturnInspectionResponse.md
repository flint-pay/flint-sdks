[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnInspectionResponse

A response containing `ReturnInspection` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnInspection](../models/ReturnInspection.md#returninspection) | Resource, collection, or operation result returned by this request. An assessment of the condition of returned items. `data`: [field definitions](../models/CreateReturnInspectionResponse.md#createreturninspectionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateReturnInspectionResponse.data

Resource, collection, or operation result returned by this request. An assessment of the condition of returned items.

Field definitions: [shared fields](CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections).

### CreateReturnInspectionResponse.data.generated_dispositions[]

Field definitions: [CancelReturnResponse.data.return_dispositions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions).

### CreateReturnInspectionResponse.data.line_items[]

Field definitions: [CancelReturnResponse.data.return_inspections[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_items).

### CreateReturnInspectionResponse.data.source_system

Declared alternatives: [CancelReturnResponse.data.return_inspections[].source_system](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionssource_system).

### CreateReturnInspectionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

