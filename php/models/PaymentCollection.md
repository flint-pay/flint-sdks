[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollection

Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [PaymentCollectionStripe](../models/PaymentCollectionStripe.md#paymentcollectionstripe) | Client configuration for collecting the payment through Stripe. Stripe details for collecting payment in the browser: account ID, publishable key, return URL, and Elements options. `stripe`: [field definitions](../models/PaymentCollection.md#paymentcollectionstripe-fields-1). |

### PaymentCollection.stripe fields 1

Client configuration for collecting the payment through Stripe. Stripe details for collecting payment in the browser: account ID, publishable key, return URL, and Elements options.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Required | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. Example: `"acct_1234567890"`. |
| `elements` | Optional | [PaymentCollectionStripeElements](../models/PaymentCollectionStripeElements.md#paymentcollectionstripeelements) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. `elements`: [field definitions](../models/PaymentCollectionStripe.md#paymentcollectionstripeelements-fields-1). |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

### PaymentCollection.stripe fields 1.elements

Field definitions: [PaymentCollectionStripe.elements fields 1](../models/PaymentCollectionStripe.md#paymentcollectionstripeelements-fields-1).

