[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentCollectionStripe

Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return URL, and Elements settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Required | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. Example: `"acct_1234567890"`. |
| `elements` | Optional | [BuyerPaymentCollectionStripeElements](../models/BuyerPaymentCollectionStripeElements.md#buyerpaymentcollectionstripeelements) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

