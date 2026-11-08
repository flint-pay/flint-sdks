[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessResultInput

The return is the primary resource and expected_version target; the other resources report the processing effects.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return` | Required | [ReturnResourceInput](../models/ReturnResourceInput.md#returnresourceinput) | The Return after this request's changes. A request to send purchased items back. |
| `return_dispositions` | Required | Array of [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) | Dispositions this request recorded, including any Flint created automatically. |
| `return_inspections` | Required | Array of [ReturnInspectionInput](../models/ReturnInspectionInput.md#returninspectioninput) | Inspections this request recorded. |
| `return_receipts` | Required | Array of [ReturnReceiptInput](../models/ReturnReceiptInput.md#returnreceiptinput) | Receipts this request recorded. |
| `return_resolutions` | Required | Array of [ReturnResolutionInput](../models/ReturnResolutionInput.md#returnresolutioninput) | Resolutions this request created and confirmed. |

