[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewEligibilityInput

The `eligibility` variant of `BuyerReturnPreview`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [BuyerReturnEligibilityPreviewInput](../models/BuyerReturnEligibilityPreviewInput.md#buyerreturneligibilitypreviewinput) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [BuyerReturnResolutionPreviewInput](../models/BuyerReturnResolutionPreviewInput.md#buyerreturnresolutionpreviewinput) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. |

