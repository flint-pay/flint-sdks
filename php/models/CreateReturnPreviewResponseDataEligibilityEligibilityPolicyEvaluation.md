[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation

How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItem.md#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitem) and [ReturnPolicyEvaluationLineItem](../models/ReturnPolicyEvaluationLineItem.md#returnpolicyevaluationlineitem)) |  |
| `reason` | Required | string | Values: [9 declared values](#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluation-reason-values). |
| `reason_message` | Required | string |  |
| `return_policy_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

