[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotateGiftCardCodeRequest

The request body for: Replace a gift card code.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `notification` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Explicitly send or schedule the replacement code through private recipient access. Requires commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. `notification`: [field definitions](../models/RotateGiftCardCodeRequest.md#rotategiftcardcoderequestnotification). |

### RotateGiftCardCodeRequest.notification

Explicitly send or schedule the replacement code through private recipient access. Requires commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.

Field definitions: [shared fields](GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput).

