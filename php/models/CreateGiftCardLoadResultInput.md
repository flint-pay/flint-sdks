[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardLoadResultInput

The result of loading a gift card: the updated gift card, the gift card load, and the transactions it created.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card` | Required | [GiftCardInput](../models/GiftCardInput.md#giftcardinput) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. |
| `gift_card_load` | Required | [GiftCardLoadInput](../models/GiftCardLoadInput.md#giftcardloadinput) | Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. |
| `gift_card_transactions` | Required | Array of [GiftCardTransactionInput](../models/GiftCardTransactionInput.md#giftcardtransactioninput) |  |

