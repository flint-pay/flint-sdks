[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CashOutGiftCardResult

The result of recording a gift card cash-out: the updated gift card and the transactions it created.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | The gift card after the cash-out. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/CashOutGiftCardResult.md#cashoutgiftcardresultgift_card). |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) | The transactions the cash-out posted to the card. `gift_card_transactions[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions). |

### CashOutGiftCardResult.gift_card

The gift card after the cash-out. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

Field definitions: [shared fields](GiftCardResponse.md#giftcardresponsedata).

### CashOutGiftCardResult.gift_card.restrictions[]

Field definitions: [GiftCardResponse.data.restrictions[]](../models/GiftCardResponse.md#giftcardresponsedatarestrictions).

### CashOutGiftCardResult.gift_card_transactions[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_transactions[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions).

