[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemEligibilityPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesallowed_resolution_types). |
| `decision_proposal` | Optional | [ReturnLineItemDecisionProposalPreviousAttributes](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributes) or null | Terms the policy proposes if the line is approved. Absent when the policy can't propose any. |
| `eligible_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `eligible_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `evaluated_at` | Optional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `ineligibility_reason` | Optional | string or null | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. `ineligibility_reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesineligibility_reason). |
| `policy_adjustment_proposals` | Optional | Array of [ReturnPolicyAdjustmentProposalPreviousAttributes](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributes) or null | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. `policy_adjustment_proposals`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributespolicy_adjustment_proposals). |
| `reason` | Optional | string or null | Why the line got this result. Values: [9 declared values](#returnlineitemeligibilitypreviousattributes-reason-values). `reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason). |
| `reason_message` | Optional | string or null | Explanation of `reason`. `reason_message`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason_message). |
| `return_policy_id` | Optional | string or null | ID of the policy that judged the line. Absent when none matched. `return_policy_id`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the policy revision that judged the line. Absent when none matched. `return_policy_revision_id`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreturn_policy_revision_id). |
| `return_shipping_payer` | Optional | string or null or null | Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`. `return_shipping_payer`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreturn_shipping_payer). |
| `status` | Optional | string or null | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesstatus). |

#### ReturnLineItemEligibilityPreviousAttributes reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnLineItemEligibilityPreviousAttributes.allowed_resolution_types

### ReturnLineItemEligibilityPreviousAttributes.allowed_resolution_types variant 1

anyOf variant 1: Resolution types the policy allows for this line..

- Value shape: Array of string. Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`.

### ReturnLineItemEligibilityPreviousAttributes.allowed_resolution_types variant 2

anyOf variant 2.

- Value shape: null. Resolution types the policy allows for this line. 

### ReturnLineItemEligibilityPreviousAttributes.eligible_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnLineItemEligibilityPreviousAttributes.evaluated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnLineItemEligibilityPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnLineItemEligibilityPreviousAttributes.ineligibility_reason

### ReturnLineItemEligibilityPreviousAttributes.ineligibility_reason variant 1

anyOf variant 1: The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible..

- Value shape: string. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`.

### ReturnLineItemEligibilityPreviousAttributes.ineligibility_reason variant 2

anyOf variant 2.

- Value shape: null. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. 

### ReturnLineItemEligibilityPreviousAttributes.policy_adjustment_proposals

### ReturnLineItemEligibilityPreviousAttributes.policy_adjustment_proposals variant 1

anyOf variant 1: Fees or credits the policy proposes for this line, to add to a resolution as adjustments..

- Value shape: Array of [ReturnPolicyAdjustmentProposalPreviousAttributes](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributes). Fees or credits the policy proposes for this line, to add to a resolution as adjustments. 

### ReturnLineItemEligibilityPreviousAttributes.policy_adjustment_proposals variant 2

anyOf variant 2.

- Value shape: null. Fees or credits the policy proposes for this line, to add to a resolution as adjustments. 

### ReturnLineItemEligibilityPreviousAttributes.reason

### ReturnLineItemEligibilityPreviousAttributes.reason variant 1

anyOf variant 1: Why the line got this result..

- Value shape: string. Why the line got this result. Values: `"eligible_under_policy"`, `"manual_review_required"`, `"return_window_expired"`, `"quantity_unavailable"`, `"policy_ineligible"`, `"resolution_not_allowed"`, `"reason_not_allowed"`, `"policy_conflict"`, `"no_matching_policy"`.

### ReturnLineItemEligibilityPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the line got this result. 

### ReturnLineItemEligibilityPreviousAttributes.reason_message

### ReturnLineItemEligibilityPreviousAttributes.reason_message variant 1

anyOf variant 1: Explanation of `reason`..

- Value shape: string. Explanation of `reason`. 

### ReturnLineItemEligibilityPreviousAttributes.reason_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of `reason`. 

### ReturnLineItemEligibilityPreviousAttributes.return_policy_id

### ReturnLineItemEligibilityPreviousAttributes.return_policy_id variant 1

anyOf variant 1: ID of the policy that judged the line. Absent when none matched..

- Value shape: string. ID of the policy that judged the line. Absent when none matched. ID of the policy that judged the line. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnLineItemEligibilityPreviousAttributes.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy that judged the line. Absent when none matched. 

### ReturnLineItemEligibilityPreviousAttributes.return_policy_revision_id

### ReturnLineItemEligibilityPreviousAttributes.return_policy_revision_id variant 1

anyOf variant 1: ID of the policy revision that judged the line. Absent when none matched..

- Value shape: string. ID of the policy revision that judged the line. Absent when none matched. ID of the policy revision that judged the line. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnLineItemEligibilityPreviousAttributes.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy revision that judged the line. Absent when none matched. 

### ReturnLineItemEligibilityPreviousAttributes.return_shipping_payer

### ReturnLineItemEligibilityPreviousAttributes.return_shipping_payer variant 1

anyOf variant 1: Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label..

- Value shape: (string or null). Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`.

### ReturnLineItemEligibilityPreviousAttributes.return_shipping_payer variant 2

anyOf variant 2.

- Value shape: null. Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. 

### ReturnLineItemEligibilityPreviousAttributes.status

### ReturnLineItemEligibilityPreviousAttributes.status variant 1

anyOf variant 1: Whether the policy lets the buyer return this. `review_required` means the merchant decides..

- Value shape: string. Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`.

### ReturnLineItemEligibilityPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the policy lets the buyer return this. `review_required` means the merchant decides. 

