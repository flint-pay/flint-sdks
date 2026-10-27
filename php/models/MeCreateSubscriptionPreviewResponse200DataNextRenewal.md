[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateSubscriptionPreviewResponse200DataNextRenewal

A preview of a subscription's next renewal and its estimated pricing.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/MeCreateSubscriptionPreviewResponse200.md#mecreatesubscriptionpreviewresponse200data-variant-2renewal). |
| `subscription_id` | Required | string |  |

### MeCreateSubscriptionPreviewResponse200DataNextRenewal.renewal

Field definitions: [MeCreateSubscriptionPreviewResponse200.data variant 2.renewal](../models/MeCreateSubscriptionPreviewResponse200.md#mecreatesubscriptionpreviewresponse200data-variant-2renewal).

