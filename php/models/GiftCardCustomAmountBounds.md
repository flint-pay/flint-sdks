[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBounds

The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | [GiftCardCustomAmountBoundsMaximumMoney](../models/GiftCardCustomAmountBoundsMaximumMoney.md#giftcardcustomamountboundsmaximummoney) | Largest gift card value buyers can choose, in the face value currency. |
| `minimum_money` | Required | [GiftCardCustomAmountBoundsMinimumMoney](../models/GiftCardCustomAmountBoundsMinimumMoney.md#giftcardcustomamountboundsminimummoney) | Smallest gift card value buyers can choose, in the face value currency. |

