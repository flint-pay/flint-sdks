[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreview

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of [BuyerReturnEligibilityPreviewLineItem](../models/BuyerReturnEligibilityPreviewLineItem.md#buyerreturneligibilitypreviewlineitem) |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [BuyerReturnPolicyEvaluation](../models/BuyerReturnPolicyEvaluation.md#buyerreturnpolicyevaluation) | Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. |
| `selection` | Required | [ReturnEligibilitySelection](../models/ReturnEligibilitySelection.md#returneligibilityselection) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

