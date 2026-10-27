[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardProductConfiguration

Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Optional | [GiftCardCustomAmountBounds](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountbounds) | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount. `custom_amount_bounds`: [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationcustom_amount_bounds). |
| `face_value_money` | Required | [GiftCardProductConfigurationFaceValueMoney](../models/GiftCardProductConfigurationFaceValueMoney.md#giftcardproductconfigurationfacevaluemoney) | Gift card value issued for one unit of this variant, in the same currency as its unit price. |
| `price_mode` | Required | string | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. |

### GiftCardProductConfiguration.custom_amount_bounds

Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | object | Largest gift card value buyers can choose, in the face value currency. `maximum_money`: [field definitions](../models/GiftCardCustomAmountBoundsMaximumMoney.md#giftcardcustomamountboundsmaximummoney). |
| `minimum_money` | Required | object | Smallest gift card value buyers can choose, in the face value currency. `minimum_money`: [field definitions](../models/GiftCardCustomAmountBoundsMinimumMoney.md#giftcardcustomamountboundsminimummoney). |

### GiftCardProductConfiguration.custom_amount_bounds.maximum_money

Field definitions: [GiftCardCustomAmountBoundsMaximumMoney](../models/GiftCardCustomAmountBoundsMaximumMoney.md#giftcardcustomamountboundsmaximummoney).

### GiftCardProductConfiguration.custom_amount_bounds.minimum_money

Field definitions: [GiftCardCustomAmountBoundsMinimumMoney](../models/GiftCardCustomAmountBoundsMinimumMoney.md#giftcardcustomamountboundsminimummoney).

