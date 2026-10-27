[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueHoldInput

Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purchase_refund_allocation_id` | Required | string |  |
| `refund_id` | Required | string |  |
| `root_gift_card_id` | Required | string |  |
| `root_gift_card_load_id` | Required | string |  |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

