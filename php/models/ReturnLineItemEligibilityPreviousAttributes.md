[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemEligibilityPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesallowed_resolution_types). |
| `decision_proposal` | Optional | [ReturnLineItemDecisionProposalPreviousAttributes](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributes) or null | Terms the policy proposes if the line is approved. Absent when the policy can't propose any. `decision_proposal`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesdecision_proposal). |
| `eligible_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `eligible_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `evaluated_at` | Optional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `ineligibility_reason` | Optional | string or null | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. `ineligibility_reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesineligibility_reason). |
| `policy_adjustment_proposals` | Optional | Array of [ReturnPolicyAdjustmentProposalPreviousAttributes](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributes) or null | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. `policy_adjustment_proposals`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributespolicy_adjustment_proposals). |
| `reason` | Optional | string or null | Why the line got this result. Values: [9 declared values](#returnlineitemeligibilitypreviousattributes-reason-values). `reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason). |
| `reason_message` | Optional | string or null | Explanation of `reason`. `reason_message`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason_message). |
| `return_policy_id` | Optional | string or null | ID of the policy that judged the line. Absent when none matched. `return_policy_id`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the policy revision that judged the line. Absent when none matched. `return_policy_revision_id`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreturn_policy_revision_id). |
| `return_shipping_payer` | Optional | string or null | Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`. `return_shipping_payer`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreturn_shipping_payer). |
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

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal

Terms the policy proposes if the line is approved. Absent when the policy can't propose any.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Conditional | Array of string or null | Resolution types the proposal allows. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesallowed_resolution_types). |
| `automatic_resolution_type` | Conditional | string or null | The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. `automatic_resolution_type`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesdecision_proposal-variant-1automatic_resolution_type). |
| `based_on_quantity` | Conditional | integer or null | Whole-number quantity; fractional quantities are not supported. `based_on_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `is_inspection_required` | Conditional | boolean or null | Whether the proposal requires inspection of the returned units. `is_inspection_required`: [declared alternatives](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesis_inspection_required). |
| `receiving_location_id` | Conditional | string or null | ID of the Location the proposal sends returned merchandise to. `receiving_location_id`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesdecision_proposal-variant-1receiving_location_id). |
| `release_timing` | Conditional | string or null | The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesrelease_timing). |
| `return_required_quantity` | Conditional | integer or null | Whole-number quantity; fractional quantities are not supported. `return_required_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1

anyOf ReturnLineItemDecisionProposalPreviousAttributes.

- Optional: `allowed_resolution_types`, `automatic_resolution_type`, `based_on_quantity`, `is_inspection_required`, `receiving_location_id`, `release_timing`, `return_required_quantity`.

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 2

anyOf variant 2.

- Undeclared: `allowed_resolution_types`, `automatic_resolution_type`, `based_on_quantity`, `is_inspection_required`, `receiving_location_id`, `release_timing`, `return_required_quantity`.
- Value shape: null. Terms the policy proposes if the line is approved. Absent when the policy can't propose any. 

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.allowed_resolution_types

Declared alternatives: [ReturnLineItemDecisionProposalPreviousAttributes.allowed_resolution_types](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesallowed_resolution_types).

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.automatic_resolution_type

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.automatic_resolution_type variant 1

anyOf variant 1: The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type..

- Value shape: string. The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`.

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.automatic_resolution_type variant 2

anyOf variant 2.

- Value shape: null. The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. 

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.based_on_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.is_inspection_required

Declared alternatives: [ReturnLineItemDecisionProposalPreviousAttributes.is_inspection_required](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesis_inspection_required).

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.receiving_location_id

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.receiving_location_id variant 1

anyOf variant 1: ID of the Location the proposal sends returned merchandise to..

- Value shape: string. ID of the Location the proposal sends returned merchandise to. ID of the Location the proposal sends returned merchandise to. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the proposal sends returned merchandise to. 

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.release_timing

Declared alternatives: [ReturnLineItemDecisionProposalPreviousAttributes.release_timing](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesrelease_timing).

### ReturnLineItemEligibilityPreviousAttributes.decision_proposal variant 1.return_required_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnLineItemEligibilityPreviousAttributes.eligible_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnLineItemEligibilityPreviousAttributes.evaluated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnLineItemEligibilityPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

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

- Value shape: string. ID of the policy that judged the line. Absent when none matched. 

### ReturnLineItemEligibilityPreviousAttributes.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy that judged the line. Absent when none matched. 

### ReturnLineItemEligibilityPreviousAttributes.return_policy_revision_id

### ReturnLineItemEligibilityPreviousAttributes.return_policy_revision_id variant 1

anyOf variant 1: ID of the policy revision that judged the line. Absent when none matched..

- Value shape: string. ID of the policy revision that judged the line. Absent when none matched. 

### ReturnLineItemEligibilityPreviousAttributes.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy revision that judged the line. Absent when none matched. 

### ReturnLineItemEligibilityPreviousAttributes.return_shipping_payer

### ReturnLineItemEligibilityPreviousAttributes.return_shipping_payer variant 1

anyOf variant 1: Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label..

- Value shape: string. Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`.

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

