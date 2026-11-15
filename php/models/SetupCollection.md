[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SetupCollection

Client guidance for saving a payment method on the merchant's connected account.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [SetupCollectionStripe](../models/SetupCollectionStripe.md#setupcollectionstripe) | Client configuration for saving a payment method through Stripe on the merchant's connected account. Stripe connected account details and Elements configuration for saving a payment method. `stripe`: [field definitions](../models/SetupCollection.md#setupcollectionstripe-fields-1). |

### SetupCollection.stripe fields 1

Client configuration for saving a payment method through Stripe on the merchant's connected account. Stripe connected account details and Elements configuration for saving a payment method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. |
| `elements` | Optional | [PaymentCollectionStripeElements](../models/PaymentCollectionStripeElements.md#paymentcollectionstripeelements) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. `elements`: [field definitions](../models/PaymentCollectionStripe.md#paymentcollectionstripeelements-fields-1). |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

### SetupCollection.stripe fields 1.elements

Field definitions: [PaymentCollectionStripe.elements fields 1](../models/PaymentCollectionStripe.md#paymentcollectionstripeelements-fields-1).

