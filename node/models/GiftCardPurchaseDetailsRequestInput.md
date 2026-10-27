[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseDetailsRequestInput

Request input. Response: [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest).

Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | object | `face_value_money`: [field definitions](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinputface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipientRequestInput](../models/GiftCardPurchaseRecipientRequestInput.md#giftcardpurchaserecipientrequestinput) | Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at` time. |

### GiftCardPurchaseDetailsRequestInput.face_value_money

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

