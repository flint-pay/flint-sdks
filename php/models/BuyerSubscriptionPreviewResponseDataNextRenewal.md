[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPreviewResponseDataNextRenewal

Resource, collection, or operation result returned by this request.

A preview of a subscription's next renewal and its estimated pricing.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at_if_resumed_now` | Optional | string | Estimated next billing time if the subscriber resumes now and still has paid time left. Omitted when that estimate does not apply. Format: `date-time`. |
| `mode` | Required | string | The kind of subscription preview. Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated charge for the subscription's next renewal. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal). |
| `subscription_id` | Required | string | ID of the subscription the next renewal was estimated for. |

### BuyerSubscriptionPreviewResponseDataNextRenewal.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

