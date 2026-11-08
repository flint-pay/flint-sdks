[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## QuantityPriceBreak

A net unit price that applies when one catalog line reaches minimum_quantity.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `minimum_quantity` | Required | integer | Minimum whole-number quantity on one line for this price to apply; fractional quantities are not supported. Must strictly increase between entries. Format: `int64`. minimum: `2`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

