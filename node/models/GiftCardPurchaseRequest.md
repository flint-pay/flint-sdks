[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | object | Buyer-selected face value within the gift card offer's limits. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. `face_value_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | `recipient`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaserecipient), [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient). |

### GiftCardPurchaseRequest variant 1

anyOf variant 1: Declared schema GiftCardPurchaseDetailsRequest. Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card..

No additional constraints.

### GiftCardPurchaseRequest variant 2

anyOf variant 2: Declared schema GiftCardPurchaseRequest. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card..

No additional constraints.

### GiftCardPurchaseRequest.face_value_money

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase.face_value_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### GiftCardPurchaseRequest variant 1.recipient

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase.recipient](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaserecipient).

### GiftCardPurchaseRequest variant 2.recipient

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase.recipient](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient).

