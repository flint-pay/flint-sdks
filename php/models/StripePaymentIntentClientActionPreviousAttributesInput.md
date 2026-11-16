[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripePaymentIntentClientActionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Optional | string or null | PaymentIntent client secret to pass to Stripe.js handleNextAction. `client_secret`: [declared alternatives](../models/StripePaymentIntentClientActionPreviousAttributesInput.md#stripepaymentintentclientactionpreviousattributesinputclient_secret). |
| `stripe_js_call` | Optional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/StripePaymentIntentClientActionPreviousAttributesInput.md#stripepaymentintentclientactionpreviousattributesinputstripe_js_call). |

### StripePaymentIntentClientActionPreviousAttributesInput.client_secret

### StripePaymentIntentClientActionPreviousAttributesInput.client_secret variant 1

anyOf variant 1: PaymentIntent client secret to pass to Stripe.js handleNextAction..

- Value shape: string. PaymentIntent client secret to pass to Stripe.js handleNextAction. 

### StripePaymentIntentClientActionPreviousAttributesInput.client_secret variant 2

anyOf variant 2.

- Value shape: null. PaymentIntent client secret to pass to Stripe.js handleNextAction. 

### StripePaymentIntentClientActionPreviousAttributesInput.stripe_js_call

### StripePaymentIntentClientActionPreviousAttributesInput.stripe_js_call variant 1

anyOf variant 1: Stripe.js operation to perform. Today this is handle_next_action..

- Value shape: string. Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`.

### StripePaymentIntentClientActionPreviousAttributesInput.stripe_js_call variant 2

anyOf variant 2.

- Value shape: null. Stripe.js operation to perform. Today this is handle_next_action. 

