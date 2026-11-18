[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemModifierAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation_basis` | Optional | string or null | Whether the line item was refunded by quantity or by amount. Values: `"quantity"`, `"amount"`. `allocation_basis`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesallocation_basis). |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Part of the line's refund that applies to this modifier. `amount_money`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesamount_money). |
| `modifier_group_name` | Optional | string or null | Name of the modifier group the modifier belongs to. `modifier_group_name`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesmodifier_group_name). |
| `name` | Optional | string or null | Name of the selected modifier recorded on the order line item. `name`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesname). |
| `order_line_item_modifier_id` | Optional | string or null | ID of the modifier on the order line item that this part of the refund applies to. `order_line_item_modifier_id`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesorder_line_item_modifier_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `refund_line_item_modifier_allocation_id` | Optional | string or null | Unique identifier for this modifier's share of the refund, prefixed rlima_. `refund_line_item_modifier_allocation_id`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesrefund_line_item_modifier_allocation_id). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this selection appears in fulfillment details, recorded when selected. `show_on_fulfillment`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this selection appears on buyer receipts, recorded when selected. `show_on_receipt`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesshow_on_receipt). |
| `source_type` | Optional | string or null | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. `source_type`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributessource_type). |
| `text_value` | Optional | string or null | Buyer-entered text recorded for a text modifier selection. `text_value`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestext_value). |

### RefundLineItemModifierAllocationPreviousAttributes.allocation_basis

### RefundLineItemModifierAllocationPreviousAttributes.allocation_basis variant 1

anyOf variant 1: Whether the line item was refunded by quantity or by amount..

- Value shape: string. Whether the line item was refunded by quantity or by amount. Values: `"quantity"`, `"amount"`.

### RefundLineItemModifierAllocationPreviousAttributes.allocation_basis variant 2

anyOf variant 2.

- Value shape: null. Whether the line item was refunded by quantity or by amount. 

### RefundLineItemModifierAllocationPreviousAttributes.amount_money

Part of the line's refund that applies to this modifier.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### RefundLineItemModifierAllocationPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### RefundLineItemModifierAllocationPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Part of the line's refund that applies to this modifier. 

### RefundLineItemModifierAllocationPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### RefundLineItemModifierAllocationPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### RefundLineItemModifierAllocationPreviousAttributes.modifier_group_name

### RefundLineItemModifierAllocationPreviousAttributes.modifier_group_name variant 1

anyOf variant 1: Name of the modifier group the modifier belongs to..

- Value shape: string. Name of the modifier group the modifier belongs to. 

### RefundLineItemModifierAllocationPreviousAttributes.modifier_group_name variant 2

anyOf variant 2.

- Value shape: null. Name of the modifier group the modifier belongs to. 

### RefundLineItemModifierAllocationPreviousAttributes.name

Declared alternatives: [OrderLineItemModifierPreviousAttributes.name](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesname).

### RefundLineItemModifierAllocationPreviousAttributes.order_line_item_modifier_id

### RefundLineItemModifierAllocationPreviousAttributes.order_line_item_modifier_id variant 1

anyOf variant 1: ID of the modifier on the order line item that this part of the refund applies to..

- Value shape: string. ID of the modifier on the order line item that this part of the refund applies to. ID of the modifier on the order line item that this part of the refund applies to. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. 

### RefundLineItemModifierAllocationPreviousAttributes.order_line_item_modifier_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier on the order line item that this part of the refund applies to. 

### RefundLineItemModifierAllocationPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### RefundLineItemModifierAllocationPreviousAttributes.refund_line_item_modifier_allocation_id

### RefundLineItemModifierAllocationPreviousAttributes.refund_line_item_modifier_allocation_id variant 1

anyOf variant 1: Unique identifier for this modifier's share of the refund, prefixed rlima_..

- Value shape: string. Unique identifier for this modifier's share of the refund, prefixed rlima_. Unique identifier for this modifier's share of the refund, prefixed rlima_. Example: `"rlima_01KEZF7C00SRZH0NHAKJB05NEM"`. 

### RefundLineItemModifierAllocationPreviousAttributes.refund_line_item_modifier_allocation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this modifier's share of the refund, prefixed rlima_. 

### RefundLineItemModifierAllocationPreviousAttributes.show_on_fulfillment

Declared alternatives: [OrderLineItemModifierPreviousAttributes.show_on_fulfillment](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesshow_on_fulfillment).

### RefundLineItemModifierAllocationPreviousAttributes.show_on_receipt

Declared alternatives: [OrderLineItemModifierPreviousAttributes.show_on_receipt](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesshow_on_receipt).

### RefundLineItemModifierAllocationPreviousAttributes.source_type

Declared alternatives: [OrderLineItemModifierPreviousAttributes.source_type](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributessource_type).

### RefundLineItemModifierAllocationPreviousAttributes.text_value

Declared alternatives: [OrderLineItemModifierPreviousAttributes.text_value](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestext_value).

