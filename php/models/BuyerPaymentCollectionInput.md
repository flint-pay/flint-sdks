[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentCollectionInput

What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [BuyerPaymentCollectionStripeInput](../models/BuyerPaymentCollectionStripeInput.md#buyerpaymentcollectionstripeinput) | Client configuration for collecting the payment through Stripe. Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return URL, and Elements settings. |

