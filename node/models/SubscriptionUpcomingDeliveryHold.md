[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionUpcomingDeliveryHold

A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fixable_by` | Required | string | Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Values: `"buyer"`, `"merchant"`. |
| `reason` | Required | string | Why the subscription's delivery needs attention. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
| `renewal_at` | Required | string | Time of the next renewal affected by this delivery issue. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

