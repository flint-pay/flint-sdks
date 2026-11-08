[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefundInput

An amount refunded back against an earlier line item adjustment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount refunded back against the adjustment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `original_refund_line_item_adjustment_id` | Required | string | ID of the adjustment this amount was refunded against. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. |
| `refund_line_item_adjustment_refund_id` | Required | string | Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Example: `"rliar_01KEZF7C003HSYWXKXGJVRAKZD"`. |

