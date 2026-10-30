[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotateGiftCardCodeResult

The gift card after its code was rotated, with the new `code` while it can be recovered and the notification sent.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | The full current code. Omitted after the 24-hour recovery window or when this code has been replaced. |
| `code_recovery_expires_at` | Optional | string | When recovery of this code expires. Omitted when the code cannot be recovered. Format: `date-time`. |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/GiftCardResponse.md#giftcardresponsedata). |
| `gift_card_notification` | Optional | [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification) | A message sent to a gift card recipient. |

### RotateGiftCardCodeResult.gift_card

Field definitions: [GiftCardResponse.data](../models/GiftCardResponse.md#giftcardresponsedata).

