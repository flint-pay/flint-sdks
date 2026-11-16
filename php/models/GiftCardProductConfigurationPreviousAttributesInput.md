[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardProductConfigurationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Optional | [GiftCardCustomAmountBoundsPreviousAttributesInput](../models/GiftCardCustomAmountBoundsPreviousAttributesInput.md#giftcardcustomamountboundspreviousattributesinput) or null | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. |
| `face_value_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `price_mode` | Optional | string or null | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. `price_mode`: [declared alternatives](../models/GiftCardProductConfigurationPreviousAttributesInput.md#giftcardproductconfigurationpreviousattributesinputprice_mode). |

### GiftCardProductConfigurationPreviousAttributesInput.price_mode

### GiftCardProductConfigurationPreviousAttributesInput.price_mode variant 1

anyOf variant 1: Whether the gift card is sold at its face value or at a discounted price..

- Value shape: string. Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`.

### GiftCardProductConfigurationPreviousAttributesInput.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the gift card is sold at its face value or at a discounted price. 

