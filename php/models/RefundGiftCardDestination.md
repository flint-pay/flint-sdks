[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundGiftCardDestination

A gift card that received part of a refund, with the amount credited.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount credited to this gift card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card that received the value. |

