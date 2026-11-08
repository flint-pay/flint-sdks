[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshotInput

The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [GiftCardProductConfigurationInput](../models/GiftCardProductConfigurationInput.md#giftcardproductconfigurationinput) or null | The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. |
| `consideration_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `face_value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `recipient` | Optional | [GiftCardPurchaseRecipientInput](../models/GiftCardPurchaseRecipientInput.md#giftcardpurchaserecipientinput) | Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. |
| `reference_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

