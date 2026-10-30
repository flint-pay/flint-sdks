[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewDataInput

A return preview, selected by `mode`: either the eligibility of the selected items or the amounts of a resolution.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [ReturnEligibilityPreviewInput](../models/ReturnEligibilityPreviewInput.md#returneligibilitypreviewinput) | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [ReturnResolutionPreviewInput](../models/ReturnResolutionPreviewInput.md#returnresolutionpreviewinput) | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

### CreateReturnPreviewDataInput variant 1: `mode` = `"eligibility"`

oneOf with mode: "eligibility": The `eligibility` variant of `CreateReturnPreviewData`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### CreateReturnPreviewDataInput variant 2: `mode` = `"resolution"`

oneOf with mode: "resolution": The `resolution` variant of `CreateReturnPreviewData`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

