[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductPriceRangeInput

The lowest and highest unit prices across a product's variants.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Highest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Lowest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

