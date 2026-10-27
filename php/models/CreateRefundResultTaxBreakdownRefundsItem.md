[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResultTaxBreakdownRefundsItem

The tax refunded for one tax breakdown on an order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string |  |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [CreateRefundResultTaxBreakdownRefundsItemTaxMoney](../models/CreateRefundResultTaxBreakdownRefundsItemTaxMoney.md#createrefundresulttaxbreakdownrefundsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

