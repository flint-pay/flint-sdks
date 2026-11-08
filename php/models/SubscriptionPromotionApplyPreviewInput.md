[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotionApplyPreviewInput

A proposed subscription promotion attachment and estimated renewal for its first eligible charged cycle.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | The kind of subscription pricing estimate. Values: `"promotion_apply"`. |
| `promotion` | Required | [SubscriptionPromotionInput](../models/SubscriptionPromotionInput.md#subscriptionpromotioninput) | The promotion as it would attach to this subscription. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles. |
| `renewal` | Required | [SubscriptionRenewalEstimateInput](../models/SubscriptionRenewalEstimateInput.md#subscriptionrenewalestimateinput) | Estimated renewal for the promotion's first_cycle. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string | ID of the subscription being previewed. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

