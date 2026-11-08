[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientAction

Typed provider-specific browser action payload. Execute the selected provider action before continuing the owning payment through Flint.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Required | [StripePaymentClientAction](../models/StripePaymentClientAction.md#stripepaymentclientaction) | Stripe.js initialization context plus one flow-specific authority object. Exactly one of payment_intent or setup_intent is present. `stripe`: [field definitions](../models/PaymentClientAction.md#paymentclientactionstripe). |

### PaymentClientAction.stripe

Stripe.js initialization context plus one flow-specific authority object. Exactly one of payment_intent or setup_intent is present.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Required | string | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. |
| `payment_intent` | Optional | [StripePaymentIntentClientAction](../models/StripePaymentIntentClientAction.md#stripepaymentintentclientaction) | PaymentIntent authority for an order payment authentication action. The client action for a Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`. |
| `publishable_key` | Required | string | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. |
| `setup_intent` | Optional | [StripeSetupIntentClientAction](../models/StripeSetupIntentClientAction.md#stripesetupintentclientaction) | SetupIntent authority for a saved-payment-method authentication action. The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`. |

