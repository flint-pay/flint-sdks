[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelPaymentIntentRequest

Declared schema CancelOrderPaymentAttemptRequest: The request body for: Cancel order payment attempt.

Declared schema CancelPaymentIntentRequest: The request body for: Cancel payment intent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancellation_reason` | Optional | string | Optional merchant-supplied cancellation reason. Values: `"requested_by_customer"`, `"duplicate"`, `"fraudulent"`, `"abandoned"`. |

