[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewData

A return preview, selected by `mode`: either the eligibility of the selected items or the amounts of a resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [ReturnEligibilityPreview](../models/ReturnEligibilityPreview.md#returneligibilitypreview) | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [ReturnResolutionPreview](../models/ReturnResolutionPreview.md#returnresolutionpreview) | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. |

### CreateReturnPreviewData variant 1: `mode` = `"eligibility"`

oneOf variant 1: The `eligibility` variant of `CreateReturnPreviewData`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### CreateReturnPreviewData variant 2: `mode` = `"resolution"`

oneOf variant 2: The `resolution` variant of `CreateReturnPreviewData`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

