[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreview

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of [BuyerReturnEligibilityPreviewLineItem](../models/BuyerReturnEligibilityPreviewLineItem.md#buyerreturneligibilitypreviewlineitem) |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [BuyerReturnPolicyEvaluation](../models/BuyerReturnPolicyEvaluation.md#buyerreturnpolicyevaluation) | Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. |
| `selection` | Required | object and Alternative shapes (see declared variants) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataeligibility-fields-1selection). |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### BuyerReturnEligibilityPreview.selection

Declared alternatives: [ReturnPreviewsCreateResponse200.data.eligibility fields 1.selection](../models/ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataeligibility-fields-1selection).

