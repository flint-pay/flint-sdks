[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ChangeSubscriptionPaymentMethodRequest

The request body for: Change a subscription payment method; Change the payment method for one of the current buyer's subscriptions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `payment_method_id` | Required | string | minLength: `1`. |

