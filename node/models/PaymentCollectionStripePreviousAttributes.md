[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionStripePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string or null or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. `account_id`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesaccount_id). |
| `elements` | Optional | [PaymentCollectionStripeElementsPreviousAttributes](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributes) or null | Stripe Elements configuration for the available payment methods and amounts. |
| `publishable_key` | Optional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributespublishable_key). |
| `return_url` | Optional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesreturn_url). |

### PaymentCollectionStripePreviousAttributes.account_id

### PaymentCollectionStripePreviousAttributes.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount..

- Value shape: (string or null). Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. Example: `"acct_1234567890"`. 

### PaymentCollectionStripePreviousAttributes.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. 

### PaymentCollectionStripePreviousAttributes.publishable_key

### PaymentCollectionStripePreviousAttributes.publishable_key variant 1

anyOf variant 1: Publishable Stripe key for initializing the payment client..

- Value shape: string. Publishable Stripe key for initializing the payment client. 

### PaymentCollectionStripePreviousAttributes.publishable_key variant 2

anyOf variant 2.

- Value shape: null. Publishable Stripe key for initializing the payment client. 

### PaymentCollectionStripePreviousAttributes.return_url

### PaymentCollectionStripePreviousAttributes.return_url variant 1

anyOf variant 1: URL the buyer returns to after a redirect payment step..

- Value shape: string. URL the buyer returns to after a redirect payment step. 

### PaymentCollectionStripePreviousAttributes.return_url variant 2

anyOf variant 2.

- Value shape: null. URL the buyer returns to after a redirect payment step. 

