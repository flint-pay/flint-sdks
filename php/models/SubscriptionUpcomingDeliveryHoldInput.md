[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionUpcomingDeliveryHoldInput

A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `fixable_by` | Required | string | Values: `"buyer"`, `"merchant"`. |
| `reason` | Required | string | Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
| `renewal_at` | Required | string | Time of the next renewal affected by this delivery issue. Format: `date-time`. |

