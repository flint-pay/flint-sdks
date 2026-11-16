[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemModifierAllocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation_basis` | Optional | string or null | Whether the line item was refunded by quantity or by amount. Values: `"quantity"`, `"amount"`. `allocation_basis`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesallocation_basis). |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the line's refund that applies to this modifier. |
| `modifier_group_name` | Optional | string or null | Name of the modifier group the modifier belongs to. `modifier_group_name`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesmodifier_group_name). |
| `name` | Optional | string or null | Name of the selected modifier recorded on the order line item. `name`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesname). |
| `order_line_item_modifier_id` | Optional | string or null | ID of the modifier on the order line item that this part of the refund applies to. `order_line_item_modifier_id`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesorder_line_item_modifier_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `refund_line_item_modifier_allocation_id` | Optional | string or null | Unique identifier for this modifier's share of the refund, prefixed rlima_. `refund_line_item_modifier_allocation_id`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesrefund_line_item_modifier_allocation_id). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this selection appears in fulfillment details, recorded when selected. `show_on_fulfillment`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this selection appears on buyer receipts, recorded when selected. `show_on_receipt`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_receipt). |
| `source_type` | Optional | string or null | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. `source_type`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributessource_type). |
| `text_value` | Optional | string or null | Buyer-entered text recorded for a text modifier selection. `text_value`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributestext_value). |

### RefundLineItemModifierAllocationPreviousAttributes.allocation_basis

### RefundLineItemModifierAllocationPreviousAttributes.allocation_basis variant 1

anyOf variant 1: Whether the line item was refunded by quantity or by amount..

- Value shape: string. Whether the line item was refunded by quantity or by amount. Values: `"quantity"`, `"amount"`.

### RefundLineItemModifierAllocationPreviousAttributes.allocation_basis variant 2

anyOf variant 2.

- Value shape: null. Whether the line item was refunded by quantity or by amount. 

### RefundLineItemModifierAllocationPreviousAttributes.modifier_group_name

### RefundLineItemModifierAllocationPreviousAttributes.modifier_group_name variant 1

anyOf variant 1: Name of the modifier group the modifier belongs to..

- Value shape: string. Name of the modifier group the modifier belongs to. 

### RefundLineItemModifierAllocationPreviousAttributes.modifier_group_name variant 2

anyOf variant 2.

- Value shape: null. Name of the modifier group the modifier belongs to. 

### RefundLineItemModifierAllocationPreviousAttributes.name

### RefundLineItemModifierAllocationPreviousAttributes.name variant 1

anyOf variant 1: Name of the selected modifier recorded on the order line item..

- Value shape: string. Name of the selected modifier recorded on the order line item. 

### RefundLineItemModifierAllocationPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the selected modifier recorded on the order line item. 

### RefundLineItemModifierAllocationPreviousAttributes.order_line_item_modifier_id

### RefundLineItemModifierAllocationPreviousAttributes.order_line_item_modifier_id variant 1

anyOf variant 1: ID of the modifier on the order line item that this part of the refund applies to..

- Value shape: string. ID of the modifier on the order line item that this part of the refund applies to. 

### RefundLineItemModifierAllocationPreviousAttributes.order_line_item_modifier_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier on the order line item that this part of the refund applies to. 

### RefundLineItemModifierAllocationPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### RefundLineItemModifierAllocationPreviousAttributes.refund_line_item_modifier_allocation_id

### RefundLineItemModifierAllocationPreviousAttributes.refund_line_item_modifier_allocation_id variant 1

anyOf variant 1: Unique identifier for this modifier's share of the refund, prefixed rlima_..

- Value shape: string. Unique identifier for this modifier's share of the refund, prefixed rlima_. 

### RefundLineItemModifierAllocationPreviousAttributes.refund_line_item_modifier_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this modifier's share of the refund, prefixed rlima_. 

### RefundLineItemModifierAllocationPreviousAttributes.show_on_fulfillment

### RefundLineItemModifierAllocationPreviousAttributes.show_on_fulfillment variant 1

anyOf variant 1: Whether this selection appears in fulfillment details, recorded when selected..

- Value shape: boolean. Whether this selection appears in fulfillment details, recorded when selected. 

### RefundLineItemModifierAllocationPreviousAttributes.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Whether this selection appears in fulfillment details, recorded when selected. 

### RefundLineItemModifierAllocationPreviousAttributes.show_on_receipt

### RefundLineItemModifierAllocationPreviousAttributes.show_on_receipt variant 1

anyOf variant 1: Whether this selection appears on buyer receipts, recorded when selected..

- Value shape: boolean. Whether this selection appears on buyer receipts, recorded when selected. 

### RefundLineItemModifierAllocationPreviousAttributes.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Whether this selection appears on buyer receipts, recorded when selected. 

### RefundLineItemModifierAllocationPreviousAttributes.source_type

### RefundLineItemModifierAllocationPreviousAttributes.source_type variant 1

anyOf variant 1: Whether the selection is a catalog list modifier or buyer-entered text..

- Value shape: string. Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`.

### RefundLineItemModifierAllocationPreviousAttributes.source_type variant 2

anyOf variant 2.

- Value shape: null. Whether the selection is a catalog list modifier or buyer-entered text. 

### RefundLineItemModifierAllocationPreviousAttributes.text_value

### RefundLineItemModifierAllocationPreviousAttributes.text_value variant 1

anyOf variant 1: Buyer-entered text recorded for a text modifier selection..

- Value shape: string. Buyer-entered text recorded for a text modifier selection. 

### RefundLineItemModifierAllocationPreviousAttributes.text_value variant 2

anyOf variant 2.

- Value shape: null. Buyer-entered text recorded for a text modifier selection. 

