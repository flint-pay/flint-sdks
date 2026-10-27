[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalPreviewInput

A preview of a subscription's next renewal and its estimated pricing.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionRenewalEstimateInput](../models/SubscriptionRenewalEstimateInput.md#subscriptionrenewalestimateinput) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |

