[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AdjustGiftCardBalanceResult

The result of adjusting a gift card's value: the updated gift card, the transactions the adjustment created, and a gift card load when one was made.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/GiftCardResponse.md#giftcardresponsedata). |
| `gift_card_load` | Optional | [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) |  |

### AdjustGiftCardBalanceResult.gift_card

Field definitions: [GiftCardResponse.data](../models/GiftCardResponse.md#giftcardresponsedata).

