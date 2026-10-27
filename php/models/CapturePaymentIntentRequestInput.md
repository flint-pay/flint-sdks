[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapturePaymentIntentRequestInput

The request body for: Capture payment intent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

