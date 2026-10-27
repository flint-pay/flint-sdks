[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CashOutGiftCardResultInput

The result of recording a gift card cash-out: the updated gift card and the transactions it created.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCardInput](../models/GiftCardInput.md#giftcardinput) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. |
| `gift_card_transactions` | Required | Array of [GiftCardTransactionInput](../models/GiftCardTransactionInput.md#giftcardtransactioninput) |  |

