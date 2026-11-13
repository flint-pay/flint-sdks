[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilityPreviewInput

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of [ReturnEligibilityPreviewLineItemInput](../models/ReturnEligibilityPreviewLineItemInput.md#returneligibilitypreviewlineiteminput) | Eligibility of each line asked about. |
| `order_id` | Required | string | ID of the Order the units come from. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `policy_evaluation` | Required | [ReturnPolicyEvaluationInput](../models/ReturnPolicyEvaluationInput.md#returnpolicyevaluationinput) | How the active return policies judged the lines. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. |
| `refund_estimate` | Required | [ReturnRefundEstimateInput](../models/ReturnRefundEstimateInput.md#returnrefundestimateinput) or null | Estimate for selected eligible quantities requested as refund, or with no requested resolution when refund is allowed. Null when no selected line is eligible for a refund. The store's inspection and its final decision can change the refund. Nothing is reserved. |
| `selection` | Required | [ReturnEligibilitySelectionInput](../models/ReturnEligibilitySelectionInput.md#returneligibilityselectioninput) | The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

