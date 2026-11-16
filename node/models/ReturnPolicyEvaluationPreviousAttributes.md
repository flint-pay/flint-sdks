[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyEvaluationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `line_items` | Optional | Array of [ReturnPolicyEvaluationLineItemPreviousAttributes](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributes) or null | Eligibility of each line asked about. `line_items`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items). |
| `reason` | Optional | string or null | Why the selection got this result. Values: [9 declared values](#returnpolicyevaluationpreviousattributes-reason-values). `reason`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesreason). |
| `reason_message` | Optional | string or null | Explanation of `reason`. `reason_message`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason_message). |
| `return_policy_id` | Optional | string or null | ID of the policy that judged the lines. Absent when none matched. `return_policy_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the policy revision that judged the lines. Absent when none matched. `return_policy_revision_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesreturn_policy_revision_id). |
| `status` | Optional | string or null | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesstatus). |

#### ReturnPolicyEvaluationPreviousAttributes reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnPolicyEvaluationPreviousAttributes.evaluated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnPolicyEvaluationPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnPolicyEvaluationPreviousAttributes.line_items

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1

anyOf variant 1: Eligibility of each line asked about..

- Value shape: Array of [ReturnPolicyEvaluationLineItemPreviousAttributes](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributes). Eligibility of each line asked about. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Eligibility of each line asked about. 

### ReturnPolicyEvaluationPreviousAttributes.reason

### ReturnPolicyEvaluationPreviousAttributes.reason variant 1

anyOf variant 1: Why the selection got this result..

- Value shape: string. Why the selection got this result. Values: `"eligible_under_policy"`, `"manual_review_required"`, `"return_window_expired"`, `"quantity_unavailable"`, `"policy_ineligible"`, `"resolution_not_allowed"`, `"reason_not_allowed"`, `"policy_conflict"`, `"no_matching_policy"`.

### ReturnPolicyEvaluationPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the selection got this result. 

### ReturnPolicyEvaluationPreviousAttributes.reason_message

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.reason_message](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason_message).

### ReturnPolicyEvaluationPreviousAttributes.return_policy_id

### ReturnPolicyEvaluationPreviousAttributes.return_policy_id variant 1

anyOf variant 1: ID of the policy that judged the lines. Absent when none matched..

- Value shape: string. ID of the policy that judged the lines. Absent when none matched. ID of the policy that judged the lines. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnPolicyEvaluationPreviousAttributes.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy that judged the lines. Absent when none matched. 

### ReturnPolicyEvaluationPreviousAttributes.return_policy_revision_id

### ReturnPolicyEvaluationPreviousAttributes.return_policy_revision_id variant 1

anyOf variant 1: ID of the policy revision that judged the lines. Absent when none matched..

- Value shape: string. ID of the policy revision that judged the lines. Absent when none matched. ID of the policy revision that judged the lines. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnPolicyEvaluationPreviousAttributes.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy revision that judged the lines. Absent when none matched. 

### ReturnPolicyEvaluationPreviousAttributes.status

### ReturnPolicyEvaluationPreviousAttributes.status variant 1

anyOf variant 1: Overall result for the selection. `review_required` when the lines differ..

- Value shape: string. Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`.

### ReturnPolicyEvaluationPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Overall result for the selection. `review_required` when the lines differ. 

