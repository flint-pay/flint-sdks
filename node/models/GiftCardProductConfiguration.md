[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardProductConfiguration







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Optional | [GiftCardCustomAmountBounds](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountbounds) | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. `custom_amount_bounds`: [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration-variant-1custom_amount_bounds), [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration-variant-2custom_amount_bounds). |
| `face_value_money` | Required | object | Gift card value issued for one unit of this variant, in the same currency as its unit price. `face_value_money`: [field definitions](../models/GiftCardProductConfiguration.md#giftcardproductconfigurationface_value_money). |
| `price_mode` | Required | string | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. |

### GiftCardProductConfiguration variant 1

anyOf variant 1: Declared schema GiftCardProductConfiguration. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts..

No additional constraints.

### GiftCardProductConfiguration variant 2

anyOf variant 2: Declared schema GiftCardProductConfigurationRequestRequest. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts..

No additional constraints.

### GiftCardProductConfiguration variant 1.custom_amount_bounds

Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.

Field definitions: [shared fields](GiftCardCustomAmountBounds.md#giftcardcustomamountbounds).

### GiftCardProductConfiguration variant 1.custom_amount_bounds.maximum_money

Field definitions: [GiftCardCustomAmountBounds.maximum_money](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountboundsmaximum_money).

### GiftCardProductConfiguration variant 1.custom_amount_bounds.minimum_money

Field definitions: [GiftCardCustomAmountBounds.minimum_money](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountboundsminimum_money).

### GiftCardProductConfiguration.face_value_money

Gift card value issued for one unit of this variant, in the same currency as its unit price.

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### GiftCardProductConfiguration variant 2.custom_amount_bounds

Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.

Field definitions: [shared fields](GiftCardCustomAmountBounds.md#giftcardcustomamountbounds).

### GiftCardProductConfiguration variant 2.custom_amount_bounds.maximum_money

Field definitions: [GiftCardCustomAmountBounds.maximum_money](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountboundsmaximum_money).

### GiftCardProductConfiguration variant 2.custom_amount_bounds.minimum_money

Field definitions: [GiftCardCustomAmountBounds.minimum_money](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountboundsminimum_money).

