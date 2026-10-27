[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreviewInput

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of [BuyerReturnEligibilityPreviewLineItemInput](../models/BuyerReturnEligibilityPreviewLineItemInput.md#buyerreturneligibilitypreviewlineiteminput) |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [BuyerReturnPolicyEvaluationInput](../models/BuyerReturnPolicyEvaluationInput.md#buyerreturnpolicyevaluationinput) | Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. |
| `selection` | Required | [ReturnEligibilitySelectionInput](../models/ReturnEligibilitySelectionInput.md#returneligibilityselectioninput) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

