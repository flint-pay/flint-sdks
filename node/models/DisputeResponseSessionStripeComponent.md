[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripeComponent

An embedded Stripe component to render for the dispute response session, with the payment reference to pass to it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `component` | Required | string | Values: `"payment_disputes"`. |
| `payment` | Required | string | Stripe payment reference to pass to setPayment or the React payment prop. |

