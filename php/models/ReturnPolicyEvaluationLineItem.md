[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyEvaluationLineItem

The policy result for one return line: status, eligible quantity, allowed resolution types, and handling requirements such as inspection.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components of the bundle the line was sold from. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. |
| `description` | Optional | string | Description of the item as sold. |
| `eligible_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `fulfillment_id` | Required | string | ID of the fulfillment the units were delivered in. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the item as sold. An image with its URL, size, and alt text. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Required | boolean | Whether the policy requires inspection of the returned units. |
| `is_merchandise_return_required` | Required | boolean | Whether the policy requires the buyer to send the merchandise back. |
| `modifiers` | Required | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | Modifiers selected on the order line, with their prices. `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `name` | Required | string | Name of the item as sold. |
| `order_line_item_id` | Required | string | ID of the order line item the units come from. |
| `policy_adjustment_proposals` | Required | Array of [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal) | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. |
| `reason` | Required | string | Why the line got this result. Values: [9 declared values](#returnpolicyevaluationlineitem-reason-values). |
| `receiving_location_id` | Optional | string | ID of the Location the policy sends returned merchandise to. |
| `release_timing` | Required | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Variant options selected for the item, such as size and color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the item as sold. |
| `status` | Required | string | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `suggested_return_reason_ids` | Required | Array of string | IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. |
| `variant_id` | Optional | string | ID of the catalog variant the item was sold from. |

#### ReturnPolicyEvaluationLineItem reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnPolicyEvaluationLineItem.bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### ReturnPolicyEvaluationLineItem.modifiers[]

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers).

### ReturnPolicyEvaluationLineItem.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

