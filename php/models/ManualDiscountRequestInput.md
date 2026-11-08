[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ManualDiscountRequestInput

A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Fixed discount to apply to the order. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discount_class` | Optional | string | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `name` | Required | string | Name of the discount. minLength: `1`. |
| `order_charge_ids` | Optional | Array of string | IDs of the charges this discount reduces. Items: minLength: `1`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_line_item_ids` | Optional | Array of string | IDs of the order line items this discount applies to. Items: minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `scope` | Optional | string | Whether the discount applies to the whole order or to specific line items. Send `discount_class` instead of `scope`; a conflicting pair is refused. Values: `"order"`, `"line_item"`. |

