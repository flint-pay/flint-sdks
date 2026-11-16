[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientActionPreviousAttributesInput

How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | string or null | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. `type`: [declared alternatives](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-1type), [declared alternatives](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-2type). |
| `url` | Conditional | string or null | Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. `url`: [declared alternatives](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-1url). |
| `stripe` | Conditional | [StripePaymentClientActionPreviousAttributesInput](../models/StripePaymentClientActionPreviousAttributesInput.md#stripepaymentclientactionpreviousattributesinput) or null | Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. |

### PaymentClientActionPreviousAttributesInput variant 1: `type` = `"url"`

anyOf PaymentClientActionURLPreviousAttributes.

- Optional: `url`.
- Undeclared: `stripe`.
- Constraints for `type`: Values: `"url"`.

### PaymentClientActionPreviousAttributesInput variant 2: `type` = `"stripe"`

anyOf PaymentClientActionStripePreviousAttributes.

- Optional: `stripe`.
- Undeclared: `url`.
- Constraints for `type`: Values: `"stripe"`.

### PaymentClientActionPreviousAttributesInput variant 1.type

### PaymentClientActionPreviousAttributesInput variant 1.type variant 1

anyOf variant 1: Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction..

- Value shape: string. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"url"`.

### PaymentClientActionPreviousAttributesInput variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. 

### PaymentClientActionPreviousAttributesInput variant 1.url

### PaymentClientActionPreviousAttributesInput variant 1.url variant 1

anyOf variant 1: Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2..

- Value shape: string. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. minLength: `1`. 

### PaymentClientActionPreviousAttributesInput variant 1.url variant 2

anyOf variant 2.

- Value shape: null. Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. 

### PaymentClientActionPreviousAttributesInput variant 2.type

### PaymentClientActionPreviousAttributesInput variant 2.type variant 1

anyOf variant 1: Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction..

- Value shape: string. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"stripe"`.

### PaymentClientActionPreviousAttributesInput variant 2.type variant 2

anyOf variant 2.

- Value shape: null. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. 

