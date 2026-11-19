[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionStripePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. `account_id`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributesInput.md#paymentcollectionstripepreviousattributesinputaccount_id). |
| `elements` | Optional | [PaymentCollectionStripeElementsPreviousAttributesInput](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinput) or null | Stripe Elements configuration for the available payment methods and amounts. |
| `on_behalf_of` | Optional | string or null | Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. `on_behalf_of`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributesInput.md#paymentcollectionstripepreviousattributesinputon_behalf_of). |
| `publishable_key` | Optional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributesInput.md#paymentcollectionstripepreviousattributesinputpublishable_key). |
| `return_url` | Optional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributesInput.md#paymentcollectionstripepreviousattributesinputreturn_url). |

### PaymentCollectionStripePreviousAttributesInput.account_id

### PaymentCollectionStripePreviousAttributesInput.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. 

### PaymentCollectionStripePreviousAttributesInput.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. 

### PaymentCollectionStripePreviousAttributesInput.on_behalf_of

### PaymentCollectionStripePreviousAttributesInput.on_behalf_of variant 1

anyOf variant 1: Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements..

- Value shape: string. Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. 

### PaymentCollectionStripePreviousAttributesInput.on_behalf_of variant 2

anyOf variant 2.

- Value shape: null. Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. 

### PaymentCollectionStripePreviousAttributesInput.publishable_key

### PaymentCollectionStripePreviousAttributesInput.publishable_key variant 1

anyOf variant 1: Publishable Stripe key for initializing the payment client..

- Value shape: string. Publishable Stripe key for initializing the payment client. 

### PaymentCollectionStripePreviousAttributesInput.publishable_key variant 2

anyOf variant 2.

- Value shape: null. Publishable Stripe key for initializing the payment client. 

### PaymentCollectionStripePreviousAttributesInput.return_url

### PaymentCollectionStripePreviousAttributesInput.return_url variant 1

anyOf variant 1: URL the buyer returns to after a redirect payment step..

- Value shape: string. URL the buyer returns to after a redirect payment step. 

### PaymentCollectionStripePreviousAttributesInput.return_url variant 2

anyOf variant 2.

- Value shape: null. URL the buyer returns to after a redirect payment step. 

