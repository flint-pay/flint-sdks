[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemRefundableInput

Remaining refundable quantity and value of an order line, after prior refunds and order edit reservations.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Remaining discount component. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gross_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Remaining subtotal before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `quantity` | Required | integer | Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Format: `int64`. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Remaining tax component. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Remaining target total after discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

