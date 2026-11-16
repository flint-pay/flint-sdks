[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripePaymentClientActionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. `account_id`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributesaccount_id). |
| `payment_intent` | Optional | [StripeSetupIntentClientActionPreviousAttributes](../models/StripeSetupIntentClientActionPreviousAttributes.md#stripesetupintentclientactionpreviousattributes) or null | PaymentIntent authority for an order payment authentication action. `payment_intent`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent). |
| `publishable_key` | Optional | string or null | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. `publishable_key`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespublishable_key). |
| `setup_intent` | Optional | [StripeSetupIntentClientActionPreviousAttributes](../models/StripeSetupIntentClientActionPreviousAttributes.md#stripesetupintentclientactionpreviousattributes) or null | SetupIntent authority for a saved-payment-method authentication action. `setup_intent`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributessetup_intent). |
| `terminal_payment_intent` | Optional | [StripeTerminalPaymentIntentClientActionPreviousAttributes](../models/StripeTerminalPaymentIntentClientActionPreviousAttributes.md#stripeterminalpaymentintentclientactionpreviousattributes) or null | Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. |

### StripePaymentClientActionPreviousAttributes.account_id

### StripePaymentClientActionPreviousAttributes.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Example: `"acct_1234567890"`. 

### StripePaymentClientActionPreviousAttributes.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. 

### StripePaymentClientActionPreviousAttributes.payment_intent

PaymentIntent authority for an order payment authentication action.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Conditional | string or null | PaymentIntent client secret to pass to Stripe.js handleNextAction. `client_secret`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent-variant-1client_secret). |
| `stripe_js_call` | Conditional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent-variant-1stripe_js_call). |

### StripePaymentClientActionPreviousAttributes.payment_intent variant 1: `stripe_js_call` = `"handle_next_action"`

anyOf StripePaymentIntentClientActionPreviousAttributes.

- Optional: `client_secret`, `stripe_js_call`.

### StripePaymentClientActionPreviousAttributes.payment_intent variant 2

anyOf variant 2.

- Undeclared: `client_secret`, `stripe_js_call`.
- Value shape: null. PaymentIntent authority for an order payment authentication action. 

### StripePaymentClientActionPreviousAttributes.payment_intent variant 1.client_secret

### StripePaymentClientActionPreviousAttributes.payment_intent variant 1.client_secret variant 1

anyOf variant 1: PaymentIntent client secret to pass to Stripe.js handleNextAction..

- Value shape: string. PaymentIntent client secret to pass to Stripe.js handleNextAction. 

### StripePaymentClientActionPreviousAttributes.payment_intent variant 1.client_secret variant 2

anyOf variant 2.

- Value shape: null. PaymentIntent client secret to pass to Stripe.js handleNextAction. 

### StripePaymentClientActionPreviousAttributes.payment_intent variant 1.stripe_js_call

### StripePaymentClientActionPreviousAttributes.payment_intent variant 1.stripe_js_call variant 1

anyOf variant 1: Stripe.js operation to perform. Today this is handle_next_action..

- Value shape: string. Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`.

### StripePaymentClientActionPreviousAttributes.payment_intent variant 1.stripe_js_call variant 2

anyOf variant 2.

- Value shape: null. Stripe.js operation to perform. Today this is handle_next_action. 

### StripePaymentClientActionPreviousAttributes.publishable_key

### StripePaymentClientActionPreviousAttributes.publishable_key variant 1

anyOf variant 1: Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field..

- Value shape: string. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. 

### StripePaymentClientActionPreviousAttributes.publishable_key variant 2

anyOf variant 2.

- Value shape: null. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. 

### StripePaymentClientActionPreviousAttributes.setup_intent

SetupIntent authority for a saved-payment-method authentication action.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Conditional | string or null | SetupIntent client secret to pass to Stripe.js handleNextAction. `client_secret`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributessetup_intent-variant-1client_secret). |
| `stripe_js_call` | Conditional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent-variant-1stripe_js_call). |

### StripePaymentClientActionPreviousAttributes.setup_intent variant 1: `stripe_js_call` = `"handle_next_action"`

anyOf StripeSetupIntentClientActionPreviousAttributes.

- Optional: `client_secret`, `stripe_js_call`.

### StripePaymentClientActionPreviousAttributes.setup_intent variant 2

anyOf variant 2.

- Undeclared: `client_secret`, `stripe_js_call`.
- Value shape: null. SetupIntent authority for a saved-payment-method authentication action. 

### StripePaymentClientActionPreviousAttributes.setup_intent variant 1.client_secret

### StripePaymentClientActionPreviousAttributes.setup_intent variant 1.client_secret variant 1

anyOf variant 1: SetupIntent client secret to pass to Stripe.js handleNextAction..

- Value shape: string. SetupIntent client secret to pass to Stripe.js handleNextAction. 

### StripePaymentClientActionPreviousAttributes.setup_intent variant 1.client_secret variant 2

anyOf variant 2.

- Value shape: null. SetupIntent client secret to pass to Stripe.js handleNextAction. 

### StripePaymentClientActionPreviousAttributes.setup_intent variant 1.stripe_js_call

Declared alternatives: [StripePaymentClientActionPreviousAttributes.payment_intent variant 1.stripe_js_call](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributespayment_intent-variant-1stripe_js_call).

