[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CaptureOrderPaymentRequestInput

The request body for: Capture order payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_payment_attempt_id` | Optional | string | Owning Flint payment attempt ID. Required while the authorization belongs to an active attempt. minLength: `1`. |

