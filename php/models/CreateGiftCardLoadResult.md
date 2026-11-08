[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardLoadResult

The result of loading a gift card: the updated gift card, the gift card load, and the transactions it created.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | The gift card after the command. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card). |
| `gift_card_load` | Required | [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | The load the command created. Top-level child of a gift card. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. `gift_card_load`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_load). |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) | The transactions the command posted to the card. `gift_card_transactions[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions). |

### CreateGiftCardLoadResult.gift_card

Field definitions: [CreateGiftCardResultResponse.data.gift_card](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card).

### CreateGiftCardLoadResult.gift_card_load

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_load).

### CreateGiftCardLoadResult.gift_card_transactions[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_transactions[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions).

