[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefund

An amount refunded back against an earlier line item adjustment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount refunded back against the adjustment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundLineItemAdjustmentRefund.md#refundlineitemadjustmentrefundamount_money). |
| `original_refund_line_item_adjustment_id` | Required | string | ID of the adjustment this amount was refunded against. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. |
| `refund_line_item_adjustment_refund_id` | Required | string | Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Example: `"rliar_01KEZF7C003HSYWXKXGJVRAKZD"`. |

### RefundLineItemAdjustmentRefund.amount_money

Amount refunded back against the adjustment. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

