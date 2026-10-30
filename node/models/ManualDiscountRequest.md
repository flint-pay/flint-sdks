[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ManualDiscountRequest

A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed discount to apply to the order. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/ManualDiscountRequest.md#manualdiscountrequestamount_money). |
| `discount_class` | Optional | string | Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `name` | Required | string | minLength: `1`. |
| `order_charge_ids` | Optional | Array of string | Items: minLength: `1`. |
| `order_line_item_ids` | Optional | Array of string | Items: minLength: `1`. |
| `scope` | Optional | string | Values: `"order"`, `"line_item"`. |

### ManualDiscountRequest.amount_money

Fixed discount to apply to the order. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

