[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefund

An amount refunded back against an earlier line item adjustment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `original_refund_line_item_adjustment_id` | Required | string |  |
| `refund_line_item_adjustment_refund_id` | Required | string |  |

