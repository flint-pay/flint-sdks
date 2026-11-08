[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBoundsRequestInput

The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `minimum_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

