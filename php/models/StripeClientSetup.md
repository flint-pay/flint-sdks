[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeClientSetup

Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [StripeClientSetupStripe](../models/StripeClientSetupStripe.md#stripeclientsetupstripe) | Stripe.js initialization context and SetupIntent setup authority. |

