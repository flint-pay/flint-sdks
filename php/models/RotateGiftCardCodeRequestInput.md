[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotateGiftCardCodeRequestInput

The request body for: Replace a gift card code.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `notification` | Optional | [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput) | Explicitly send or schedule the replacement code through private recipient access. Requires commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. |

