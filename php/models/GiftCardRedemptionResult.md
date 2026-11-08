[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionResult

Result of redeeming a gift card: the updated gift card, the redemption, and the resulting transactions.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | The gift card after the command. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card). |
| `gift_card_redemption` | Required | [GiftCardRedemption](../models/GiftCardRedemption.md#giftcardredemption) | The redemption the command created or changed. Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `succeeded` and increase `refunded_money`. `gift_card_redemption`: [field definitions](../models/GiftCardRedemptionResult.md#giftcardredemptionresultgift_card_redemption). |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) | The transactions the command posted to the card. `gift_card_transactions[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions). |

### GiftCardRedemptionResult.gift_card

Field definitions: [CreateGiftCardResultResponse.data.gift_card](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card).

### GiftCardRedemptionResult.gift_card_redemption

The redemption the command created or changed. Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `succeeded` and increase `refunded_money`.

Field definitions: [shared fields](GiftCardRedemptionResponse.md#giftcardredemptionresponsedata).

### GiftCardRedemptionResult.gift_card_transactions[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_transactions[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions).

