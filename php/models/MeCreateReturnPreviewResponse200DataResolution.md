[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolution

A Return eligibility or resolution preview shown to the buyer, selected by mode.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [BuyerReturnEligibilityPreview](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreview) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [BuyerReturnResolutionPreview](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreview) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. |

