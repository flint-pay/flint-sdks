[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundUnissuedGiftCardRecovery

Details of a gift card purchase refunded before the card was issued, including the amounts recovered.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `payment_intent_id` | Required | string |  |
| `purchase_refund_allocation_id` | Required | string |  |
| `returned_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settlement_allocation_id` | Required | string |  |
| `source_pending_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source_remaining_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

