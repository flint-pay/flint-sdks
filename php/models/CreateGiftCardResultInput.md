[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardResultInput

The result of creating a gift card: the card, its transactions, any load and notification, and the code while it can still be recovered.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | The full current code. Omitted after the 24-hour recovery window or when this code has been replaced. |
| `code_recovery_expires_at` | Optional | string | When recovery of this code expires. Omitted when the code cannot be recovered. Format: `date-time`. |
| `gift_card` | Required | [GiftCardInput](../models/GiftCardInput.md#giftcardinput) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. |
| `gift_card_load` | Optional | [GiftCardLoadInput](../models/GiftCardLoadInput.md#giftcardloadinput) | Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. |
| `gift_card_notification` | Optional | [GiftCardNotificationInput](../models/GiftCardNotificationInput.md#giftcardnotificationinput) | A message sent to a gift card recipient. |
| `gift_card_transactions` | Required | Array of [GiftCardTransactionInput](../models/GiftCardTransactionInput.md#giftcardtransactioninput) |  |

