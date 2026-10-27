[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessResultInput

The return is the primary resource and expected_version target; the other resources report the processing effects.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return` | Required | [ReturnResourceInput](../models/ReturnResourceInput.md#returnresourceinput) | A request to send purchased items back. |
| `return_dispositions` | Required | Array of [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) |  |
| `return_inspections` | Required | Array of [ReturnInspectionInput](../models/ReturnInspectionInput.md#returninspectioninput) |  |
| `return_receipts` | Required | Array of [ReturnReceiptInput](../models/ReturnReceiptInput.md#returnreceiptinput) |  |
| `return_resolutions` | Required | Array of [ReturnResolutionInput](../models/ReturnResolutionInput.md#returnresolutioninput) |  |

