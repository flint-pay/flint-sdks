[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundInput

The tax refunded for one tax breakdown on an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string |  |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

