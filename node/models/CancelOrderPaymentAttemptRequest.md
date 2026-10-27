[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderPaymentAttemptRequest

The request body for: Cancel order payment attempt.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancellation_reason` | Optional | string | Optional merchant-supplied cancellation reason. Values: `"requested_by_customer"`, `"duplicate"`, `"fraudulent"`, `"abandoned"`. |

