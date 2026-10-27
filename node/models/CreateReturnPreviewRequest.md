[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewRequest

The request body for: Create return preview.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [CreateReturnEligibilityPreviewRequest](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [CreateReturnResolutionPreviewRequest](../models/CreateReturnResolutionPreviewRequest.md#createreturnresolutionpreviewrequest) | A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

### CreateReturnPreviewRequest variant 1: `mode` = `"eligibility"`

oneOf variant 1: The `eligibility` variant of `CreateReturnPreviewRequest`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### CreateReturnPreviewRequest variant 2: `mode` = `"resolution"`

oneOf variant 2: The `resolution` variant of `CreateReturnPreviewRequest`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

