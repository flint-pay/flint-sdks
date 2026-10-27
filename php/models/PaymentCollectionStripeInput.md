[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionStripeInput

Stripe details for collecting payment in the browser: account ID, publishable key, return URL, and Elements options.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string | Stripe account to use when initializing the payment client. |
| `elements` | Optional | [PaymentCollectionStripeElementsInput](../models/PaymentCollectionStripeElementsInput.md#paymentcollectionstripeelementsinput) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

