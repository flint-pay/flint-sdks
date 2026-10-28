[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewInput

A Return eligibility or resolution preview shown to the buyer, selected by mode.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [BuyerReturnEligibilityPreviewInput](../models/BuyerReturnEligibilityPreviewInput.md#buyerreturneligibilitypreviewinput) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [BuyerReturnResolutionPreviewInput](../models/BuyerReturnResolutionPreviewInput.md#buyerreturnresolutionpreviewinput) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. |

### BuyerReturnPreviewInput variant 1: `mode` = `"eligibility"`

oneOf variant 1: The `eligibility` variant of `BuyerReturnPreview`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### BuyerReturnPreviewInput variant 2: `mode` = `"resolution"`

oneOf variant 2: The `resolution` variant of `BuyerReturnPreview`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

