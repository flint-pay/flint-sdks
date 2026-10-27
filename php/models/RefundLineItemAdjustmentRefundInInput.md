[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefundInInput

An amount to refund back against an earlier line item adjustment, identified by `refund_line_item_adjustment_id`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refund_line_item_adjustment_id` | Required | string | minLength: `1`. |

