[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPreviewResponseDataNextRenewal

A preview of a subscription's next renewal and its estimated pricing.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal). |
| `subscription_id` | Required | string |  |

### BuyerSubscriptionPreviewResponseDataNextRenewal.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

