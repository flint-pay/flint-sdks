[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderLineItemModifierInput

A modifier on a buyer's order line item, either a catalog modifier or entered text, with its quantity and price change.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_name` | Required | string | Name of the modifier group recorded when this selection was added to the order line item. |
| `modifier_id` | Optional | string | Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. |
| `name` | Required | string | Name of the selected modifier recorded on the order line item. |
| `order_line_item_modifier_id` | Required | string | Stable identifier of the selected modifier on this order line item. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean | Whether this selection appears in fulfillment details, recorded when selected. |
| `show_on_receipt` | Required | boolean | Whether this selection appears on buyer receipts, recorded when selected. |
| `source_type` | Required | string | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. |
| `text` | Optional | [TextModifierRequestInput](../models/TextModifierRequestInput.md#textmodifierrequestinput) | Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. Text a buyer entered for a text modifier group on an order line item. |
| `text_value` | Optional | string | Buyer-entered text recorded for a text modifier selection. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total price added by this selection. Multiplies unit_price_delta_money by the modifier quantity and, for per_item pricing, by the line item quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_delta_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount added to the item's unit price for each unit of this selection, recorded when selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

