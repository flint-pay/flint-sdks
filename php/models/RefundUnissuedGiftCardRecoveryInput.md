[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundUnissuedGiftCardRecoveryInput

Details of a gift card purchase refunded before the card was issued, including the amounts recovered.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `payment_intent_id` | Required | string |  |
| `purchase_refund_allocation_id` | Required | string |  |
| `returned_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settlement_allocation_id` | Required | string |  |
| `source_pending_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source_remaining_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

