[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustmentRefundIn

An amount to refund back against an earlier line item adjustment, identified by `refund_line_item_adjustment_id`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount to refund back. Above zero and at most the adjustment's `remaining_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundLineItemAdjustmentRefundIn.md#refundlineitemadjustmentrefundinamount_money). |
| `refund_line_item_adjustment_id` | Required | string | ID of an adjustment withheld by an earlier refund of this line, from `adjustments[].refund_line_item_adjustment_id`. minLength: `1`. Example: `"rlia_01KEZF7C00GA968004EWM2QQBC"`. |

### RefundLineItemAdjustmentRefundIn.amount_money

Amount to refund back. Above zero and at most the adjustment's `remaining_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

