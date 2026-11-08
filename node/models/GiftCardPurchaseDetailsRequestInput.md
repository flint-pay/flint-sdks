[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseDetailsRequestInput

Request input. Response: [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest).

Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `recipient` | Optional | [GiftCardPurchaseRecipientRequestInput](../models/GiftCardPurchaseRecipientRequestInput.md#giftcardpurchaserecipientrequestinput) | Who receives the gift card. `null` when no recipient was set. Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at` time. |

