[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewDataResolution

The `resolution` variant of `CreateReturnPreviewData`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [ReturnEligibilityPreview](../models/ReturnEligibilityPreview.md#returneligibilitypreview) | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [ReturnResolutionPreview](../models/ReturnResolutionPreview.md#returnresolutionpreview) | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

