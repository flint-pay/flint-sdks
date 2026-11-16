[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemModifierPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata). |
| `modifier_group_name` | Optional | string or null | Name of the modifier group recorded when this selection was added to the order line item. `modifier_group_name`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmodifier_group_name). |
| `modifier_id` | Optional | string or null | Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. `modifier_id`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmodifier_id). |
| `name` | Optional | string or null | Name of the selected modifier recorded on the order line item. `name`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesname). |
| `order_line_item_modifier_id` | Optional | string or null | Stable identifier of the selected modifier on this order line item. `order_line_item_modifier_id`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesorder_line_item_modifier_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this selection appears in fulfillment details, recorded when selected. `show_on_fulfillment`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this selection appears on buyer receipts, recorded when selected. `show_on_receipt`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_receipt). |
| `source_type` | Optional | string or null | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. `source_type`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributessource_type). |
| `text` | Optional | Alternative shapes (see declared variants) | Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. `text`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestext). |
| `text_value` | Optional | string or null | Buyer-entered text recorded for a text modifier selection. `text_value`: [declared alternatives](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributestext_value). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount added to the item's unit price for each unit of this selection, recorded when selected. |

### OrderLineItemModifierPreviousAttributes.metadata

### OrderLineItemModifierPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: maxLength: `4096`. 

### OrderLineItemModifierPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. 

### OrderLineItemModifierPreviousAttributes.modifier_group_name

### OrderLineItemModifierPreviousAttributes.modifier_group_name variant 1

anyOf variant 1: Name of the modifier group recorded when this selection was added to the order line item..

- Value shape: string. Name of the modifier group recorded when this selection was added to the order line item. 

### OrderLineItemModifierPreviousAttributes.modifier_group_name variant 2

anyOf variant 2.

- Value shape: null. Name of the modifier group recorded when this selection was added to the order line item. 

### OrderLineItemModifierPreviousAttributes.modifier_id

### OrderLineItemModifierPreviousAttributes.modifier_id variant 1

anyOf variant 1: Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it..

- Value shape: string. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. 

### OrderLineItemModifierPreviousAttributes.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. 

### OrderLineItemModifierPreviousAttributes.name

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.name](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesname).

### OrderLineItemModifierPreviousAttributes.order_line_item_modifier_id

### OrderLineItemModifierPreviousAttributes.order_line_item_modifier_id variant 1

anyOf variant 1: Stable identifier of the selected modifier on this order line item..

- Value shape: string. Stable identifier of the selected modifier on this order line item. 

### OrderLineItemModifierPreviousAttributes.order_line_item_modifier_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the selected modifier on this order line item. 

### OrderLineItemModifierPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### OrderLineItemModifierPreviousAttributes.show_on_fulfillment

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.show_on_fulfillment](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_fulfillment).

### OrderLineItemModifierPreviousAttributes.show_on_receipt

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.show_on_receipt](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributesshow_on_receipt).

### OrderLineItemModifierPreviousAttributes.source_type

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.source_type](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributessource_type).

### OrderLineItemModifierPreviousAttributes.text

Selected text group and buyer-entered value. Read an inline text group through its owning modifier set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Conditional | string or null | Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. `modifier_group_id`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestext-variant-1modifier_group_id). |
| `value` | Conditional | string or null | Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. `value`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestext-variant-1value). |

### OrderLineItemModifierPreviousAttributes.text variant 1

anyOf TextModifierRequestPreviousAttributes.

- Optional: `modifier_group_id`, `value`.

### OrderLineItemModifierPreviousAttributes.text variant 2

anyOf variant 2.

- Undeclared: `modifier_group_id`, `value`.
- Value shape: null. Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. 

### OrderLineItemModifierPreviousAttributes.text variant 1.modifier_group_id

### OrderLineItemModifierPreviousAttributes.text variant 1.modifier_group_id variant 1

anyOf variant 1: Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it..

- Value shape: string. Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. minLength: `1`. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### OrderLineItemModifierPreviousAttributes.text variant 1.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. 

### OrderLineItemModifierPreviousAttributes.text variant 1.value

### OrderLineItemModifierPreviousAttributes.text variant 1.value variant 1

anyOf variant 1: Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true..

- Value shape: string. Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. minLength: `1`. 

### OrderLineItemModifierPreviousAttributes.text variant 1.value variant 2

anyOf variant 2.

- Value shape: null. Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8 bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed only when the group's `text.multiline` is true. 

### OrderLineItemModifierPreviousAttributes.text_value

Declared alternatives: [RefundLineItemModifierAllocationPreviousAttributes.text_value](../models/RefundLineItemModifierAllocationPreviousAttributes.md#refundlineitemmodifierallocationpreviousattributestext_value).

