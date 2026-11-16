[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SetupCollectionStripePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. `account_id`: [declared alternatives](../models/SetupCollectionStripePreviousAttributesInput.md#setupcollectionstripepreviousattributesinputaccount_id). |
| `elements` | Optional | [PaymentCollectionStripeElementsPreviousAttributesInput](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinput) or null | Stripe Elements configuration for the available payment methods and amounts. |
| `publishable_key` | Optional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributesInput.md#paymentcollectionstripepreviousattributesinputpublishable_key). |
| `return_url` | Optional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/PaymentCollectionStripePreviousAttributesInput.md#paymentcollectionstripepreviousattributesinputreturn_url). |

### SetupCollectionStripePreviousAttributesInput.account_id

### SetupCollectionStripePreviousAttributesInput.account_id variant 1

anyOf variant 1: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js..

- Value shape: string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. 

### SetupCollectionStripePreviousAttributesInput.account_id variant 2

anyOf variant 2.

- Value shape: null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. 

### SetupCollectionStripePreviousAttributesInput.publishable_key

Declared alternatives: [PaymentCollectionStripePreviousAttributesInput.publishable_key](../models/PaymentCollectionStripePreviousAttributesInput.md#paymentcollectionstripepreviousattributesinputpublishable_key).

### SetupCollectionStripePreviousAttributesInput.return_url

Declared alternatives: [PaymentCollectionStripePreviousAttributesInput.return_url](../models/PaymentCollectionStripePreviousAttributesInput.md#paymentcollectionstripepreviousattributesinputreturn_url).

