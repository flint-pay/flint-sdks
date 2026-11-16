[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemModifierPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `modifier_group_name` | Optional | string or null | Name of the modifier group recorded when this selection was added to the order line item. `modifier_group_name`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputmodifier_group_name). |
| `modifier_id` | Optional | string or null | Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. `modifier_id`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputmodifier_id). |
| `name` | Optional | string or null | Name of the selected modifier recorded on the order line item. `name`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputname). |
| `order_line_item_modifier_id` | Optional | string or null | Stable identifier of the selected modifier on this order line item. `order_line_item_modifier_id`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputorder_line_item_modifier_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this selection appears in fulfillment details, recorded when selected. `show_on_fulfillment`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this selection appears on buyer receipts, recorded when selected. `show_on_receipt`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputshow_on_receipt). |
| `source_type` | Optional | string or null | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. `source_type`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputsource_type). |
| `text` | Optional | [TextModifierRequestPreviousAttributesInput](../models/TextModifierRequestPreviousAttributesInput.md#textmodifierrequestpreviousattributesinput) or null | Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. |
| `text_value` | Optional | string or null | Buyer-entered text recorded for a text modifier selection. `text_value`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinputtext_value). |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount added to the item's unit price for each unit of this selection, recorded when selected. |

### OrderLineItemModifierPreviousAttributesInput.modifier_group_name

### OrderLineItemModifierPreviousAttributesInput.modifier_group_name variant 1

anyOf variant 1: Name of the modifier group recorded when this selection was added to the order line item..

- Value shape: string. Name of the modifier group recorded when this selection was added to the order line item. 

### OrderLineItemModifierPreviousAttributesInput.modifier_group_name variant 2

anyOf variant 2.

- Value shape: null. Name of the modifier group recorded when this selection was added to the order line item. 

### OrderLineItemModifierPreviousAttributesInput.modifier_id

### OrderLineItemModifierPreviousAttributesInput.modifier_id variant 1

anyOf variant 1: Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it..

- Value shape: string. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. 

### OrderLineItemModifierPreviousAttributesInput.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. 

### OrderLineItemModifierPreviousAttributesInput.name

### OrderLineItemModifierPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the selected modifier recorded on the order line item..

- Value shape: string. Name of the selected modifier recorded on the order line item. 

### OrderLineItemModifierPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the selected modifier recorded on the order line item. 

### OrderLineItemModifierPreviousAttributesInput.order_line_item_modifier_id

### OrderLineItemModifierPreviousAttributesInput.order_line_item_modifier_id variant 1

anyOf variant 1: Stable identifier of the selected modifier on this order line item..

- Value shape: string. Stable identifier of the selected modifier on this order line item. Stable identifier of the selected modifier on this order line item. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. 

### OrderLineItemModifierPreviousAttributesInput.order_line_item_modifier_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the selected modifier on this order line item. 

### OrderLineItemModifierPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### OrderLineItemModifierPreviousAttributesInput.show_on_fulfillment

### OrderLineItemModifierPreviousAttributesInput.show_on_fulfillment variant 1

anyOf variant 1: Whether this selection appears in fulfillment details, recorded when selected..

- Value shape: boolean. Whether this selection appears in fulfillment details, recorded when selected. 

### OrderLineItemModifierPreviousAttributesInput.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Whether this selection appears in fulfillment details, recorded when selected. 

### OrderLineItemModifierPreviousAttributesInput.show_on_receipt

### OrderLineItemModifierPreviousAttributesInput.show_on_receipt variant 1

anyOf variant 1: Whether this selection appears on buyer receipts, recorded when selected..

- Value shape: boolean. Whether this selection appears on buyer receipts, recorded when selected. 

### OrderLineItemModifierPreviousAttributesInput.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Whether this selection appears on buyer receipts, recorded when selected. 

### OrderLineItemModifierPreviousAttributesInput.source_type

### OrderLineItemModifierPreviousAttributesInput.source_type variant 1

anyOf variant 1: Whether the selection is a catalog list modifier or buyer-entered text..

- Value shape: string. Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`.

### OrderLineItemModifierPreviousAttributesInput.source_type variant 2

anyOf variant 2.

- Value shape: null. Whether the selection is a catalog list modifier or buyer-entered text. 

### OrderLineItemModifierPreviousAttributesInput.text_value

### OrderLineItemModifierPreviousAttributesInput.text_value variant 1

anyOf variant 1: Buyer-entered text recorded for a text modifier selection..

- Value shape: string. Buyer-entered text recorded for a text modifier selection. 

### OrderLineItemModifierPreviousAttributesInput.text_value variant 2

anyOf variant 2.

- Value shape: null. Buyer-entered text recorded for a text modifier selection. 

