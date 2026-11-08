[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityEligibility

The eligibility check. Present when `mode` is `eligibility`.

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItem](../models/BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItem.md#buyerreturnpreviewresponsedataeligibilityeligibilitylineitemsitem) and object) | Eligibility of each line asked about. |
| `order_id` | Required | string | ID of the Order the units come from. |
| `policy_evaluation` | Required | [BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation](../models/BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluation.md#buyerreturnpreviewresponsedataeligibilityeligibilitypolicyevaluation) | How the active return policies judged the lines. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. `policy_evaluation`: [field definitions](../models/BuyerReturnPreviewResponseDataEligibilityEligibility.md#buyerreturnpreviewresponsedataeligibilityeligibilitypolicy_evaluation). |
| `selection` | Required | object and Alternative shapes (see declared variants) | The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/BuyerReturnPreviewResponseDataEligibilityEligibility.md#buyerreturnpreviewresponsedataeligibilityeligibilityselection). |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### BuyerReturnPreviewResponseDataEligibilityEligibility.policy_evaluation

How the active return policies judged the lines. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of object | Eligibility of each line asked about. `line_items[]`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1policy_evaluationline_items). |
| `reason` | Required | string | Why the selection got this result. Values: [9 declared values](#buyerreturnpreviewresponsedataeligibilityeligibilitypolicy_evaluation-reason-values). |
| `reason_message` | Required | string | Explanation of `reason`. |
| `return_policy_id` | Optional | string | ID of the policy that judged the lines. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Optional | string | ID of the policy revision that judged the lines. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### BuyerReturnPreviewResponseDataEligibilityEligibility.policy_evaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### BuyerReturnPreviewResponseDataEligibilityEligibility.policy_evaluation.line_items[]

Field definitions: [BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation.line_items[]](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1policy_evaluationline_items).

### BuyerReturnPreviewResponseDataEligibilityEligibility.selection

The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.

Field definitions: [shared fields](BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection).

### BuyerReturnPreviewResponseDataEligibilityEligibility.selection variant 1: `selection_type` = `"all_remaining_fulfilled"`

oneOf with selection_type: "all_remaining_fulfilled": The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).
- Optional: `line_items`.
- Constraints for `selection_type`: Values: `"all_remaining_fulfilled"`.

### BuyerReturnPreviewResponseDataEligibilityEligibility.selection variant 2: `selection_type` = `"line_items"`

oneOf with selection_type: "line_items": The `line_items` variant of `ReturnEligibilitySelection`..

- Required: `line_items`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `selection_type`: Values: `"line_items"`.

### BuyerReturnPreviewResponseDataEligibilityEligibility.selection variant 1.line_items[]

Field definitions: [BuyerReturnPreviewResponse.data.eligibility fields 1.selection variant 1.line_items[]](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection-variant-1line_items).

