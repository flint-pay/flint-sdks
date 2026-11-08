[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalPreview

A preview of a subscription's next renewal and its estimated pricing.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal). |
| `subscription_id` | Required | string | Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

### SubscriptionRenewalPreview.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

