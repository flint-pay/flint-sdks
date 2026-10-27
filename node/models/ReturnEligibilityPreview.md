[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilityPreview

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of [ReturnEligibilityPreviewLineItem](../models/ReturnEligibilityPreviewLineItem.md#returneligibilitypreviewlineitem) |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [ReturnPolicyEvaluation](../models/ReturnPolicyEvaluation.md#returnpolicyevaluation) | How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. |
| `selection` | Required | [ReturnEligibilitySelection](../models/ReturnEligibilitySelection.md#returneligibilityselection) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

