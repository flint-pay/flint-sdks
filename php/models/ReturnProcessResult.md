[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessResult

The return is the primary resource and expected_version target; the other resources report the processing effects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return` | Required | [ReturnResource](../models/ReturnResource.md#returnresource) | A request to send purchased items back. `return`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedata). |
| `return_dispositions` | Required | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) |  |
| `return_inspections` | Required | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) | `return_inspections[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections). |
| `return_receipts` | Required | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | `return_receipts[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts). |
| `return_resolutions` | Required | Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution) |  |

### ReturnProcessResult.return

Field definitions: [CancelReturnResponse.data](../models/CancelReturnResponse.md#cancelreturnresponsedata).

### ReturnProcessResult.return_inspections[]

Field definitions: [CancelReturnResponse.data.return_inspections[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections).

### ReturnProcessResult.return_receipts[]

Field definitions: [CancelReturnResponse.data.return_receipts[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts).

