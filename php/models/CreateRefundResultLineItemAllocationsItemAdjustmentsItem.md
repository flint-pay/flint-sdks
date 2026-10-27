[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResultLineItemAllocationsItemAdjustmentsItem

An adjustment on a refunded line item, such as a restocking fee or withheld amount, with how much has been refunded and what remains.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Required | [CreateRefundResultLineItemAllocationsItemAdjustmentsItemAmountMoney](../models/CreateRefundResultLineItemAllocationsItemAdjustmentsItemAmountMoney.md#createrefundresultlineitemallocationsitemadjustmentsitemamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applies_to` | Required | string | Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Required | [CreateRefundResultLineItemAllocationsItemAdjustmentsItemReason](../models/CreateRefundResultLineItemAllocationsItemAdjustmentsItemReason.md#createrefundresultlineitemallocationsitemadjustmentsitemreason) | The reason recorded for a refund line item adjustment, as a `code` with an optional description. |
| `refund_line_item_adjustment_id` | Required | string |  |
| `refunded_money` | Required | [CreateRefundResultLineItemAllocationsItemAdjustmentsItemRefundedMoney](../models/CreateRefundResultLineItemAllocationsItemAdjustmentsItemRefundedMoney.md#createrefundresultlineitemallocationsitemadjustmentsitemrefundedmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remaining_money` | Required | [CreateRefundResultLineItemAllocationsItemAdjustmentsItemRemainingMoney](../models/CreateRefundResultLineItemAllocationsItemAdjustmentsItemRemainingMoney.md#createrefundresultlineitemallocationsitemadjustmentsitemremainingmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

