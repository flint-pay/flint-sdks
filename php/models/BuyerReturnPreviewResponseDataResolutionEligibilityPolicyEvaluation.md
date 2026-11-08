[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation

How the active return policies judged the lines.

Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItem](../models/BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItem.md#buyerreturnpreviewresponsedataresolutioneligibilitypolicyevaluationlineitemsitem) and object) | Eligibility of each line asked about. |
| `reason` | Required | string | Why the selection got this result. Values: [9 declared values](#buyerreturnpreviewresponsedataresolutioneligibilitypolicyevaluation-reason-values). |
| `reason_message` | Required | string | Explanation of `reason`. |
| `return_policy_id` | Optional | string | ID of the policy that judged the lines. Absent when none matched. |
| `return_policy_revision_id` | Optional | string | ID of the policy revision that judged the lines. Absent when none matched. |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

