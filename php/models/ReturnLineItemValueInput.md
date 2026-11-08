[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemValueInput

The value of a return line: unit price, subtotal, discount, tax, and total.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Discount on the returned units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Subtotal of the returned units, before discount and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax on the returned units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one returned unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

