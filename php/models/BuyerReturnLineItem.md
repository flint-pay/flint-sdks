[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnLineItem

An item included in a return request.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_quantity` | Required | integer | Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `allowed_resolution_types` | Required | Array of string | Resolution types that can settle this line's approved quantity. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approved_quantity` | Required | integer | Units the decision approved. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `automatic_resolution_type` | Optional | string | The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `available_resolution_quantity` | Required | integer | Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components of the bundle the line was sold from. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. |
| `buyer_note` | Optional | string | Note the buyer gave about this line. Some return reasons require one. |
| `canceled_quantity` | Required | integer | Approved units canceled later. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `decline_reason` | Optional | string | Why the line's declined quantity was declined. Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. |
| `decline_reason_message` | Optional | string | Detail sent with the decline. |
| `declined_quantity` | Required | integer | Units the decision declined. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `description` | Optional | string | Description of the item as sold. |
| `dispositioned_quantity` | Required | integer | Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `eligibility` | Required | [BuyerReturnLineItemEligibility](../models/BuyerReturnLineItemEligibility.md#buyerreturnlineitemeligibility) | How the pinned return policy judged this line when the Return was created, with the policy revision it used. An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer. `eligibility`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemseligibility). |
| `fulfillment_id` | Required | string | ID of the fulfillment the units were delivered in. |
| `handed_off_quantity` | Required | integer | Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the item as sold. An image with its URL, size, and alt text. |
| `inspected_quantity` | Required | integer | Units that have been inspected. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `is_inspection_required` | Optional | boolean | Whether returned units of this line must be inspected. |
| `is_policy_overridden` | Required | boolean | Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. |
| `merchandise_status` | Required | string | Where this line's merchandise stands, from handoff through disposition. Values: [9 declared values](#buyerreturnlineitem-merchandise_status-values). |
| `modifiers` | Required | Array of [BuyerReturnLineItemModifier](../models/BuyerReturnLineItemModifier.md#buyerreturnlineitemmodifier) | Modifiers selected on the order line, with their prices. `modifiers[]`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemsmodifiers). |
| `name` | Required | string | Name of the item as sold. |
| `order_line_item_id` | Required | string | ID of the order line item the units come from. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. |
| `received_quantity` | Required | integer | Units that arrived. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `rejected_quantity` | Required | integer | Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `release_timing` | Optional | string | Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer | Units the request asked to return. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string | Outcome requested for this line when it was created. Absent when none was requested. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `resolution_status` | Required | string | Whether the value for this line's approved quantity has been delivered. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `resolved_quantity` | Required | integer | Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_id` | Required | string | ID of the Return this line belongs to. |
| `return_line_item_id` | Required | string | Unique identifier for this return line item, prefixed `retli_`. |
| `return_reason_handle` | Required | string | Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. |
| `return_reason_id` | Required | string | ID of the reason chosen for this line. |
| `return_reason_name` | Required | string | Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. |
| `return_required_quantity` | Required | integer | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: `int64`. |
| `return_resolution_ids` | Required | Array of string | IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. |
| `return_value` | Required | [ReturnLineItemValue](../models/ReturnLineItemValue.md#returnlineitemvalue) | Value of the line's units, fixed when the line was created: what the buyer paid for them, less what was already refunded or returned. The value of a return line: unit price, subtotal, discount, tax, and total. |
| `review_required_quantity` | Required | integer | Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Variant options selected for the item, such as size and color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the item as sold. |
| `status` | Required | string | Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Always empty for buyer credentials. maxItems: `0`. Items values: `"cancel"`, `"waive_inspection"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `variant_id` | Optional | string | ID of the catalog variant the item was sold from. |

#### BuyerReturnLineItem merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`

### BuyerReturnLineItem.bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BuyerReturnLineItem.eligibility fields 1

Field definitions: [BuyerReturnResponse.data.line_items[].eligibility](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemseligibility).

### BuyerReturnLineItem.modifiers[]

Field definitions: [BuyerReturnResponse.data.line_items[].modifiers[]](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemsmodifiers).

### BuyerReturnLineItem.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

