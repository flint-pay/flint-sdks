[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SetupCollectionStripe

Stripe connected account details and Elements configuration for saving a payment method.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. |
| `elements` | Optional | [PaymentCollectionStripeElements](../models/PaymentCollectionStripeElements.md#paymentcollectionstripeelements) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. `elements`: [field definitions](../models/PaymentCollectionStripe.md#paymentcollectionstripeelements-fields-1). |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

### SetupCollectionStripe.elements

Field definitions: [PaymentCollectionStripe.elements fields 1](../models/PaymentCollectionStripe.md#paymentcollectionstripeelements-fields-1).

