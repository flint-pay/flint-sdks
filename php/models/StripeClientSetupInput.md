[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeClientSetupInput

Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [StripeClientSetupStripeInput](../models/StripeClientSetupStripeInput.md#stripeclientsetupstripeinput) | Stripe.js initialization context and SetupIntent setup authority. |

