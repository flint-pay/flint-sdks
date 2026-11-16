[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemModifierAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation_basis` | Optional | string or null | Whether the line item was refunded by quantity or by amount. Values: `"quantity"`, `"amount"`. `allocation_basis`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributesInput.md#refundlineitemmodifierallocationpreviousattributesinputallocation_basis). |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Part of the line's refund that applies to this modifier. |
| `modifier_group_name` | Optional | string or null | Name of the modifier group the modifier belongs to. `modifier_group_name`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributesInput.md#refundlineitemmodifierallocationpreviousattributesinputmodifier_group_name). |
| `name` | Optional | string or null | Name of the selected modifier recorded on the order line item. `name`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputname). |
| `order_line_item_modifier_id` | Optional | string or null | ID of the modifier on the order line item that this part of the refund applies to. `order_line_item_modifier_id`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributesInput.md#refundlineitemmodifierallocationpreviousattributesinputorder_line_item_modifier_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `refund_line_item_modifier_allocation_id` | Optional | string or null | Unique identifier for this modifier's share of the refund, prefixed rlima_. `refund_line_item_modifier_allocation_id`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributesInput.md#refundlineitemmodifierallocationpreviousattributesinputrefund_line_item_modifier_allocation_id). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this selection appears in fulfillment details, recorded when selected. `show_on_fulfillment`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this selection appears on buyer receipts, recorded when selected. `show_on_receipt`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputshow_on_receipt). |
| `source_type` | Optional | string or null | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. `source_type`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputsource_type). |
| `text_value` | Optional | string or null | Buyer-entered text recorded for a text modifier selection. `text_value`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputtext_value). |

### RefundLineItemModifierAllocationPreviousAttributesInput.allocation_basis

### RefundLineItemModifierAllocationPreviousAttributesInput.allocation_basis variant 1

anyOf variant 1: Whether the line item was refunded by quantity or by amount..

- Value shape: string. Whether the line item was refunded by quantity or by amount. Values: `"quantity"`, `"amount"`.

### RefundLineItemModifierAllocationPreviousAttributesInput.allocation_basis variant 2

anyOf variant 2.

- Value shape: null. Whether the line item was refunded by quantity or by amount. 

### RefundLineItemModifierAllocationPreviousAttributesInput.modifier_group_name

### RefundLineItemModifierAllocationPreviousAttributesInput.modifier_group_name variant 1

anyOf variant 1: Name of the modifier group the modifier belongs to..

- Value shape: string. Name of the modifier group the modifier belongs to. 

### RefundLineItemModifierAllocationPreviousAttributesInput.modifier_group_name variant 2

anyOf variant 2.

- Value shape: null. Name of the modifier group the modifier belongs to. 

### RefundLineItemModifierAllocationPreviousAttributesInput.name

Declared alternatives: [OrderLineItemModifierPreviousAttributesInput.name](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputname).

### RefundLineItemModifierAllocationPreviousAttributesInput.order_line_item_modifier_id

### RefundLineItemModifierAllocationPreviousAttributesInput.order_line_item_modifier_id variant 1

anyOf variant 1: ID of the modifier on the order line item that this part of the refund applies to..

- Value shape: string. ID of the modifier on the order line item that this part of the refund applies to. ID of the modifier on the order line item that this part of the refund applies to. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. 

### RefundLineItemModifierAllocationPreviousAttributesInput.order_line_item_modifier_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier on the order line item that this part of the refund applies to. 

### RefundLineItemModifierAllocationPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### RefundLineItemModifierAllocationPreviousAttributesInput.refund_line_item_modifier_allocation_id

### RefundLineItemModifierAllocationPreviousAttributesInput.refund_line_item_modifier_allocation_id variant 1

anyOf variant 1: Unique identifier for this modifier's share of the refund, prefixed rlima_..

- Value shape: string. Unique identifier for this modifier's share of the refund, prefixed rlima_. Unique identifier for this modifier's share of the refund, prefixed rlima_. Example: `"rlima_01KEZF7C00SRZH0NHAKJB05NEM"`. 

### RefundLineItemModifierAllocationPreviousAttributesInput.refund_line_item_modifier_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this modifier's share of the refund, prefixed rlima_. 

### RefundLineItemModifierAllocationPreviousAttributesInput.show_on_fulfillment

Declared alternatives: [OrderLineItemModifierPreviousAttributesInput.show_on_fulfillment](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputshow_on_fulfillment).

### RefundLineItemModifierAllocationPreviousAttributesInput.show_on_receipt

Declared alternatives: [OrderLineItemModifierPreviousAttributesInput.show_on_receipt](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputshow_on_receipt).

### RefundLineItemModifierAllocationPreviousAttributesInput.source_type

Declared alternatives: [OrderLineItemModifierPreviousAttributesInput.source_type](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputsource_type).

### RefundLineItemModifierAllocationPreviousAttributesInput.text_value

Declared alternatives: [OrderLineItemModifierPreviousAttributesInput.text_value](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputtext_value).

