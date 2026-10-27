[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItem

The tax refunded for one tax breakdown on an order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string |  |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItemTaxMoney](../models/CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItemTaxMoney.md#createrefundresultlineitemallocationsitemtaxbreakdownrefundsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

