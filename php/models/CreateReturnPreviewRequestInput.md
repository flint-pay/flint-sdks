[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewRequestInput

The request body for: Create return preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput) | The eligibility check. Present when `mode` is `eligibility`. A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Which preview to run. Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequestInput.md#createreturnresolutionpreviewrequestinput) | The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

### CreateReturnPreviewRequestInput variant 1: `mode` = `"eligibility"`

oneOf with mode: "eligibility": The `eligibility` variant of `CreateReturnPreviewRequest`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### CreateReturnPreviewRequestInput variant 2: `mode` = `"resolution"`

oneOf with mode: "resolution": The `resolution` variant of `CreateReturnPreviewRequest`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

