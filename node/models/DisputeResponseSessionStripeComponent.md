[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripeComponent

An embedded Stripe component to render for the dispute response session, with the payment reference to pass to it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `component` | Required | string | Which embedded Stripe component to render. Values: `"payment_disputes"`. |
| `stripe_payment_intent_id` | Required | string | Stripe PaymentIntent ID to pass to setPayment or the React payment prop. This is a Stripe ID, not the dispute's Flint payment_intent_id. Example: `"pi_3QJ9oD2eZvKYlo2C0gP8kM3L"`. |

