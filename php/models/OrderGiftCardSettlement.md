[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSettlement

A gift card redemption applied to an order payment, with the amount, tip, and gift card.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `gift_card_id` | Required | string |  |
| `gift_card_redemption_id` | Required | string |  |
| `last4` | Required | string | Last four characters of the card's current code. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

