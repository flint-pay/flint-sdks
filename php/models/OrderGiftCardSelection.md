[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSelection

A gift card available to pay an order, with its available balance and the last four characters of its code.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's available balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card selected for the order. |
| `last4` | Required | string | Last four characters of the card's current code. |
| `requires_authorization` | Required | boolean | Whether the card's current code must be applied again before the order can use it. |

