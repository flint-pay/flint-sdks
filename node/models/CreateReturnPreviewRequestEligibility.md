[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewRequestEligibility

The `eligibility` variant of `CreateReturnPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [CreateReturnEligibilityPreviewRequest](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [CreateReturnResolutionPreviewRequest](../models/CreateReturnResolutionPreviewRequest.md#createreturnresolutionpreviewrequest) | A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

