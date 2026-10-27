[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderPaymentRequest

The request body for: Cancel order payment leg.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancellation_reason` | Optional | string | Optional merchant-supplied cancellation reason. Values: `"requested_by_customer"`, `"duplicate"`, `"fraudulent"`, `"abandoned"`. |
| `order_payment_attempt_id` | Optional | string | Owning Flint payment attempt ID. Required while the payment leg belongs to an active attempt. minLength: `1`. |

