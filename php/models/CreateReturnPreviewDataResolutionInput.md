[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewDataResolutionInput

The `resolution` variant of `CreateReturnPreviewData`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [ReturnEligibilityPreviewInput](../models/ReturnEligibilityPreviewInput.md#returneligibilitypreviewinput) | The eligibility check. Present when `mode` is `eligibility`. The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Which preview to run. Values: `"resolution"`. |
| `resolution` | Required | [ReturnResolutionPreviewInput](../models/ReturnResolutionPreviewInput.md#returnresolutionpreviewinput) | The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

