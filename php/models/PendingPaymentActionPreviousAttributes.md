[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`. `action_type`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesaction_type). |
| `client_action` | Optional | Alternative shapes (see declared variants) or null | How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. `client_action`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action). |
| `expires_at` | Optional | string or null | When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. `expires_at`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesexpires_at). |
| `pending_action_id` | Optional | string or null | Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. `pending_action_id`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributespending_action_id). |
| `subject` | Optional | [PendingPaymentActionSubjectPreviousAttributes](../models/PendingPaymentActionSubjectPreviousAttributes.md#pendingpaymentactionsubjectpreviousattributes) or null | The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. |

### PendingPaymentActionPreviousAttributes.action_type

### PendingPaymentActionPreviousAttributes.action_type variant 1

anyOf variant 1: Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app..

- Value shape: string. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`.

### PendingPaymentActionPreviousAttributes.action_type variant 2

anyOf variant 2.

- Value shape: null. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. 

### PendingPaymentActionPreviousAttributes.client_action

How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Conditional | string or null | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. `type`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-1type), [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2type). |
| `url` | Conditional | string or null | Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. `url`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-1url). |
| `stripe` | Conditional | Alternative shapes (see declared variants) | Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. `stripe`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe). |

### PendingPaymentActionPreviousAttributes.client_action variant 1: `type` = `"url"`

anyOf PaymentClientActionPreviousAttributes; anyOf PaymentClientActionURLPreviousAttributes.

- Optional: `type`, `url`.
- Undeclared: `stripe`.
- Constraints for `type`: Values: `"url"`.

### PendingPaymentActionPreviousAttributes.client_action variant 2: `type` = `"stripe"`

anyOf PaymentClientActionPreviousAttributes; anyOf PaymentClientActionStripePreviousAttributes.

- Optional: `stripe`, `type`.
- Undeclared: `url`.
- Constraints for `type`: Values: `"stripe"`.

### PendingPaymentActionPreviousAttributes.client_action variant 3

anyOf variant 2.

- Undeclared: `type`, `url`, `stripe`.
- Value shape: null. How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. 

### PendingPaymentActionPreviousAttributes.client_action variant 1.type

### PendingPaymentActionPreviousAttributes.client_action variant 1.type variant 1

anyOf variant 1: Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction..

- Value shape: string. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"url"`.

### PendingPaymentActionPreviousAttributes.client_action variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. 

### PendingPaymentActionPreviousAttributes.client_action variant 1.url

### PendingPaymentActionPreviousAttributes.client_action variant 1.url variant 1

anyOf variant 1: Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2..

- Value shape: string. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. minLength: `1`. 

### PendingPaymentActionPreviousAttributes.client_action variant 1.url variant 2

anyOf variant 2.

- Value shape: null. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe

Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Conditional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. `account_id`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1account_id). |
| `on_behalf_of` | Conditional | string or null | The collecting merchant's Stripe account for a payment on Flint's Stripe account. It identifies the settlement account, not the Stripe.js account. Do not pass it as stripeAccount or to handleNextAction. `on_behalf_of`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1on_behalf_of). |
| `payment_intent` | Conditional | Alternative shapes (see declared variants) | PaymentIntent authority for an order payment authentication action. `payment_intent`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1payment_intent). |
| `publishable_key` | Conditional | string or null | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. `publishable_key`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1publishable_key). |
| `setup_intent` | Conditional | Alternative shapes (see declared variants) | SetupIntent authority for a saved-payment-method authentication action. `setup_intent`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1setup_intent). |
| `terminal_payment_intent` | Conditional | Alternative shapes (see declared variants) | Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. `terminal_payment_intent`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1terminal_payment_intent). |

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1

anyOf StripePaymentClientActionPreviousAttributes.

- Optional: `account_id`, `on_behalf_of`, `payment_intent`, `publishable_key`, `setup_intent`, `terminal_payment_intent`.

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 2

anyOf variant 2.

- Undeclared: `account_id`, `on_behalf_of`, `payment_intent`, `publishable_key`, `setup_intent`, `terminal_payment_intent`.
- Value shape: null. Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.account_id

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Example: `"acct_1234567890"`. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.on_behalf_of

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.on_behalf_of variant 1

anyOf variant 1: The collecting merchant's Stripe account for a payment on Flint's Stripe account. It identifies the settlement account, not the Stripe.js account. Do not pass it as stripeAccount or to handleNextAction..

- Value shape: string. The collecting merchant's Stripe account for a payment on Flint's Stripe account. It identifies the settlement account, not the Stripe.js account. Do not pass it as stripeAccount or to handleNextAction. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.on_behalf_of variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's Stripe account for a payment on Flint's Stripe account. It identifies the settlement account, not the Stripe.js account. Do not pass it as stripeAccount or to handleNextAction. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent

PaymentIntent authority for an order payment authentication action.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Conditional | string or null | PaymentIntent client secret to pass to Stripe.js handleNextAction. `client_secret`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1payment_intent-variant-1client_secret). |
| `stripe_js_call` | Conditional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1payment_intent-variant-1stripe_js_call). |

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 1: `stripe_js_call` = `"handle_next_action"`

anyOf StripePaymentIntentClientActionPreviousAttributes.

- Optional: `client_secret`, `stripe_js_call`.

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 2

anyOf variant 2.

- Undeclared: `client_secret`, `stripe_js_call`.
- Value shape: null. PaymentIntent authority for an order payment authentication action. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 1.client_secret

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 1.client_secret variant 1

anyOf variant 1: PaymentIntent client secret to pass to Stripe.js handleNextAction..

- Value shape: string. PaymentIntent client secret to pass to Stripe.js handleNextAction. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 1.client_secret variant 2

anyOf variant 2.

- Value shape: null. PaymentIntent client secret to pass to Stripe.js handleNextAction. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 1.stripe_js_call

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 1.stripe_js_call variant 1

anyOf variant 1: Stripe.js operation to perform. Today this is handle_next_action..

- Value shape: string. Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`.

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 1.stripe_js_call variant 2

