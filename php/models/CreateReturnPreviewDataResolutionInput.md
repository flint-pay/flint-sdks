[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewDataResolutionInput

The `resolution` variant of `CreateReturnPreviewData`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [ReturnEligibilityPreviewInput](../models/ReturnEligibilityPreviewInput.md#returneligibilitypreviewinput) | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [ReturnResolutionPreviewInput](../models/ReturnResolutionPreviewInput.md#returnresolutionpreviewinput) | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

