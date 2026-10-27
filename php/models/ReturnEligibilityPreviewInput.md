[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilityPreviewInput

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of [ReturnEligibilityPreviewLineItemInput](../models/ReturnEligibilityPreviewLineItemInput.md#returneligibilitypreviewlineiteminput) |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [ReturnPolicyEvaluationInput](../models/ReturnPolicyEvaluationInput.md#returnpolicyevaluationinput) | How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. |
| `selection` | Required | [ReturnEligibilitySelectionInput](../models/ReturnEligibilitySelectionInput.md#returneligibilityselectioninput) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

