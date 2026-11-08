[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshot

The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) or null | The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. `configuration`: [declared alternatives](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconfiguration). |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `consideration_money`: [field definitions](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconsideration_money). |
| `face_value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `face_value_money`: [field definitions](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient). |
| `reference_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `reference_price_money`: [field definitions](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotreference_price_money). |

### GiftCardPurchaseSnapshot.configuration

The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Conditional | [GiftCardCustomAmountBounds](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountbounds) | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount. `custom_amount_bounds`: [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration-variant-1custom_amount_bounds). |
| `face_value_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `face_value_money`: [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationface_value_money). |
| `price_mode` | Conditional | string | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. |

### GiftCardPurchaseSnapshot.configuration variant 1

anyOf GiftCardProductConfiguration: Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts..

- Required: `face_value_money`, `price_mode`.
- Optional: `custom_amount_bounds`.

### GiftCardPurchaseSnapshot.configuration variant 2

anyOf variant 2.

- Undeclared: `custom_amount_bounds`, `face_value_money`, `price_mode`.
- Value shape: null. The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. 

### GiftCardPurchaseSnapshot.configuration variant 1.custom_amount_bounds

Field definitions: [GiftCardProductConfiguration variant 1.custom_amount_bounds](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration-variant-1custom_amount_bounds).

### GiftCardPurchaseSnapshot.configuration variant 1.face_value_money

Field definitions: [GiftCardProductConfiguration.face_value_money](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationface_value_money).

### GiftCardPurchaseSnapshot.consideration_money

Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardPurchaseSnapshot.face_value_money

Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardPurchaseSnapshot.recipient

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase.recipient](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient).

### GiftCardPurchaseSnapshot.reference_price_money

Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

