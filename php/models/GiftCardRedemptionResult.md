[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionResult

Result of redeeming a gift card: the updated gift card, the redemption, and the resulting transactions.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/GiftCardsGetResponse200.md#giftcardsgetresponse200data). |
| `gift_card_redemption` | Required | [GiftCardRedemption](../models/GiftCardRedemption.md#giftcardredemption) | Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`. |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) |  |

### GiftCardRedemptionResult.gift_card

Field definitions: [GiftCardsGetResponse200.data](../models/GiftCardsGetResponse200.md#giftcardsgetresponse200data).

