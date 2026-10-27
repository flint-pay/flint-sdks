[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewDataEligibilityInput

The `eligibility` variant of `CreateReturnPreviewData`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [ReturnEligibilityPreviewInput](../models/ReturnEligibilityPreviewInput.md#returneligibilitypreviewinput) | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [ReturnResolutionPreviewInput](../models/ReturnResolutionPreviewInput.md#returnresolutionpreviewinput) | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

