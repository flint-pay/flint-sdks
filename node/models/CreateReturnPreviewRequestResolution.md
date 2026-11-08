[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewRequestResolution

The `resolution` variant of `CreateReturnPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequest](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | The eligibility check. Present when `mode` is `eligibility`. A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Which preview to run. Values: `"resolution"`. |
| `resolution` | Required | [CreateReturnResolutionPreviewRequest](../models/CreateReturnResolutionPreviewRequest.md#createreturnresolutionpreviewrequest) | The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

