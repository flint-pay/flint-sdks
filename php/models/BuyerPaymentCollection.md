[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentCollection

What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [BuyerPaymentCollectionStripe](../models/BuyerPaymentCollectionStripe.md#buyerpaymentcollectionstripe) | Client configuration for collecting the payment through Stripe. Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return URL, and Elements settings. |

