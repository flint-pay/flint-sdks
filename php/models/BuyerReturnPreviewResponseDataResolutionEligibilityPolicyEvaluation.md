[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation

Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItem](../models/BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItem.md#buyerreturnpreviewresponsedataresolutioneligibilitypolicyevaluationlineitemsitem) and object) |  |
| `reason` | Required | string | Values: [9 declared values](#buyerreturnpreviewresponsedataresolutioneligibilitypolicyevaluation-reason-values). |
| `reason_message` | Required | string |  |
| `return_policy_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

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

