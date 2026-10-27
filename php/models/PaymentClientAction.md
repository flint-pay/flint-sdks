[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientAction

Typed provider-specific browser action payload. Execute the selected provider action before continuing the owning payment through Flint.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Required | [StripePaymentClientAction](../models/StripePaymentClientAction.md#stripepaymentclientaction) | Stripe.js initialization context plus one flow-specific authority object. Exactly one of payment_intent or setup_intent is present. |

