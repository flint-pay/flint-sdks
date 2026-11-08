[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessResult

The return is the primary resource and expected_version target; the other resources report the processing effects.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return` | Required | [ReturnResource](../models/ReturnResource.md#returnresource) | The Return after this request's changes. A request to send purchased items back. |
| `return_dispositions` | Required | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) | Dispositions this request recorded, including any Flint created automatically. |
| `return_inspections` | Required | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) | Inspections this request recorded. |
| `return_receipts` | Required | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | Receipts this request recorded. |
| `return_resolutions` | Required | Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution) | Resolutions this request created and confirmed. |

