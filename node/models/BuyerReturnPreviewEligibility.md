[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewEligibility

The `eligibility` variant of `BuyerReturnPreview`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [BuyerReturnEligibilityPreview](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreview) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [BuyerReturnResolutionPreview](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreview) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. |

