[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyEvaluationLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesallowed_resolution_types). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of the bundle the line was sold from. `bundle_components`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesbundle_id). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `eligible_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `eligible_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment the units were delivered in. `fulfillment_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesfulfillment_id). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item as sold. |
| `ineligibility_reason` | Optional | string or null | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. `ineligibility_reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesineligibility_reason). |
| `is_inspection_required` | Optional | boolean or null | Whether the policy requires inspection of the returned units. `is_inspection_required`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesis_inspection_required). |
| `is_merchandise_return_required` | Optional | boolean or null | Whether the policy requires the buyer to send the merchandise back. `is_merchandise_return_required`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesis_merchandise_return_required). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the order line, with their prices. `modifiers`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_id` | Optional | string or null | Order that owns order_line_item_id. `order_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item the units come from. `order_line_item_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesorder_line_item_id). |
| `policy_adjustment_proposals` | Optional | Array of [ReturnPolicyAdjustmentProposalPreviousAttributes](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributes) or null | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. `policy_adjustment_proposals`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributespolicy_adjustment_proposals). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. `product_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesproduct_id). |
| `reason` | Optional | string or null | Why the line got this result. Values: [9 declared values](#returnpolicyevaluationlineitempreviousattributes-reason-values). `reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason). |
| `receiving_location_id` | Optional | string or null | ID of the Location the policy sends returned merchandise to. `receiving_location_id`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesreceiving_location_id). |
| `release_timing` | Optional | string or null | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing). |
| `requested_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `status` | Optional | string or null | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesstatus). |
| `suggested_return_reason_ids` | Optional | Array of string or null | IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. `suggested_return_reason_ids`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributessuggested_return_reason_ids). |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesvariant_id). |

#### ReturnPolicyEvaluationLineItemPreviousAttributes reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnPolicyEvaluationLineItemPreviousAttributes.allowed_resolution_types

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.allowed_resolution_types](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesallowed_resolution_types).

### ReturnPolicyEvaluationLineItemPreviousAttributes.bundle_components

Declared alternatives: [ReturnLineItemPreviousAttributes.bundle_components](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbundle_components).

### ReturnPolicyEvaluationLineItemPreviousAttributes.bundle_id

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.bundle_id](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesbundle_id).

### ReturnPolicyEvaluationLineItemPreviousAttributes.description

Declared alternatives: [OrderLineItemPreviousAttributes.description](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription).

### ReturnPolicyEvaluationLineItemPreviousAttributes.eligible_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnPolicyEvaluationLineItemPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnPolicyEvaluationLineItemPreviousAttributes.fulfillment_id

Declared alternatives: [ReturnLineItemPreviousAttributes.fulfillment_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesfulfillment_id).

### ReturnPolicyEvaluationLineItemPreviousAttributes.ineligibility_reason

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.ineligibility_reason](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesineligibility_reason).

### ReturnPolicyEvaluationLineItemPreviousAttributes.is_inspection_required

### ReturnPolicyEvaluationLineItemPreviousAttributes.is_inspection_required variant 1

anyOf variant 1: Whether the policy requires inspection of the returned units..

- Value shape: boolean. Whether the policy requires inspection of the returned units. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.is_inspection_required variant 2

anyOf variant 2.

- Value shape: null. Whether the policy requires inspection of the returned units. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.is_merchandise_return_required

### ReturnPolicyEvaluationLineItemPreviousAttributes.is_merchandise_return_required variant 1

anyOf variant 1: Whether the policy requires the buyer to send the merchandise back..

- Value shape: boolean. Whether the policy requires the buyer to send the merchandise back. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.is_merchandise_return_required variant 2

anyOf variant 2.

- Value shape: null. Whether the policy requires the buyer to send the merchandise back. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.modifiers

Declared alternatives: [ReturnLineItemPreviousAttributes.modifiers](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmodifiers).

### ReturnPolicyEvaluationLineItemPreviousAttributes.name

Declared alternatives: [OrderLineItemPreviousAttributes.name](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname).

### ReturnPolicyEvaluationLineItemPreviousAttributes.order_id

Declared alternatives: [ReturnLineItemPreviousAttributes.order_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesorder_id).

### ReturnPolicyEvaluationLineItemPreviousAttributes.order_line_item_id

Declared alternatives: [ReturnLineItemPreviousAttributes.order_line_item_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesorder_line_item_id).

### ReturnPolicyEvaluationLineItemPreviousAttributes.policy_adjustment_proposals

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.policy_adjustment_proposals](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributespolicy_adjustment_proposals).

### ReturnPolicyEvaluationLineItemPreviousAttributes.product_id

Declared alternatives: [ReturnLineItemPreviousAttributes.product_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesproduct_id).

### ReturnPolicyEvaluationLineItemPreviousAttributes.reason

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.reason](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason).

### ReturnPolicyEvaluationLineItemPreviousAttributes.receiving_location_id

### ReturnPolicyEvaluationLineItemPreviousAttributes.receiving_location_id variant 1

anyOf variant 1: ID of the Location the policy sends returned merchandise to..

- Value shape: string. ID of the Location the policy sends returned merchandise to. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the policy sends returned merchandise to. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.release_timing

### ReturnPolicyEvaluationLineItemPreviousAttributes.release_timing variant 1

anyOf variant 1: Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release..

- Value shape: string. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`.

### ReturnPolicyEvaluationLineItemPreviousAttributes.release_timing variant 2

anyOf variant 2.

- Value shape: null. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.requested_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnPolicyEvaluationLineItemPreviousAttributes.selected_options

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### ReturnPolicyEvaluationLineItemPreviousAttributes.sku

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.sku](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku).

### ReturnPolicyEvaluationLineItemPreviousAttributes.status

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.status](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesstatus).

### ReturnPolicyEvaluationLineItemPreviousAttributes.suggested_return_reason_ids

### ReturnPolicyEvaluationLineItemPreviousAttributes.suggested_return_reason_ids variant 1

anyOf variant 1: IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle..

- Value shape: Array of string. IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.suggested_return_reason_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. 

### ReturnPolicyEvaluationLineItemPreviousAttributes.variant_id

Declared alternatives: [OrderLineItemPreviousAttributes.variant_id](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesvariant_id).

