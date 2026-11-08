[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewRequestResolutionInput

The `resolution` variant of `CreateReturnPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput) | The eligibility check. Present when `mode` is `eligibility`. A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Which preview to run. Values: `"resolution"`. |
| `resolution` | Required | [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequestInput.md#createreturnresolutionpreviewrequestinput) | The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

