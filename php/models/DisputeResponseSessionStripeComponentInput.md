[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripeComponentInput

An embedded Stripe component to render for the dispute response session, with the payment reference to pass to it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `component` | Required | string | Values: `"payment_disputes"`. |
| `payment` | Required | string | Stripe payment reference to pass to setPayment or the React payment prop. |

