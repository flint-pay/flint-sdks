[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeSetupIntentClientActionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Optional | string or null | `client_secret`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent-variant-1client_secret), [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributessetup_intent-variant-1client_secret). |
| `stripe_js_call` | Optional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent-variant-1stripe_js_call). |

### StripeSetupIntentClientActionPreviousAttributes variant 1: `stripe_js_call` = `"handle_next_action"`

anyOf variant 1: Declared schema StripePaymentIntentClientActionPreviousAttributes. .

- Constraints for `client_secret`: PaymentIntent client secret to pass to Stripe.js handleNextAction.

### StripeSetupIntentClientActionPreviousAttributes variant 2: `stripe_js_call` = `"handle_next_action"`

anyOf variant 2: Declared schema StripeSetupIntentClientActionPreviousAttributes. .

- Constraints for `client_secret`: SetupIntent client secret to pass to Stripe.js handleNextAction.

### StripeSetupIntentClientActionPreviousAttributes variant 1.client_secret

Declared alternatives: [StripePaymentClientActionPreviousAttributes.payment_intent variant 1.client_secret](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent-variant-1client_secret).

### StripeSetupIntentClientActionPreviousAttributes.stripe_js_call

Declared alternatives: [StripePaymentClientActionPreviousAttributes.payment_intent variant 1.stripe_js_call](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent-variant-1stripe_js_call).

### StripeSetupIntentClientActionPreviousAttributes variant 2.client_secret

Declared alternatives: [StripePaymentClientActionPreviousAttributes.setup_intent variant 1.client_secret](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributessetup_intent-variant-1client_secret).

