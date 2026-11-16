[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardProductConfigurationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Optional | [GiftCardCustomAmountBoundsPreviousAttributes](../models/GiftCardCustomAmountBoundsPreviousAttributes.md#giftcardcustomamountboundspreviousattributes) or null | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. |
| `face_value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `price_mode` | Optional | string or null | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. `price_mode`: [declared alternatives](../models/GiftCardProductConfigurationPreviousAttributes.md#giftcardproductconfigurationpreviousattributesprice_mode). |

### GiftCardProductConfigurationPreviousAttributes.price_mode

### GiftCardProductConfigurationPreviousAttributes.price_mode variant 1

anyOf variant 1: Whether the gift card is sold at its face value or at a discounted price..

- Value shape: string. Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`.

### GiftCardProductConfigurationPreviousAttributes.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the gift card is sold at its face value or at a discounted price. 

