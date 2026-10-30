[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreview

A Return eligibility or resolution preview shown to the buyer, selected by mode.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [BuyerReturnEligibilityPreview](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreview) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [BuyerReturnResolutionPreview](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreview) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. |

### BuyerReturnPreview variant 1: `mode` = `"eligibility"`

oneOf with mode: "eligibility": The `eligibility` variant of `BuyerReturnPreview`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### BuyerReturnPreview variant 2: `mode` = `"resolution"`

oneOf with mode: "resolution": The `resolution` variant of `BuyerReturnPreview`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

