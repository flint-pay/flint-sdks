[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAutomaticRefund

The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount allocated to the refunded portion. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of the refunded portion before discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on the refunded portion. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the refunded portion comes to before adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

