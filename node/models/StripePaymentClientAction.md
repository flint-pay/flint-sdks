[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripePaymentClientAction

Stripe.js initialization context plus one flow-specific authority object. Exactly one of payment_intent or setup_intent is present.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Required | string | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. |
| `payment_intent` | Optional | [StripeSetupIntentClientAction](../models/StripeSetupIntentClientAction.md#stripesetupintentclientaction) | PaymentIntent authority for an order payment authentication action. The client action for a Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`. `payment_intent`: [field definitions](../models/StripePaymentClientAction.md#stripepaymentclientactionpayment_intent). |
| `publishable_key` | Required | string | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. |
| `setup_intent` | Optional | [StripeSetupIntentClientAction](../models/StripeSetupIntentClientAction.md#stripesetupintentclientaction) | SetupIntent authority for a saved-payment-method authentication action. The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`. `setup_intent`: [field definitions](../models/StripePaymentClientAction.md#stripepaymentclientactionsetup_intent). |

### StripePaymentClientAction.payment_intent

PaymentIntent authority for an order payment authentication action. The client action for a Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | PaymentIntent client secret to pass to Stripe.js handleNextAction. |
| `stripe_js_call` | Required | string | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. |

### StripePaymentClientAction.setup_intent

SetupIntent authority for a saved-payment-method authentication action. The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | SetupIntent client secret to pass to Stripe.js handleNextAction. |
| `stripe_js_call` | Required | string | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. |

