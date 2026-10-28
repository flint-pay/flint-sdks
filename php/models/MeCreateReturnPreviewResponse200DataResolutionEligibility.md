[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolutionEligibility

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItem](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItem.md#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitem) and object) |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [MeCreateReturnPreviewResponse200DataResolutionEligibilityPolicyEvaluation](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityPolicyEvaluation.md#mecreatereturnpreviewresponse200dataresolutioneligibilitypolicyevaluation) | Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. `policy_evaluation`: [field definitions](../models/MeCreateReturnPreviewResponse200DataResolutionEligibility.md#mecreatereturnpreviewresponse200dataresolutioneligibilitypolicy_evaluation). |
| `selection` | Required | object and Alternative shapes (see declared variants) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibility.md#mecreatereturnpreviewresponse200dataeligibilityeligibilityselection). |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### MeCreateReturnPreviewResponse200DataResolutionEligibility.policy_evaluation

Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of object | `line_items[]`: [field definitions](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1policy_evaluationline_items). |
| `reason` | Required | string | Values: [9 declared values](#mecreatereturnpreviewresponse200dataresolutioneligibilitypolicy_evaluation-reason-values). |
| `reason_message` | Required | string |  |
| `return_policy_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### MeCreateReturnPreviewResponse200DataResolutionEligibility.policy_evaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### MeCreateReturnPreviewResponse200DataResolutionEligibility.policy_evaluation.line_items[]

Field definitions: [MeCreateReturnPreviewResponse200.data.eligibility fields 1.policy_evaluation.line_items[]](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1policy_evaluationline_items).

### MeCreateReturnPreviewResponse200DataResolutionEligibility.selection

Declared alternatives: [MeCreateReturnPreviewResponse200DataEligibilityEligibility.selection](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibility.md#mecreatereturnpreviewresponse200dataeligibilityeligibilityselection).

