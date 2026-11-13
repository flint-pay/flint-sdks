[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripePaymentClientAction

Stripe initialization context plus one flow-specific authority object. Exactly one of payment_intent, setup_intent, or terminal_payment_intent is present.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Required | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. |
| `payment_intent` | Optional | [StripePaymentIntentClientAction](../models/StripePaymentIntentClientAction.md#stripepaymentintentclientaction) | PaymentIntent authority for an order payment authentication action. The client action for a Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`. |
| `publishable_key` | Required | string | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. |
| `setup_intent` | Optional | [StripeSetupIntentClientAction](../models/StripeSetupIntentClientAction.md#stripesetupintentclientaction) | SetupIntent authority for a saved-payment-method authentication action. The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`. |
| `terminal_payment_intent` | Optional | [StripeTerminalPaymentIntentClientAction](../models/StripeTerminalPaymentIntentClientAction.md#stripeterminalpaymentintentclientaction) | Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. Authority to collect and confirm a card-present payment with the Stripe Terminal SDK on the connected Tap to Pay reader. |

