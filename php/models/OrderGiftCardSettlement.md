[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSettlement

A gift card redemption applied to an order payment, with the amount, tip, and gift card.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the redemption paid toward the order, not counting the tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `gift_card_id` | Required | string | ID of the gift card the redemption spent. |
| `gift_card_redemption_id` | Required | string | ID of the redemption that posted the spend. |
| `last4` | Required | string | Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the redemption that paid a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

