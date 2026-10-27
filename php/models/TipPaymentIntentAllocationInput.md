[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPaymentIntentAllocationInput

The part of a tip paid through one payment intent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_intent_id` | Required | string |  |

