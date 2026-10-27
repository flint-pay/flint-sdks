[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionInput

Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [PaymentCollectionStripeInput](../models/PaymentCollectionStripeInput.md#paymentcollectionstripeinput) | Client configuration for collecting the payment through Stripe. Stripe details for collecting payment in the browser: account ID, publishable key, return URL, and Elements options. |

