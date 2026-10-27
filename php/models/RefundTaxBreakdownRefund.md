[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefund

The tax refunded for one tax breakdown on an order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string |  |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

