[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CashOutGiftCardResult

The result of recording a gift card cash-out: the updated gift card and the transactions it created.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/GiftCardResponse.md#giftcardresponsedata). |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) |  |

### CashOutGiftCardResult.gift_card

Field definitions: [GiftCardResponse.data](../models/GiftCardResponse.md#giftcardresponsedata).

