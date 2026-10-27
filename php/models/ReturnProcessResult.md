[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessResult

The return is the primary resource and expected_version target; the other resources report the processing effects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return` | Required | [ReturnResource](../models/ReturnResource.md#returnresource) | A request to send purchased items back. `return`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200data). |
| `return_dispositions` | Required | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) |  |
| `return_inspections` | Required | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) | `return_inspections[]`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_inspections). |
| `return_receipts` | Required | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | `return_receipts[]`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_receipts). |
| `return_resolutions` | Required | Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution) |  |

### ReturnProcessResult.return

Field definitions: [ReturnsCancelResponse200.data](../models/ReturnsCancelResponse200.md#returnscancelresponse200data).

### ReturnProcessResult.return_inspections[]

Field definitions: [ReturnsCancelResponse200.data.return_inspections[]](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_inspections).

### ReturnProcessResult.return_receipts[]

Field definitions: [ReturnsCancelResponse200.data.return_receipts[]](../models/ReturnsCancelResponse200.md#returnscancelresponse200datareturn_receipts).

