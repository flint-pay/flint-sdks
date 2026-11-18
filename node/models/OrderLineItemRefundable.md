[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemRefundable

Remaining refundable quantity and value of an order line, after prior refunds and order edit reservations.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Remaining discount component. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/OrderLineItemRefundable.md#orderlineitemrefundablediscount_money). |
| `gross_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Remaining subtotal before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `gross_money`: [field definitions](../models/OrderLineItemRefundable.md#orderlineitemrefundablegross_money). |
| `quantity` | Required | integer | Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Format: `int64`. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Remaining tax component. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/OrderLineItemRefundable.md#orderlineitemrefundabletax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Remaining target total after discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/OrderLineItemRefundable.md#orderlineitemrefundabletotal_money). |

### OrderLineItemRefundable.discount_money

Remaining discount component. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderLineItemRefundable.gross_money

Remaining subtotal before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderLineItemRefundable.tax_money

Remaining tax component. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderLineItemRefundable.total_money

Remaining target total after discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

