[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPaymentIntentAllocation

The part of a tip paid through one payment intent.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_intent_id` | Required | string |  |

