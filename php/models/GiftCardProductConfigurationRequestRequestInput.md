[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardProductConfigurationRequestRequestInput

Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Optional | [GiftCardCustomAmountBoundsRequestRequestInput](../models/GiftCardCustomAmountBoundsRequestRequestInput.md#giftcardcustomamountboundsrequestrequestinput) | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount. |
| `face_value_money` | Required | object | Gift card value issued for one unit of this variant, in the same currency as its unit price. `face_value_money`: [field definitions](../models/GiftCardProductConfigurationInput.md#giftcardproductconfigurationinputface_value_money). |
| `price_mode` | Required | string | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. |

### GiftCardProductConfigurationRequestRequestInput.face_value_money

Field definitions: [GiftCardProductConfigurationInput.face_value_money](../models/GiftCardProductConfigurationInput.md#giftcardproductconfigurationinputface_value_money).

