[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBounds







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `maximum_money`: [field definitions](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountboundsmaximum_money). |
| `minimum_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `minimum_money`: [field definitions](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountboundsminimum_money). |

### GiftCardCustomAmountBounds variant 1

anyOf variant 1: Declared schema GiftCardCustomAmountBounds. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount..

No additional constraints.

### GiftCardCustomAmountBounds variant 2

anyOf variant 2: Declared schema GiftCardCustomAmountBoundsRequest. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount..

No additional constraints.

### GiftCardCustomAmountBounds.maximum_money

Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardCustomAmountBounds.minimum_money

Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

