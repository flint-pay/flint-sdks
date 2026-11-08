[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation

How the active return policies judged the lines.

How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItem](../models/CreateReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItem.md#createreturnpreviewresponsedataresolutioneligibilitypolicyevaluationlineitemsitem) and [ReturnPolicyEvaluationLineItem](../models/ReturnPolicyEvaluationLineItem.md#returnpolicyevaluationlineitem)) | Eligibility of each line asked about. |
| `reason` | Required | string | Why the selection got this result. Values: [9 declared values](#createreturnpreviewresponsedataresolutioneligibilitypolicyevaluation-reason-values). |
| `reason_message` | Required | string | Explanation of `reason`. |
| `return_policy_id` | Optional | string | ID of the policy that judged the lines. Absent when none matched. |
| `return_policy_revision_id` | Optional | string | ID of the policy revision that judged the lines. Absent when none matched. |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### CreateReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

