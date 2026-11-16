[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeSetupIntentClientActionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Optional | string or null | SetupIntent client secret to pass to Stripe.js handleNextAction. `client_secret`: [declared alternatives](../models/StripeSetupIntentClientActionPreviousAttributesInput.md#stripesetupintentclientactionpreviousattributesinputclient_secret). |
| `stripe_js_call` | Optional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/StripePaymentIntentClientActionPreviousAttributesInput.md#stripepaymentintentclientactionpreviousattributesinputstripe_js_call). |

### StripeSetupIntentClientActionPreviousAttributesInput.client_secret

### StripeSetupIntentClientActionPreviousAttributesInput.client_secret variant 1

anyOf variant 1: SetupIntent client secret to pass to Stripe.js handleNextAction..

- Value shape: string. SetupIntent client secret to pass to Stripe.js handleNextAction. 

### StripeSetupIntentClientActionPreviousAttributesInput.client_secret variant 2

anyOf variant 2.

- Value shape: null. SetupIntent client secret to pass to Stripe.js handleNextAction. 

### StripeSetupIntentClientActionPreviousAttributesInput.stripe_js_call

Declared alternatives: [StripePaymentIntentClientActionPreviousAttributesInput.stripe_js_call](../models/StripePaymentIntentClientActionPreviousAttributesInput.md#stripepaymentintentclientactionpreviousattributesinputstripe_js_call).

