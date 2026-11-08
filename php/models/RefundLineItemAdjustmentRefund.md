[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefund

An amount refunded back against an earlier line item adjustment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount refunded back against the adjustment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `original_refund_line_item_adjustment_id` | Required | string | ID of the adjustment this amount was refunded against. |
| `refund_line_item_adjustment_refund_id` | Required | string | Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. |

