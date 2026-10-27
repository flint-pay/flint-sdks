[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshot

The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) or null |  |
| `consideration_money` | Required | object | `consideration_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money). |
| `face_value_money` | Required | object | `face_value_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient). |
| `reference_price_money` | Required | object | `reference_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money). |

### GiftCardPurchaseSnapshot.consideration_money

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase.face_value_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### GiftCardPurchaseSnapshot.face_value_money

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase.face_value_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### GiftCardPurchaseSnapshot.recipient

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase.recipient](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient).

### GiftCardPurchaseSnapshot.reference_price_money

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase.face_value_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

