[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeSetupIntentClientActionInput

The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | SetupIntent client secret to pass to Stripe.js handleNextAction. |
| `stripe_js_call` | Required | string | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. |

