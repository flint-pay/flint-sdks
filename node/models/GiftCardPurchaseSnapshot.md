[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshot

The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) or null | `configuration`: [declared alternatives](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconfiguration). |
| `consideration_money` | Required | object | `consideration_money`: [field definitions](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconsideration_money). |
| `face_value_money` | Required | object | `face_value_money`: [field definitions](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconsideration_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient). |
| `reference_price_money` | Required | object | `reference_price_money`: [field definitions](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconsideration_money). |

### GiftCardPurchaseSnapshot.configuration

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Conditional | [GiftCardCustomAmountBounds](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountbounds) | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount. `custom_amount_bounds`: [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration-variant-1custom_amount_bounds). |
| `face_value_money` | Conditional | object | Gift card value issued for one unit of this variant, in the same currency as its unit price. `face_value_money`: [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationface_value_money). |
| `price_mode` | Conditional | string | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. |

### GiftCardPurchaseSnapshot.configuration variant 1

anyOf GiftCardProductConfiguration: Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts..

- Required: `face_value_money`, `price_mode`.
- Optional: `custom_amount_bounds`.

### GiftCardPurchaseSnapshot.configuration variant 2

anyOf variant 2.

- Undeclared: `custom_amount_bounds`, `face_value_money`, `price_mode`.
- Value shape: null.  

### GiftCardPurchaseSnapshot.configuration variant 1.custom_amount_bounds

Field definitions: [GiftCardProductConfiguration variant 1.custom_amount_bounds](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration-variant-1custom_amount_bounds).

### GiftCardPurchaseSnapshot.configuration variant 1.face_value_money

Field definitions: [GiftCardProductConfiguration.face_value_money](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationface_value_money).

### GiftCardPurchaseSnapshot.consideration_money

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### GiftCardPurchaseSnapshot.face_value_money

Field definitions: [GiftCardPurchaseSnapshot.consideration_money](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconsideration_money).

### GiftCardPurchaseSnapshot.recipient

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase.recipient](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient).

### GiftCardPurchaseSnapshot.reference_price_money

Field definitions: [GiftCardPurchaseSnapshot.consideration_money](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconsideration_money).

