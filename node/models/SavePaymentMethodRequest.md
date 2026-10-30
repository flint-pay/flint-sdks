[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SavePaymentMethodRequest

The request body for: Create a payment method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | The customer to save the payment method for. minLength: `1`. |
| `type` | Optional | string | Kind of payment method to save. card is the only value and the default. Values: `"card"`. |

