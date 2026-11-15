[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAttemptGiftCardRedemption

A gift card redemption made as part of an order payment attempt, with the amount, tip, and gift card.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card redeemed. |
| `gift_card_redemption_id` | Required | string | ID of the redemption that holds this amount on the gift card. |
| `last4` | Required | string | Last four characters of the card's current code. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of `amount_money` that is a tip. Zero when the redemption carries no tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

