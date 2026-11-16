[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SetupCollectionStripePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. `account_id`: [declared alternatives](../models/SetupCollectionStripePreviousAttributes.md#setupcollectionstripepreviousattributesaccount_id). |
| `elements` | Optional | [PaymentCollectionStripeElementsPreviousAttributes](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributes) or null | Stripe Elements configuration for the available payment methods and amounts. |
| `publishable_key` | Optional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributespublishable_key). |
| `return_url` | Optional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesreturn_url). |

### SetupCollectionStripePreviousAttributes.account_id

### SetupCollectionStripePreviousAttributes.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. 

### SetupCollectionStripePreviousAttributes.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. 

### SetupCollectionStripePreviousAttributes.publishable_key

Declared alternatives: [PaymentCollectionStripePreviousAttributes.publishable_key](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributespublishable_key).

### SetupCollectionStripePreviousAttributes.return_url

Declared alternatives: [PaymentCollectionStripePreviousAttributes.return_url](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesreturn_url).

