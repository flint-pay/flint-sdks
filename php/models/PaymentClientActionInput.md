[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientActionInput

Typed provider-specific browser action payload. Execute the selected provider action before continuing the owning payment through Flint.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Required | [StripePaymentClientActionInput](../models/StripePaymentClientActionInput.md#stripepaymentclientactioninput) | Stripe.js initialization context plus one flow-specific authority object. Exactly one of payment_intent or setup_intent is present. |

