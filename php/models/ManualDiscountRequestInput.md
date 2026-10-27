[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ManualDiscountRequestInput

A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discount_class` | Optional | string | Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `name` | Required | string | minLength: `1`. |
| `order_charge_ids` | Optional | Array of string | Items: minLength: `1`. |
| `order_line_item_ids` | Optional | Array of string | Items: minLength: `1`. |
| `scope` | Optional | string | Values: `"order"`, `"line_item"`. |

