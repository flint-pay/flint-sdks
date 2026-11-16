[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyEvaluationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `line_items` | Optional | Array of [ReturnPolicyEvaluationLineItemPreviousAttributesInput](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinput) or null | Eligibility of each line asked about. `line_items`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributesInput.md#returnpolicyevaluationpreviousattributesinputline_items). |
| `reason` | Optional | string or null | Why the selection got this result. Values: [9 declared values](#returnpolicyevaluationpreviousattributesinput-reason-values). `reason`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributesInput.md#returnpolicyevaluationpreviousattributesinputreason). |
| `reason_message` | Optional | string or null | Explanation of `reason`. `reason_message`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreason_message). |
| `return_policy_id` | Optional | string or null | ID of the policy that judged the lines. Absent when none matched. `return_policy_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributesInput.md#returnpolicyevaluationpreviousattributesinputreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the policy revision that judged the lines. Absent when none matched. `return_policy_revision_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributesInput.md#returnpolicyevaluationpreviousattributesinputreturn_policy_revision_id). |
| `status` | Optional | string or null | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributesInput.md#returnpolicyevaluationpreviousattributesinputstatus). |

#### ReturnPolicyEvaluationPreviousAttributesInput reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnPolicyEvaluationPreviousAttributesInput.evaluated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnPolicyEvaluationPreviousAttributesInput.expires_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnPolicyEvaluationPreviousAttributesInput.line_items

### ReturnPolicyEvaluationPreviousAttributesInput.line_items variant 1

anyOf variant 1: Eligibility of each line asked about..

- Value shape: Array of [ReturnPolicyEvaluationLineItemPreviousAttributesInput](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinput). Eligibility of each line asked about. 

### ReturnPolicyEvaluationPreviousAttributesInput.line_items variant 2

anyOf variant 2.

- Value shape: null. Eligibility of each line asked about. 

### ReturnPolicyEvaluationPreviousAttributesInput.reason

### ReturnPolicyEvaluationPreviousAttributesInput.reason variant 1

anyOf variant 1: Why the selection got this result..

- Value shape: string. Why the selection got this result. Values: `"eligible_under_policy"`, `"manual_review_required"`, `"return_window_expired"`, `"quantity_unavailable"`, `"policy_ineligible"`, `"resolution_not_allowed"`, `"reason_not_allowed"`, `"policy_conflict"`, `"no_matching_policy"`.

### ReturnPolicyEvaluationPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why the selection got this result. 

### ReturnPolicyEvaluationPreviousAttributesInput.reason_message

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributesInput.reason_message](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreason_message).

### ReturnPolicyEvaluationPreviousAttributesInput.return_policy_id

### ReturnPolicyEvaluationPreviousAttributesInput.return_policy_id variant 1

anyOf variant 1: ID of the policy that judged the lines. Absent when none matched..

- Value shape: string. ID of the policy that judged the lines. Absent when none matched. ID of the policy that judged the lines. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnPolicyEvaluationPreviousAttributesInput.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy that judged the lines. Absent when none matched. 

### ReturnPolicyEvaluationPreviousAttributesInput.return_policy_revision_id

### ReturnPolicyEvaluationPreviousAttributesInput.return_policy_revision_id variant 1

anyOf variant 1: ID of the policy revision that judged the lines. Absent when none matched..

- Value shape: string. ID of the policy revision that judged the lines. Absent when none matched. ID of the policy revision that judged the lines. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnPolicyEvaluationPreviousAttributesInput.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy revision that judged the lines. Absent when none matched. 

### ReturnPolicyEvaluationPreviousAttributesInput.status

### ReturnPolicyEvaluationPreviousAttributesInput.status variant 1

anyOf variant 1: Overall result for the selection. `review_required` when the lines differ..

- Value shape: string. Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`.

### ReturnPolicyEvaluationPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Overall result for the selection. `review_required` when the lines differ. 

