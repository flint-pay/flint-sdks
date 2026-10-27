[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshot

The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration) or null | `configuration`: [declared alternatives](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshotconfiguration). |
| `consideration_money` | Required | [GiftCardPurchaseSnapshotConsiderationMoney](../models/GiftCardPurchaseSnapshotConsiderationMoney.md#giftcardpurchasesnapshotconsiderationmoney) |  |
| `face_value_money` | Required | [GiftCardPurchaseSnapshotFaceValueMoney](../models/GiftCardPurchaseSnapshotFaceValueMoney.md#giftcardpurchasesnapshotfacevaluemoney) |  |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. |
| `reference_price_money` | Required | [GiftCardPurchaseSnapshotReferencePriceMoney](../models/GiftCardPurchaseSnapshotReferencePriceMoney.md#giftcardpurchasesnapshotreferencepricemoney) |  |

### GiftCardPurchaseSnapshot.configuration

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Conditional | [GiftCardCustomAmountBounds](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountbounds) | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount. `custom_amount_bounds`: [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationcustom_amount_bounds). |
| `face_value_money` | Conditional | object | Gift card value issued for one unit of this variant, in the same currency as its unit price. `face_value_money`: [field definitions](../models/GiftCardProductConfigurationFaceValueMoney.md#giftcardproductconfigurationfacevaluemoney). |
| `price_mode` | Conditional | string | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. |

### GiftCardPurchaseSnapshot.configuration variant 1

anyOf variant 1: Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts..

- Required: `face_value_money`, `price_mode`.
- Optional: `custom_amount_bounds`.

### GiftCardPurchaseSnapshot.configuration variant 2

anyOf variant 2.

- Undeclared: `custom_amount_bounds`, `face_value_money`, `price_mode`.
- Value shape: null.  

### GiftCardPurchaseSnapshot.configuration variant 1.custom_amount_bounds

Field definitions: [GiftCardProductConfiguration.custom_amount_bounds](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationcustom_amount_bounds).

### GiftCardPurchaseSnapshot.configuration variant 1.face_value_money

Field definitions: [GiftCardProductConfigurationFaceValueMoney](../models/GiftCardProductConfigurationFaceValueMoney.md#giftcardproductconfigurationfacevaluemoney).

