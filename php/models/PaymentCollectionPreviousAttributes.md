[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [PaymentCollectionStripePreviousAttributes](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributes) or null | Client configuration for collecting the payment through Stripe. `stripe`: [declared alternatives](../models/PaymentCollectionPreviousAttributes.md#paymentcollectionpreviousattributesstripe). |

### PaymentCollectionPreviousAttributes.stripe

Client configuration for collecting the payment through Stripe.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Conditional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. `account_id`: [declared alternatives](../models/PaymentCollectionPreviousAttributes.md#paymentcollectionpreviousattributesstripe-variant-1account_id). |
| `elements` | Conditional | [PaymentCollectionStripeElementsPreviousAttributes](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributes) or null | Stripe Elements configuration for the available payment methods and amounts. |
| `on_behalf_of` | Conditional | string or null | Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. `on_behalf_of`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributeson_behalf_of). |
| `publishable_key` | Conditional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributespublishable_key). |
| `return_url` | Conditional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesreturn_url). |

### PaymentCollectionPreviousAttributes.stripe variant 1

anyOf PaymentCollectionStripePreviousAttributes.

- Optional: `account_id`, `elements`, `on_behalf_of`, `publishable_key`, `return_url`.

### PaymentCollectionPreviousAttributes.stripe variant 2

anyOf variant 2.

- Undeclared: `account_id`, `elements`, `on_behalf_of`, `publishable_key`, `return_url`.
- Value shape: null. Client configuration for collecting the payment through Stripe. 

### PaymentCollectionPreviousAttributes.stripe variant 1.account_id

### PaymentCollectionPreviousAttributes.stripe variant 1.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. 

### PaymentCollectionPreviousAttributes.stripe variant 1.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. 

### PaymentCollectionPreviousAttributes.stripe variant 1.on_behalf_of

Declared alternatives: [PaymentCollectionStripePreviousAttributes.on_behalf_of](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributeson_behalf_of).

### PaymentCollectionPreviousAttributes.stripe variant 1.publishable_key

Declared alternatives: [PaymentCollectionStripePreviousAttributes.publishable_key](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributespublishable_key).

### PaymentCollectionPreviousAttributes.stripe variant 1.return_url

Declared alternatives: [PaymentCollectionStripePreviousAttributes.return_url](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesreturn_url).

