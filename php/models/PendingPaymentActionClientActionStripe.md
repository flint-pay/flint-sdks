[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionClientActionStripe

How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned.

The `stripe` variant of `PaymentClientAction`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Required | [StripePaymentClientAction](../models/StripePaymentClientAction.md#stripepaymentclientaction) | Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. Stripe initialization context plus one flow-specific authority object. Exactly one of payment_intent, setup_intent, or terminal_payment_intent is present. `stripe`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actionsclient_action-variant-2stripe). |
| `type` | Required | string | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"stripe"`. |

### PendingPaymentActionClientActionStripe.stripe

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[].client_action variant 2.stripe](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actionsclient_action-variant-2stripe).

