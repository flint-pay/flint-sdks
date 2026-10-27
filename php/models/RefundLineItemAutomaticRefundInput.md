[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAutomaticRefundInput

The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

