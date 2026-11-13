[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreviewInput

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of [BuyerReturnEligibilityPreviewLineItemInput](../models/BuyerReturnEligibilityPreviewLineItemInput.md#buyerreturneligibilitypreviewlineiteminput) | Eligibility of each line asked about. |
| `order_id` | Required | string | ID of the Order the units come from. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `policy_evaluation` | Required | [BuyerReturnPolicyEvaluationInput](../models/BuyerReturnPolicyEvaluationInput.md#buyerreturnpolicyevaluationinput) | How the active return policies judged the lines. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. |
| `refund_estimate` | Required | [ReturnRefundEstimateInput](../models/ReturnRefundEstimateInput.md#returnrefundestimateinput) or null | Estimate for selected eligible quantities requested as refund, or with no requested resolution when refund is allowed. Null when no selected line is eligible for a refund. The store's inspection and its final decision can change the refund. Nothing is reserved. |
| `selection` | Required | [ReturnEligibilitySelectionInput](../models/ReturnEligibilitySelectionInput.md#returneligibilityselectioninput) | The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

