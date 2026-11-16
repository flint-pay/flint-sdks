[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripePaymentClientActionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. `account_id`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributesInput.md#stripepaymentclientactionpreviousattributesinputaccount_id). |
| `payment_intent` | Optional | [StripePaymentIntentClientActionPreviousAttributesInput](../models/StripePaymentIntentClientActionPreviousAttributesInput.md#stripepaymentintentclientactionpreviousattributesinput) or null | PaymentIntent authority for an order payment authentication action. |
| `publishable_key` | Optional | string or null | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. `publishable_key`: [declared alternatives](../models/StripePaymentClientActionPreviousAttributesInput.md#stripepaymentclientactionpreviousattributesinputpublishable_key). |
| `setup_intent` | Optional | [StripeSetupIntentClientActionPreviousAttributesInput](../models/StripeSetupIntentClientActionPreviousAttributesInput.md#stripesetupintentclientactionpreviousattributesinput) or null | SetupIntent authority for a saved-payment-method authentication action. |
| `terminal_payment_intent` | Optional | [StripeTerminalPaymentIntentClientActionPreviousAttributesInput](../models/StripeTerminalPaymentIntentClientActionPreviousAttributesInput.md#stripeterminalpaymentintentclientactionpreviousattributesinput) or null | Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. |

### StripePaymentClientActionPreviousAttributesInput.account_id

### StripePaymentClientActionPreviousAttributesInput.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Example: `"acct_1234567890"`. 

### StripePaymentClientActionPreviousAttributesInput.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. 

### StripePaymentClientActionPreviousAttributesInput.publishable_key

### StripePaymentClientActionPreviousAttributesInput.publishable_key variant 1

anyOf variant 1: Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field..

- Value shape: string. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. 

### StripePaymentClientActionPreviousAttributesInput.publishable_key variant 2

anyOf variant 2.

- Value shape: null. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. 

