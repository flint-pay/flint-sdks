[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemRefundable

Remaining refundable quantity and value of an order line, after prior refunds and order edit reservations.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Remaining discount component. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gross_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Remaining subtotal before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `quantity` | Required | integer | Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Format: `int64`. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Remaining tax component. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Remaining target total after discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

