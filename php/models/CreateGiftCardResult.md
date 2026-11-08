[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardResult

The result of creating a gift card: the card, its transactions, any load and notification, and the code while it can still be recovered.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | The full current code. Omitted after the 24-hour recovery window or when this code has been replaced. |
| `code_recovery_expires_at` | Optional | string | When recovery of this code expires. Omitted when the code cannot be recovered. Format: `date-time`. |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | The gift card after the command. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card). |
| `gift_card_load` | Optional | [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | The load the command created. Top-level child of a gift card. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. `gift_card_load`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_load). |
| `gift_card_notification` | Optional | [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification) | The notification the command created because the request included `notification`. Omitted otherwise. A message sent to a gift card recipient. `gift_card_notification`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_notification). |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) | The transactions the command posted to the card. `gift_card_transactions[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions). |

### CreateGiftCardResult.gift_card

Field definitions: [CreateGiftCardResultResponse.data.gift_card](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card).

### CreateGiftCardResult.gift_card_load

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_load).

### CreateGiftCardResult.gift_card_notification

Field definitions: [CreateGiftCardResultResponse.data.gift_card_notification](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_notification).

### CreateGiftCardResult.gift_card_transactions[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_transactions[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions).

