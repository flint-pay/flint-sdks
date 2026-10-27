[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessResult

The return is the primary resource and expected_version target; the other resources report the processing effects.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return` | Required | [ReturnResource](../models/ReturnResource.md#returnresource) | A request to send purchased items back. |
| `return_dispositions` | Required | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) |  |
| `return_inspections` | Required | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) |  |
| `return_receipts` | Required | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) |  |
| `return_resolutions` | Required | Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution) |  |

