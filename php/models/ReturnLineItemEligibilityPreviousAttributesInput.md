[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemEligibilityPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputallowed_resolution_types). |
| `decision_proposal` | Optional | [ReturnLineItemDecisionProposalPreviousAttributesInput](../models/ReturnLineItemDecisionProposalPreviousAttributesInput.md#returnlineitemdecisionproposalpreviousattributesinput) or null | Terms the policy proposes if the line is approved. Absent when the policy can't propose any. |
| `eligible_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `eligible_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `evaluated_at` | Optional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `ineligibility_reason` | Optional | string or null | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. `ineligibility_reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputineligibility_reason). |
| `policy_adjustment_proposals` | Optional | Array of [ReturnPolicyAdjustmentProposalPreviousAttributesInput](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinput) or null | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. `policy_adjustment_proposals`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputpolicy_adjustment_proposals). |
| `reason` | Optional | string or null | Why the line got this result. Values: [9 declared values](#returnlineitemeligibilitypreviousattributesinput-reason-values). `reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreason). |
| `reason_message` | Optional | string or null | Explanation of `reason`. `reason_message`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreason_message). |
| `return_policy_id` | Optional | string or null | ID of the policy that judged the line. Absent when none matched. `return_policy_id`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the policy revision that judged the line. Absent when none matched. `return_policy_revision_id`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreturn_policy_revision_id). |
| `return_shipping_payer` | Optional | string or null | Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`. `return_shipping_payer`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreturn_shipping_payer). |
| `status` | Optional | string or null | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputstatus). |

#### ReturnLineItemEligibilityPreviousAttributesInput reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnLineItemEligibilityPreviousAttributesInput.allowed_resolution_types

### ReturnLineItemEligibilityPreviousAttributesInput.allowed_resolution_types variant 1

anyOf variant 1: Resolution types the policy allows for this line..

- Value shape: Array of string. Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`.

### ReturnLineItemEligibilityPreviousAttributesInput.allowed_resolution_types variant 2

anyOf variant 2.

- Value shape: null. Resolution types the policy allows for this line. 

### ReturnLineItemEligibilityPreviousAttributesInput.eligible_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnLineItemEligibilityPreviousAttributesInput.evaluated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnLineItemEligibilityPreviousAttributesInput.expires_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnLineItemEligibilityPreviousAttributesInput.ineligibility_reason

### ReturnLineItemEligibilityPreviousAttributesInput.ineligibility_reason variant 1

anyOf variant 1: The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible..

- Value shape: string. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`.

### ReturnLineItemEligibilityPreviousAttributesInput.ineligibility_reason variant 2

anyOf variant 2.

- Value shape: null. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. 

### ReturnLineItemEligibilityPreviousAttributesInput.policy_adjustment_proposals

### ReturnLineItemEligibilityPreviousAttributesInput.policy_adjustment_proposals variant 1

anyOf variant 1: Fees or credits the policy proposes for this line, to add to a resolution as adjustments..

- Value shape: Array of [ReturnPolicyAdjustmentProposalPreviousAttributesInput](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinput). Fees or credits the policy proposes for this line, to add to a resolution as adjustments. 

### ReturnLineItemEligibilityPreviousAttributesInput.policy_adjustment_proposals variant 2

anyOf variant 2.

- Value shape: null. Fees or credits the policy proposes for this line, to add to a resolution as adjustments. 

### ReturnLineItemEligibilityPreviousAttributesInput.reason

### ReturnLineItemEligibilityPreviousAttributesInput.reason variant 1

anyOf variant 1: Why the line got this result..

- Value shape: string. Why the line got this result. Values: `"eligible_under_policy"`, `"manual_review_required"`, `"return_window_expired"`, `"quantity_unavailable"`, `"policy_ineligible"`, `"resolution_not_allowed"`, `"reason_not_allowed"`, `"policy_conflict"`, `"no_matching_policy"`.

### ReturnLineItemEligibilityPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why the line got this result. 

### ReturnLineItemEligibilityPreviousAttributesInput.reason_message

### ReturnLineItemEligibilityPreviousAttributesInput.reason_message variant 1

anyOf variant 1: Explanation of `reason`..

- Value shape: string. Explanation of `reason`. 

### ReturnLineItemEligibilityPreviousAttributesInput.reason_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of `reason`. 

### ReturnLineItemEligibilityPreviousAttributesInput.return_policy_id

### ReturnLineItemEligibilityPreviousAttributesInput.return_policy_id variant 1

anyOf variant 1: ID of the policy that judged the line. Absent when none matched..

- Value shape: string. ID of the policy that judged the line. Absent when none matched. ID of the policy that judged the line. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnLineItemEligibilityPreviousAttributesInput.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy that judged the line. Absent when none matched. 

### ReturnLineItemEligibilityPreviousAttributesInput.return_policy_revision_id

### ReturnLineItemEligibilityPreviousAttributesInput.return_policy_revision_id variant 1

anyOf variant 1: ID of the policy revision that judged the line. Absent when none matched..

- Value shape: string. ID of the policy revision that judged the line. Absent when none matched. ID of the policy revision that judged the line. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnLineItemEligibilityPreviousAttributesInput.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy revision that judged the line. Absent when none matched. 

### ReturnLineItemEligibilityPreviousAttributesInput.return_shipping_payer

### ReturnLineItemEligibilityPreviousAttributesInput.return_shipping_payer variant 1

anyOf variant 1: Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label..

- Value shape: string. Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`.

### ReturnLineItemEligibilityPreviousAttributesInput.return_shipping_payer variant 2

anyOf variant 2.

- Value shape: null. Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. 

### ReturnLineItemEligibilityPreviousAttributesInput.status

### ReturnLineItemEligibilityPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the policy lets the buyer return this. `review_required` means the merchant decides..

- Value shape: string. Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`.

### ReturnLineItemEligibilityPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the policy lets the buyer return this. `review_required` means the merchant decides. 

