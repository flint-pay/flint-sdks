[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataEligibilityEligibility

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of ([ReturnPreviewsCreateResponse200DataEligibilityEligibilityLineItemsItem](../models/ReturnPreviewsCreateResponse200DataEligibilityEligibilityLineItemsItem.md#returnpreviewscreateresponse200dataeligibilityeligibilitylineitemsitem) and object) |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluation](../models/ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluation.md#returnpreviewscreateresponse200dataeligibilityeligibilitypolicyevaluation) | How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. `policy_evaluation`: [field definitions](../models/ReturnPreviewsCreateResponse200DataEligibilityEligibility.md#returnpreviewscreateresponse200dataeligibilityeligibilitypolicy_evaluation). |
| `selection` | Required | object and Alternative shapes (see declared variants) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibility.md#mecreatereturnpreviewresponse200dataeligibilityeligibilityselection). |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### ReturnPreviewsCreateResponse200DataEligibilityEligibility.policy_evaluation

How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of [ReturnPolicyEvaluationLineItem](../models/ReturnPolicyEvaluationLineItem.md#returnpolicyevaluationlineitem) |  |
| `reason` | Required | string | Values: [9 declared values](#returnpreviewscreateresponse200dataeligibilityeligibilitypolicy_evaluation-reason-values). |
| `reason_message` | Required | string |  |
| `return_policy_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### ReturnPreviewsCreateResponse200DataEligibilityEligibility.policy_evaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnPreviewsCreateResponse200DataEligibilityEligibility.selection

Declared alternatives: [MeCreateReturnPreviewResponse200DataEligibilityEligibility.selection](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibility.md#mecreatereturnpreviewresponse200dataeligibilityeligibilityselection).

