[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAddOnFeeInput

A Flint fee added to a payment intent, with the fee type and amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fee_type` | Required | string | The Flint feature this fee pays for. A payment carries at most one of invoice_collection and subscription_collection. Can gain values: sum every entry rather than matching only the types you know. Values: `"invoice_collection"`, `"subscription_collection"`, `"automatic_tax"`. |

