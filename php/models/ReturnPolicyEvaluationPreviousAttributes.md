[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyEvaluationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
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

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnPolicyEvaluationPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnPolicyEvaluationPreviousAttributes.line_items

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1

anyOf variant 1: Eligibility of each line asked about..

- Value shape: Array of [ReturnPolicyEvaluationLineItemPreviousAttributes](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributes). Eligibility of each line asked about. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Eligibility of each line asked about. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesallowed_resolution_types). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of the bundle the line was sold from. `bundle_components`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1bundle_id). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `eligible_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `eligible_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment the units were delivered in. `fulfillment_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1fulfillment_id). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item as sold. |
| `ineligibility_reason` | Optional | string or null | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. `ineligibility_reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesineligibility_reason). |
| `is_inspection_required` | Optional | boolean or null | Whether the policy requires inspection of the returned units. `is_inspection_required`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesis_inspection_required). |
| `is_merchandise_return_required` | Optional | boolean or null | Whether the policy requires the buyer to send the merchandise back. `is_merchandise_return_required`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesis_merchandise_return_required). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the order line, with their prices. `modifiers`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_id` | Optional | string or null | Order that owns order_line_item_id. `order_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item the units come from. `order_line_item_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1order_line_item_id). |
| `policy_adjustment_proposals` | Optional | Array of [ReturnPolicyAdjustmentProposalPreviousAttributes](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributes) or null | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. `policy_adjustment_proposals`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributespolicy_adjustment_proposals). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. `product_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1product_id). |
| `reason` | Optional | string or null | Why the line got this result. Values: [9 declared values](#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1-reason-values). `reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason). |
| `receiving_location_id` | Optional | string or null | ID of the Location the policy sends returned merchandise to. `receiving_location_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1receiving_location_id). |
| `release_timing` | Optional | string or null | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. The policy evaluation did not assign a release gate to this line. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`, `"unspecified"`. `release_timing`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing). |
| `requested_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `status` | Optional | string or null | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesstatus). |
| `suggested_return_reason_ids` | Optional | Array of string or null | IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. `suggested_return_reason_ids`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1suggested_return_reason_ids). |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1variant_id). |

#### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1 reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.allowed_resolution_types

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.allowed_resolution_types](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesallowed_resolution_types).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.bundle_components

Declared alternatives: [ReturnLineItemPreviousAttributes.bundle_components](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbundle_components).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.bundle_id

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.bundle_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1bundle_id).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.description

Declared alternatives: [OrderLineItemPreviousAttributes.description](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.eligible_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.expires_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.fulfillment_id

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment the units were delivered in..

- Value shape: string. ID of the fulfillment the units were delivered in. ID of the fulfillment the units were delivered in. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment the units were delivered in. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.ineligibility_reason

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.ineligibility_reason](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesineligibility_reason).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.is_inspection_required

Declared alternatives: [ReturnPolicyEvaluationLineItemPreviousAttributes.is_inspection_required](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesis_inspection_required).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.is_merchandise_return_required

Declared alternatives: [ReturnPolicyEvaluationLineItemPreviousAttributes.is_merchandise_return_required](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesis_merchandise_return_required).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.modifiers

Declared alternatives: [ReturnLineItemPreviousAttributes.modifiers](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmodifiers).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.name

Declared alternatives: [OrderLineItemPreviousAttributes.name](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.order_id

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order that owns order_line_item_id..

- Value shape: string. Order that owns order_line_item_id. Order that owns order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns order_line_item_id. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: ID of the order line item the units come from..

- Value shape: string. ID of the order line item the units come from. ID of the order line item the units come from. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item the units come from. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.policy_adjustment_proposals

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.policy_adjustment_proposals](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributespolicy_adjustment_proposals).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.product_id

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from..

- Value shape: string. ID of the catalog product the item was sold from. ID of the catalog product the item was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.reason

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.reason](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.receiving_location_id

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.receiving_location_id variant 1

anyOf variant 1: ID of the Location the policy sends returned merchandise to..

- Value shape: string. ID of the Location the policy sends returned merchandise to. ID of the Location the policy sends returned merchandise to. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the policy sends returned merchandise to. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.release_timing

Declared alternatives: [ReturnPolicyEvaluationLineItemPreviousAttributes.release_timing](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.requested_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.selected_options

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.sku

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.sku](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.status

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.status](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesstatus).

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.suggested_return_reason_ids

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.suggested_return_reason_ids variant 1

anyOf variant 1: IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle..

- Value shape: Array of string. IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. Items: Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.suggested_return_reason_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. 

### ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.variant_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1variant_id).

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

- Value shape: string. ID of the policy that judged the lines. Absent when none matched. 

### ReturnPolicyEvaluationPreviousAttributes.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy that judged the lines. Absent when none matched. 

### ReturnPolicyEvaluationPreviousAttributes.return_policy_revision_id

### ReturnPolicyEvaluationPreviousAttributes.return_policy_revision_id variant 1

anyOf variant 1: ID of the policy revision that judged the lines. Absent when none matched..

- Value shape: string. ID of the policy revision that judged the lines. Absent when none matched. 

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

