[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeClientAuthorityInput

One-time client authority for the named Stripe object. This payload always names the Stripe.js call and carries its client secret.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | Stripe client secret for the named PaymentIntent or SetupIntent. |
| `stripe_js_call` | Required | string | Stripe.js operation to perform now. confirm_setup applies to client_setup. Standalone PaymentIntents use payment_collection plus server confirmation instead of initial confirm_payment authority. Values: `"confirm_payment"`, `"confirm_setup"`. |