anyOf variant 2.

- Value shape: null. Stripe.js operation to perform. Today this is handle_next_action. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.publishable_key

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.publishable_key variant 1

anyOf variant 1: Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field..

- Value shape: string. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.publishable_key variant 2

anyOf variant 2.

- Value shape: null. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.setup_intent

SetupIntent authority for a saved-payment-method authentication action.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Conditional | string or null | SetupIntent client secret to pass to Stripe.js handleNextAction. `client_secret`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1setup_intent-variant-1client_secret). |
| `stripe_js_call` | Conditional | string or null | Stripe.js operation to perform. Today this is handle_next_action. Values: `"handle_next_action"`. `stripe_js_call`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1payment_intent-variant-1stripe_js_call). |

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.setup_intent variant 1: `stripe_js_call` = `"handle_next_action"`

anyOf StripeSetupIntentClientActionPreviousAttributes.

- Optional: `client_secret`, `stripe_js_call`.

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.setup_intent variant 2

anyOf variant 2.

- Undeclared: `client_secret`, `stripe_js_call`.
- Value shape: null. SetupIntent authority for a saved-payment-method authentication action. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.setup_intent variant 1.client_secret

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.setup_intent variant 1.client_secret variant 1

anyOf variant 1: SetupIntent client secret to pass to Stripe.js handleNextAction..

- Value shape: string. SetupIntent client secret to pass to Stripe.js handleNextAction. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.setup_intent variant 1.client_secret variant 2

anyOf variant 2.

- Value shape: null. SetupIntent client secret to pass to Stripe.js handleNextAction. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.setup_intent variant 1.stripe_js_call

Declared alternatives: [PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.payment_intent variant 1.stripe_js_call](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1payment_intent-variant-1stripe_js_call).

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent

Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Conditional | string or null | Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. `client_secret`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1terminal_payment_intent-variant-1client_secret). |
| `stripe_terminal_sdk_call` | Conditional | string or null | Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Values: `"collect_and_confirm_payment_intent"`. `stripe_terminal_sdk_call`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action-variant-2stripe-variant-1terminal_payment_intent-variant-1stripe_terminal_sdk_call). |

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1: `stripe_terminal_sdk_call` = `"collect_and_confirm_payment_intent"`

anyOf StripeTerminalPaymentIntentClientActionPreviousAttributes.

- Optional: `client_secret`, `stripe_terminal_sdk_call`.

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent variant 2

anyOf variant 2.

- Undeclared: `client_secret`, `stripe_terminal_sdk_call`.
- Value shape: null. Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.client_secret

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.client_secret variant 1

anyOf variant 1: Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader..

- Value shape: string. Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.client_secret variant 2

anyOf variant 2.

- Value shape: null. Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.stripe_terminal_sdk_call

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.stripe_terminal_sdk_call variant 1

anyOf variant 1: Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment..

- Value shape: string. Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Values: `"collect_and_confirm_payment_intent"`.

### PendingPaymentActionPreviousAttributes.client_action variant 2.stripe variant 1.terminal_payment_intent variant 1.stripe_terminal_sdk_call variant 2

anyOf variant 2.

- Value shape: null. Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. 

### PendingPaymentActionPreviousAttributes.client_action variant 2.type

### PendingPaymentActionPreviousAttributes.client_action variant 2.type variant 1

anyOf variant 1: Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction..

- Value shape: string. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"stripe"`.

### PendingPaymentActionPreviousAttributes.client_action variant 2.type variant 2

anyOf variant 2.

- Value shape: null. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. 

### PendingPaymentActionPreviousAttributes.expires_at

### PendingPaymentActionPreviousAttributes.expires_at variant 1

anyOf variant 1: When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled..

- Value shape: string. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: `date-time`. 

### PendingPaymentActionPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. 

### PendingPaymentActionPreviousAttributes.pending_action_id

### PendingPaymentActionPreviousAttributes.pending_action_id variant 1

anyOf variant 1: Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt..

- Value shape: string. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. 

### PendingPaymentActionPreviousAttributes.pending_action_id variant 2

anyOf variant 2.

- Value shape: null. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. 

