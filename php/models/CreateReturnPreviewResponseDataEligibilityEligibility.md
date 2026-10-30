[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityEligibility

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItem.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitem) and object) |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation](../models/CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation.md#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluation) | How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. `policy_evaluation`: [field definitions](../models/CreateReturnPreviewResponseDataEligibilityEligibility.md#createreturnpreviewresponsedataeligibilityeligibilitypolicy_evaluation). |
| `selection` | Required | object and Alternative shapes (see declared variants) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/BuyerReturnPreviewResponseDataEligibilityEligibility.md#buyerreturnpreviewresponsedataeligibilityeligibilityselection). |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### CreateReturnPreviewResponseDataEligibilityEligibility.policy_evaluation

How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of [ReturnPolicyEvaluationLineItem](../models/ReturnPolicyEvaluationLineItem.md#returnpolicyevaluationlineitem) |  |
| `reason` | Required | string | Values: [9 declared values](#createreturnpreviewresponsedataeligibilityeligibilitypolicy_evaluation-reason-values). |
| `reason_message` | Required | string |  |
| `return_policy_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### CreateReturnPreviewResponseDataEligibilityEligibility.policy_evaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### CreateReturnPreviewResponseDataEligibilityEligibility.selection

Declared alternatives: [BuyerReturnPreviewResponseDataEligibilityEligibility.selection](../models/BuyerReturnPreviewResponseDataEligibilityEligibility.md#buyerreturnpreviewresponsedataeligibilityeligibilityselection).

