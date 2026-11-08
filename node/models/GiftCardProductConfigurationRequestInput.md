[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardProductConfigurationRequestInput

Request input. Response: [GiftCardProductConfiguration](../models/GiftCardProductConfiguration.md#giftcardproductconfiguration).

Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_amount_bounds` | Optional | [GiftCardCustomAmountBoundsRequestInput](../models/GiftCardCustomAmountBoundsRequestInput.md#giftcardcustomamountboundsrequestinput) | Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount. |
| `face_value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Gift card value issued for one unit of this variant, in the same currency as its unit price. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `price_mode` | Required | string | Whether the gift card is sold at its face value or at a discounted price. Values: `"face_value"`, `"discounted"`. |

