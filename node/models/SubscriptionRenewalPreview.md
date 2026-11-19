[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalPreview

A preview of a subscription's next renewal and its estimated pricing.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at_if_resumed_now` | Optional | string | Estimated next billing time if the subscriber resumes now and still has paid time left. Omitted when that estimate does not apply. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `mode` | Required | string | The kind of subscription preview. Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) | Estimated charge for the subscription's next renewal. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal). |
| `subscription_id` | Required | string | ID of the subscription the next renewal was estimated for. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

### SubscriptionRenewalPreview.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

