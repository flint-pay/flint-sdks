[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemModifierPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `modifier_group_name` | Optional | string or null | Name of the modifier group recorded when this selection was added to the order line item. `modifier_group_name`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmodifier_group_name). |
| `modifier_id` | Optional | string or null | Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. `modifier_id`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmodifier_id). |
| `name` | Optional | string or null | Name of the selected modifier recorded on the order line item. `name`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesname). |
| `order_line_item_modifier_id` | Optional | string or null | Stable identifier of the selected modifier on this order line item. `order_line_item_modifier_id`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesorder_line_item_modifier_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `show_on_fulfillment` | Optional | boolean or null | Whether this selection appears in fulfillment details, recorded when selected. `show_on_fulfillment`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesshow_on_fulfillment). |
| `show_on_receipt` | Optional | boolean or null | Whether this selection appears on buyer receipts, recorded when selected. `show_on_receipt`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesshow_on_receipt). |
| `source_type` | Optional | string or null | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. `source_type`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributessource_type). |
| `text` | Optional | [TextModifierRequestPreviousAttributes](../models/TextModifierRequestPreviousAttributes.md#textmodifierrequestpreviousattributes) or null | Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. |
| `text_value` | Optional | string or null | Buyer-entered text recorded for a text modifier selection. `text_value`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestext_value). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. `total_money`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributestotal_money). |
| `unit_price_delta_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount added to the item's unit price for each unit of this selection, recorded when selected. `unit_price_delta_money`: [declared alternatives](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesunit_price_delta_money). |

### OrderLineItemModifierPreviousAttributes.metadata

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata).

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

- Value shape: string. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. 

### OrderLineItemModifierPreviousAttributes.modifier_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. 

### OrderLineItemModifierPreviousAttributes.name

### OrderLineItemModifierPreviousAttributes.name variant 1

anyOf variant 1: Name of the selected modifier recorded on the order line item..

- Value shape: string. Name of the selected modifier recorded on the order line item. 

### OrderLineItemModifierPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the selected modifier recorded on the order line item. 

### OrderLineItemModifierPreviousAttributes.order_line_item_modifier_id

### OrderLineItemModifierPreviousAttributes.order_line_item_modifier_id variant 1

anyOf variant 1: Stable identifier of the selected modifier on this order line item..

- Value shape: string. Stable identifier of the selected modifier on this order line item. Stable identifier of the selected modifier on this order line item. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. 

### OrderLineItemModifierPreviousAttributes.order_line_item_modifier_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the selected modifier on this order line item. 

### OrderLineItemModifierPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### OrderLineItemModifierPreviousAttributes.show_on_fulfillment

### OrderLineItemModifierPreviousAttributes.show_on_fulfillment variant 1

anyOf variant 1: Whether this selection appears in fulfillment details, recorded when selected..

- Value shape: boolean. Whether this selection appears in fulfillment details, recorded when selected. 

### OrderLineItemModifierPreviousAttributes.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Whether this selection appears in fulfillment details, recorded when selected. 

### OrderLineItemModifierPreviousAttributes.show_on_receipt

### OrderLineItemModifierPreviousAttributes.show_on_receipt variant 1

anyOf variant 1: Whether this selection appears on buyer receipts, recorded when selected..

- Value shape: boolean. Whether this selection appears on buyer receipts, recorded when selected. 

### OrderLineItemModifierPreviousAttributes.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Whether this selection appears on buyer receipts, recorded when selected. 

### OrderLineItemModifierPreviousAttributes.source_type

### OrderLineItemModifierPreviousAttributes.source_type variant 1

anyOf variant 1: Whether the selection is a catalog list modifier or buyer-entered text..

- Value shape: string. Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`.

### OrderLineItemModifierPreviousAttributes.source_type variant 2

anyOf variant 2.

- Value shape: null. Whether the selection is a catalog list modifier or buyer-entered text. 

### OrderLineItemModifierPreviousAttributes.text_value

### OrderLineItemModifierPreviousAttributes.text_value variant 1

anyOf variant 1: Buyer-entered text recorded for a text modifier selection..

- Value shape: string. Buyer-entered text recorded for a text modifier selection. 

### OrderLineItemModifierPreviousAttributes.text_value variant 2

anyOf variant 2.

- Value shape: null. Buyer-entered text recorded for a text modifier selection. 

### OrderLineItemModifierPreviousAttributes.total_money

Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemModifierPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemModifierPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. 

### OrderLineItemModifierPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemModifierPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderLineItemModifierPreviousAttributes.unit_price_delta_money

Amount added to the item's unit price for each unit of this selection, recorded when selected.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineItemModifierPreviousAttributes.unit_price_delta_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineItemModifierPreviousAttributes.unit_price_delta_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount added to the item's unit price for each unit of this selection, recorded when selected. 

### OrderLineItemModifierPreviousAttributes.unit_price_delta_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderLineItemModifierPreviousAttributes.unit_price_delta_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

