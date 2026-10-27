[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ManualDiscountRequest

A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `discount_class` | Optional | string | Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `name` | Required | string | minLength: `1`. |
| `order_charge_ids` | Optional | Array of string | Items: minLength: `1`. |
| `order_line_item_ids` | Optional | Array of string | Items: minLength: `1`. |
| `scope` | Optional | string | Values: `"order"`, `"line_item"`. |

### ManualDiscountRequest.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

