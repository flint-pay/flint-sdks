[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeSetupIntentClientAction







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string |  |
| `stripe_js_call` | Required | string | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. |

### StripeSetupIntentClientAction variant 1: `stripe_js_call` = `"handle_next_action"`

anyOf variant 1: Declared schema StripePaymentIntentClientAction. The client action for a Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`..

- Constraints for `client_secret`: PaymentIntent client secret to pass to Stripe.js handleNextAction.

### StripeSetupIntentClientAction variant 2: `stripe_js_call` = `"handle_next_action"`

anyOf variant 2: Declared schema StripeSetupIntentClientAction. The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`..

- Constraints for `client_secret`: SetupIntent client secret to pass to Stripe.js handleNextAction.

