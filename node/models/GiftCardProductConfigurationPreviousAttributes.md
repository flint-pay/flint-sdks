[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardProductConfigurationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Optional | [GiftCardCustomAmountBoundsPreviousAttributes](../models/GiftCardCustomAmountBoundsPreviousAttributes.md#giftcardcustomamountboundspreviousattributes) or null | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. |
| `face_value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. `face_value_money`: [declared alternatives](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributesface_value_money). |
| `price_mode` | Optional | string or null | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. `price_mode`: [declared alternatives](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributesprice_mode). |

### GiftCardProductConfigurationPreviousAttributes.face_value_money

Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardProductConfigurationPreviousAttributes.face_value_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardProductConfigurationPreviousAttributes.face_value_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. 

### GiftCardProductConfigurationPreviousAttributes.face_value_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardProductConfigurationPreviousAttributes.face_value_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### GiftCardProductConfigurationPreviousAttributes.price_mode

### GiftCardProductConfigurationPreviousAttributes.price_mode variant 1

anyOf variant 1: Whether the gift card is sold at its face value or at a discounted price..

- Value shape: string. Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`.

### GiftCardProductConfigurationPreviousAttributes.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the gift card is sold at its face value or at a discounted price. 

