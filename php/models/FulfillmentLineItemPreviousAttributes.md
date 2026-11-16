[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null or null | Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. `bundle_component_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesbundle_component_id). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifier selections snapshotted from the order line for fulfillment. `modifiers`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers). |
| `order_id` | Optional | string or null | Order that owns the referenced line item. `order_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | Order line whose quantity is allocated to the fulfillment. `order_line_item_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. `quantity`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesquantity). |

### FulfillmentLineItemPreviousAttributes.bundle_component_id

### FulfillmentLineItemPreviousAttributes.bundle_component_id variant 1

anyOf variant 1: Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components..

- Value shape: (string or null). Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. 

### FulfillmentLineItemPreviousAttributes.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. 

### FulfillmentLineItemPreviousAttributes.modifiers

### FulfillmentLineItemPreviousAttributes.modifiers variant 1

anyOf variant 1: Modifier selections snapshotted from the order line for fulfillment..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). Modifier selections snapshotted from the order line for fulfillment. 

### FulfillmentLineItemPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifier selections snapshotted from the order line for fulfillment. 

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `modifier_group_name` | Optional | string or null | Name of the modifier group recorded when this selection was added to the order line item. `modifier_group_name`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmodifier_group_name). |
| `modifier_id` | Optional | string or null | Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. `modifier_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers-variant-1-fields-1modifier_id). |
| `name` | Optional | string or null | Name of the selected modifier recorded on the order line item. `name`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesname). |
| `order_line_item_modifier_id` | Optional | string or null | Stable identifier of the selected modifier on this order line item. `order_line_item_modifier_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers-variant-1-fields-1order_line_item_modifier_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this selection appears in fulfillment details, recorded when selected. `show_on_fulfillment`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this selection appears on buyer receipts, recorded when selected. `show_on_receipt`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_receipt). |
| `source_type` | Optional | string or null | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. `source_type`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributessource_type). |
| `text` | Optional | Alternative shapes (see declared variants) | Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. `text`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestext). |
| `text_value` | Optional | string or null | Buyer-entered text recorded for a text modifier selection. `text_value`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributestext_value). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount added to the item's unit price for each unit of this selection, recorded when selected. |

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.modifier_group_name

Declared alternatives: [OrderLineItemModifierPreviousAttributes.modifier_group_name](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmodifier_group_name).

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.modifier_id

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.modifier_id variant 1

anyOf variant 1: Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it..

- Value shape: string. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. 

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. 

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.name

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.name](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesname).

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.order_line_item_modifier_id

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.order_line_item_modifier_id variant 1

anyOf variant 1: Stable identifier of the selected modifier on this order line item..

- Value shape: string. Stable identifier of the selected modifier on this order line item. Stable identifier of the selected modifier on this order line item. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. 

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.order_line_item_modifier_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the selected modifier on this order line item. 

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.show_on_fulfillment

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.show_on_fulfillment](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_fulfillment).

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.show_on_receipt

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.show_on_receipt](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_receipt).

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.source_type

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.source_type](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributessource_type).

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.text

Declared alternatives: [OrderLineItemModifierPreviousAttributes.text](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestext).

### FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1.text_value

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.text_value](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributestext_value).

### FulfillmentLineItemPreviousAttributes.order_id

### FulfillmentLineItemPreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns the referenced line item..

- Value shape: string. Order that owns the referenced line item. 

### FulfillmentLineItemPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the referenced line item. 

### FulfillmentLineItemPreviousAttributes.order_line_item_id

### FulfillmentLineItemPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: Order line whose quantity is allocated to the fulfillment..

- Value shape: string. Order line whose quantity is allocated to the fulfillment. 

### FulfillmentLineItemPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Order line whose quantity is allocated to the fulfillment. 

### FulfillmentLineItemPreviousAttributes.quantity

### FulfillmentLineItemPreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: `int64`. 

### FulfillmentLineItemPreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. 

