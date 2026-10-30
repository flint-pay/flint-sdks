[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardResult

The result of creating a gift card: the card, its transactions, any load and notification, and the code while it can still be recovered.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | The full current code. Omitted after the 24-hour recovery window or when this code has been replaced. |
| `code_recovery_expires_at` | Optional | string | When recovery of this code expires. Omitted when the code cannot be recovered. Format: `date-time`. |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/GiftCardResponse.md#giftcardresponsedata). |
| `gift_card_load` | Optional | [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. |
| `gift_card_notification` | Optional | [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification) | A message sent to a gift card recipient. |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) |  |

### CreateGiftCardResult.gift_card

Field definitions: [GiftCardResponse.data](../models/GiftCardResponse.md#giftcardresponsedata).

