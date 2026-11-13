[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientActionStripeInput

The `stripe` variant of `PaymentClientAction`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Required | [StripePaymentClientActionInput](../models/StripePaymentClientActionInput.md#stripepaymentclientactioninput) | Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. Stripe initialization context plus one flow-specific authority object. Exactly one of payment_intent, setup_intent, or terminal_payment_intent is present. |
| `type` | Required | string | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"stripe"`. |

