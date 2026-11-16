[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyEvaluationLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputallowed_resolution_types). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput) or null | Components of the bundle the line was sold from. `bundle_components`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbundle_id). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputdescription). |
| `eligible_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `eligible_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment the units were delivered in. `fulfillment_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputfulfillment_id). |
| `image` | Optional | [ImagePreviousAttributesInput](../models/ImagePreviousAttributesInput.md#imagepreviousattributesinput) or null | Image of the item as sold. |
| `ineligibility_reason` | Optional | string or null | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. `ineligibility_reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputineligibility_reason). |
| `is_inspection_required` | Optional | boolean or null | Whether the policy requires inspection of the returned units. `is_inspection_required`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinputis_inspection_required). |
| `is_merchandise_return_required` | Optional | boolean or null | Whether the policy requires the buyer to send the merchandise back. `is_merchandise_return_required`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinputis_merchandise_return_required). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput) or null | Modifiers selected on the order line, with their prices. `modifiers`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputname). |
| `order_id` | Optional | string or null | Order that owns order_line_item_id. `order_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item the units come from. `order_line_item_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputorder_line_item_id). |
| `policy_adjustment_proposals` | Optional | Array of [ReturnPolicyAdjustmentProposalPreviousAttributesInput](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinput) or null | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. `policy_adjustment_proposals`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputpolicy_adjustment_proposals). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. `product_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputproduct_id). |
| `reason` | Optional | string or null | Why the line got this result. Values: [9 declared values](#returnpolicyevaluationlineitempreviousattributesinput-reason-values). `reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreason). |
| `receiving_location_id` | Optional | string or null | ID of the Location the policy sends returned merchandise to. `receiving_location_id`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinputreceiving_location_id). |
| `release_timing` | Optional | string or null | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinputrelease_timing). |
| `requested_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputsku). |
| `status` | Optional | string or null | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputstatus). |
| `suggested_return_reason_ids` | Optional | Array of string or null | IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. `suggested_return_reason_ids`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributesInput.md#returnpolicyevaluationlineitempreviousattributesinputsuggested_return_reason_ids). |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputvariant_id). |

#### ReturnPolicyEvaluationLineItemPreviousAttributesInput reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.allowed_resolution_types

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributesInput.allowed_resolution_types](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputallowed_resolution_types).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.bundle_components

Declared alternatives: [ReturnLineItemPreviousAttributesInput.bundle_components](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputbundle_components).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.bundle_id

Declared alternatives: [OrderLineItemPreviousAttributesInput.bundle_id](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbundle_id).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.description

Declared alternatives: [OrderLineItemPreviousAttributesInput.description](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputdescription).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.eligible_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.expires_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.fulfillment_id

Declared alternatives: [ReturnLineItemPreviousAttributesInput.fulfillment_id](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputfulfillment_id).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.ineligibility_reason

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributesInput.ineligibility_reason](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputineligibility_reason).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.is_inspection_required

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.is_inspection_required variant 1

anyOf variant 1: Whether the policy requires inspection of the returned units..

- Value shape: boolean. Whether the policy requires inspection of the returned units. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.is_inspection_required variant 2

anyOf variant 2.

- Value shape: null. Whether the policy requires inspection of the returned units. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.is_merchandise_return_required

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.is_merchandise_return_required variant 1

anyOf variant 1: Whether the policy requires the buyer to send the merchandise back..

- Value shape: boolean. Whether the policy requires the buyer to send the merchandise back. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.is_merchandise_return_required variant 2

anyOf variant 2.

- Value shape: null. Whether the policy requires the buyer to send the merchandise back. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.modifiers

Declared alternatives: [ReturnLineItemPreviousAttributesInput.modifiers](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputmodifiers).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.name

Declared alternatives: [OrderLineItemPreviousAttributesInput.name](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputname).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.order_id

Declared alternatives: [ReturnLineItemPreviousAttributesInput.order_id](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputorder_id).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.order_line_item_id

Declared alternatives: [ReturnLineItemPreviousAttributesInput.order_line_item_id](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputorder_line_item_id).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.policy_adjustment_proposals

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributesInput.policy_adjustment_proposals](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputpolicy_adjustment_proposals).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.product_id

Declared alternatives: [ReturnLineItemPreviousAttributesInput.product_id](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputproduct_id).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.reason

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributesInput.reason](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputreason).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.receiving_location_id

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.receiving_location_id variant 1

anyOf variant 1: ID of the Location the policy sends returned merchandise to..

- Value shape: string. ID of the Location the policy sends returned merchandise to. ID of the Location the policy sends returned merchandise to. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the policy sends returned merchandise to. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.release_timing

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.release_timing variant 1

anyOf variant 1: Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release..

- Value shape: string. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`.

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.release_timing variant 2

anyOf variant 2.

- Value shape: null. Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.requested_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.selected_options

Declared alternatives: [OrderLineItemPreviousAttributesInput.selected_options](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.sku

Declared alternatives: [OrderLineItemPreviousAttributesInput.sku](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputsku).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.status

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributesInput.status](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinputstatus).

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.suggested_return_reason_ids

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.suggested_return_reason_ids variant 1

anyOf variant 1: IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle..

- Value shape: Array of string. IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. Items: Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.suggested_return_reason_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. 

### ReturnPolicyEvaluationLineItemPreviousAttributesInput.variant_id

Declared alternatives: [OrderLineItemPreviousAttributesInput.variant_id](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputvariant_id).

