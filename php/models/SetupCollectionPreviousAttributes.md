[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SetupCollectionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [SetupCollectionStripePreviousAttributes](../models/SetupCollectionStripePreviousAttributes.md#setupcollectionstripepreviousattributes) or null | Client configuration for saving a payment method through Stripe on the merchant's connected account. `stripe`: [declared alternatives](../models/SetupCollectionPreviousAttributes.md#setupcollectionpreviousattributesstripe). |

### SetupCollectionPreviousAttributes.stripe

Client configuration for saving a payment method through Stripe on the merchant's connected account.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Conditional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. `account_id`: [declared alternatives](../models/SetupCollectionPreviousAttributes.md#setupcollectionpreviousattributesstripe-variant-1account_id). |
| `elements` | Conditional | [PaymentCollectionStripeElementsPreviousAttributes](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributes) or null | Stripe Elements configuration for the available payment methods and amounts. |
| `publishable_key` | Conditional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributespublishable_key). |
| `return_url` | Conditional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesreturn_url). |

### SetupCollectionPreviousAttributes.stripe variant 1

anyOf SetupCollectionStripePreviousAttributes.

- Optional: `account_id`, `elements`, `publishable_key`, `return_url`.

### SetupCollectionPreviousAttributes.stripe variant 2

anyOf variant 2.

- Undeclared: `account_id`, `elements`, `publishable_key`, `return_url`.
- Value shape: null. Client configuration for saving a payment method through Stripe on the merchant's connected account. 

### SetupCollectionPreviousAttributes.stripe variant 1.account_id

### SetupCollectionPreviousAttributes.stripe variant 1.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. 

### SetupCollectionPreviousAttributes.stripe variant 1.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. 

### SetupCollectionPreviousAttributes.stripe variant 1.publishable_key

Declared alternatives: [PaymentCollectionStripePreviousAttributes.publishable_key](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributespublishable_key).

### SetupCollectionPreviousAttributes.stripe variant 1.return_url

Declared alternatives: [PaymentCollectionStripePreviousAttributes.return_url](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesreturn_url).

