[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalPreviewInput

A preview of a subscription's next renewal and its estimated pricing.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at_if_resumed_now` | Optional | string | Estimated next billing time if the subscriber resumes now and still has paid time left. Omitted when that estimate does not apply. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `mode` | Required | string | The kind of subscription preview. Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionRenewalEstimateInput](../models/SubscriptionRenewalEstimateInput.md#subscriptionrenewalestimateinput) | Estimated charge for the subscription's next renewal. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string | ID of the subscription the next renewal was estimated for. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

