[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductPriceRange

The lowest and highest unit prices across a product's variants.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `max_unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Highest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `min_unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Lowest unit price among the product's active variants. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

