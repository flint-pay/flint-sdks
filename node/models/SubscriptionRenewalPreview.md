[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalPreview

A preview of a subscription's next renewal and its estimated pricing.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |

