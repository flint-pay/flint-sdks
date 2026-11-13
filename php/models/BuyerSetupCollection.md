[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSetupCollection

Client guidance for saving a payment method on the merchant's connected account.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [BuyerSetupCollectionStripe](../models/BuyerSetupCollectionStripe.md#buyersetupcollectionstripe) | Client configuration for saving a payment method through Stripe on the merchant's connected account. Stripe connected account details and Elements configuration for saving a payment method. `stripe`: [field definitions](../models/BuyerSetupCollection.md#buyersetupcollectionstripe-fields-1). |

### BuyerSetupCollection.stripe fields 1

Client configuration for saving a payment method through Stripe on the merchant's connected account. Stripe connected account details and Elements configuration for saving a payment method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example: `"acct_1234567890"`. |
| `elements` | Optional | [BuyerPaymentCollectionStripeElements](../models/BuyerPaymentCollectionStripeElements.md#buyerpaymentcollectionstripeelements) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. `elements`: [field definitions](../models/BuyerPaymentCollectionStripe.md#buyerpaymentcollectionstripeelements-fields-1). |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

### BuyerSetupCollection.stripe fields 1.elements

Field definitions: [BuyerPaymentCollectionStripe.elements fields 1](../models/BuyerPaymentCollectionStripe.md#buyerpaymentcollectionstripeelements-fields-1).

