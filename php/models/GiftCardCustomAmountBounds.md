[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBounds

The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `minimum_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

