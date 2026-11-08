[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewResponseDataPromotionApply

Resource, collection, or operation result returned by this request.

A proposed subscription promotion attachment and estimated renewal for its first eligible charged cycle.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | The kind of subscription pricing estimate. Values: `"promotion_apply"`. |
| `promotion` | Required | [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | The promotion as it would attach to this subscription. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles. `promotion`: [field definitions](../models/SubscriptionPreviewResponse.md#subscriptionpreviewresponsedata-variant-7promotion). |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated renewal for the promotion's first_cycle. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/SubscriptionPreviewResponse.md#subscriptionpreviewresponsedata-variant-7renewal). |
| `subscription_id` | Required | string | ID of the subscription being previewed. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionPreviewResponseDataPromotionApply.promotion

Field definitions: [SubscriptionPreviewResponse.data variant 7.promotion](../models/SubscriptionPreviewResponse.md#subscriptionpreviewresponsedata-variant-7promotion).

### SubscriptionPreviewResponseDataPromotionApply.renewal

Field definitions: [SubscriptionPreviewResponse.data variant 7.renewal](../models/SubscriptionPreviewResponse.md#subscriptionpreviewresponsedata-variant-7renewal).

