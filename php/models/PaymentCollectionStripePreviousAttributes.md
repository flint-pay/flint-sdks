[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionStripePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. `account_id`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesaccount_id). |
| `elements` | Optional | [PaymentCollectionStripeElementsPreviousAttributes](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributes) or null | Stripe Elements configuration for the available payment methods and amounts. |
| `on_behalf_of` | Optional | string or null | Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. `on_behalf_of`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributeson_behalf_of). |
| `publishable_key` | Optional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributespublishable_key). |
| `return_url` | Optional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributes.md#paymentcollectionstripepreviousattributesreturn_url). |

### PaymentCollectionStripePreviousAttributes.account_id

### PaymentCollectionStripePreviousAttributes.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. 

### PaymentCollectionStripePreviousAttributes.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. 

### PaymentCollectionStripePreviousAttributes.on_behalf_of

### PaymentCollectionStripePreviousAttributes.on_behalf_of variant 1

anyOf variant 1: Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements..

- Value shape: string. Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. 

### PaymentCollectionStripePreviousAttributes.on_behalf_of variant 2

anyOf variant 2.

- Value shape: null. Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. 

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

