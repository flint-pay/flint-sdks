[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionResultInput

Result of redeeming a gift card: the updated gift card, the redemption, and the resulting transactions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCardInput](../models/GiftCardInput.md#giftcardinput) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. |
| `gift_card_redemption` | Required | [GiftCardRedemptionInput](../models/GiftCardRedemptionInput.md#giftcardredemptioninput) | Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`. |
| `gift_card_transactions` | Required | Array of [GiftCardTransactionInput](../models/GiftCardTransactionInput.md#giftcardtransactioninput) |  |

