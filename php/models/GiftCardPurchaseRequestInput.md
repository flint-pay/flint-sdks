[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRequestInput

Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | object | `face_value_money`: [field definitions](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipientInput](../models/GiftCardPurchaseRecipientInput.md#giftcardpurchaserecipientinput) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. |

### GiftCardPurchaseRequestInput.face_value_money

Field definitions: [GiftCardPurchaseDetailsRequestInput.face_value_money](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money).

