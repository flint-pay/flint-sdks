[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataResolutionEligibility

The eligibility check. Present when `mode` is `eligibility`.

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItem](../models/CreateReturnPreviewResponseDataResolutionEligibilityLineItemsItem.md#createreturnpreviewresponsedataresolutioneligibilitylineitemsitem) and object) | Eligibility of each line asked about. |
| `order_id` | Required | string | ID of the Order the units come from. |
| `policy_evaluation` | Required | [CreateReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation](../models/CreateReturnPreviewResponseDataResolutionEligibilityPolicyEvaluation.md#createreturnpreviewresponsedataresolutioneligibilitypolicyevaluation) | How the active return policies judged the lines. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. `policy_evaluation`: [field definitions](../models/CreateReturnPreviewResponseDataResolutionEligibility.md#createreturnpreviewresponsedataresolutioneligibilitypolicy_evaluation). |
| `selection` | Required | object and Alternative shapes (see declared variants) | The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/BuyerReturnPreviewResponseDataEligibilityEligibility.md#buyerreturnpreviewresponsedataeligibilityeligibilityselection). |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### CreateReturnPreviewResponseDataResolutionEligibility.policy_evaluation

How the active return policies judged the lines. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of [ReturnPolicyEvaluationLineItem](../models/ReturnPolicyEvaluationLineItem.md#returnpolicyevaluationlineitem) | Eligibility of each line asked about. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatapolicy_evaluationline_items). |
| `reason` | Required | string | Why the selection got this result. Values: [9 declared values](#createreturnpreviewresponsedataresolutioneligibilitypolicy_evaluation-reason-values). |
| `reason_message` | Required | string | Explanation of `reason`. |
| `return_policy_id` | Optional | string | ID of the policy that judged the lines. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Optional | string | ID of the policy revision that judged the lines. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### CreateReturnPreviewResponseDataResolutionEligibility.policy_evaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### CreateReturnPreviewResponseDataResolutionEligibility.policy_evaluation.line_items[]

Field definitions: [CancelReturnResponse.data.policy_evaluation.line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatapolicy_evaluationline_items).

### CreateReturnPreviewResponseDataResolutionEligibility.selection

Declared alternatives: [BuyerReturnPreviewResponseDataEligibilityEligibility.selection](../models/BuyerReturnPreviewResponseDataEligibilityEligibility.md#buyerreturnpreviewresponsedataeligibilityeligibilityselection).

