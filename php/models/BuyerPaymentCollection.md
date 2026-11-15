[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentCollection

What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [BuyerPaymentCollectionStripe](../models/BuyerPaymentCollectionStripe.md#buyerpaymentcollectionstripe) | Client configuration for collecting the payment through Stripe. Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return URL, and Elements settings. `stripe`: [field definitions](../models/BuyerPaymentCollection.md#buyerpaymentcollectionstripe-fields-1). |

### BuyerPaymentCollection.stripe fields 1

Client configuration for collecting the payment through Stripe. Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return URL, and Elements settings.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Required | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. Example: `"acct_1234567890"`. |
| `elements` | Optional | [BuyerPaymentCollectionStripeElements](../models/BuyerPaymentCollectionStripeElements.md#buyerpaymentcollectionstripeelements) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. `elements`: [field definitions](../models/BuyerPaymentCollectionStripe.md#buyerpaymentcollectionstripeelements-fields-1). |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

### BuyerPaymentCollection.stripe fields 1.elements

Field definitions: [BuyerPaymentCollectionStripe.elements fields 1](../models/BuyerPaymentCollectionStripe.md#buyerpaymentcollectionstripeelements-fields-1).

