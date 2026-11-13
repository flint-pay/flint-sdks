[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripeComponent

An embedded Stripe component to render for the dispute response session, with the payment reference to pass to it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `component` | Required | string | Which embedded Stripe component to render. Values: `"payment_disputes"`. |
| `stripe_payment_id` | Required | string | Stripe payment reference to pass to setPayment or the React payment prop: a PaymentIntent ID for an ordinary payment, or the destination payment ID (py_) for a payment with splits. This is separate from the dispute's Flint payment_intent_id. Example: `"pi_3QJ9oD2eZvKYlo2C0gP8kM3L"`. |

