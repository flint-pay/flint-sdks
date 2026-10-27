[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnLineItemModifier

A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Required | object | maxProperties: `0`. |
| `modifier_group_name` | Required | string |  |
| `name` | Required | string |  |
| `pricing_scope` | Required | string | Values: `"per_item"`, `"per_line"`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean |  |
| `show_on_receipt` | Required | boolean |  |
| `text_value` | Optional | string |  |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `unit_price_delta_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_delta_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### BuyerReturnLineItemModifier.total_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### BuyerReturnLineItemModifier.unit_price_delta_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

