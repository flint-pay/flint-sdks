[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefund

The tax refunded for one tax breakdown on an order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string | ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. |
| `tax_breakdown_id` | Required | string | ID of the tax breakdown (one jurisdiction's tax) this entry reverses. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax reversed for this breakdown. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

