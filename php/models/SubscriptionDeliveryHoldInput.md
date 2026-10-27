[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryHoldInput

A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `fixable_by` | Required | string | Values: `"buyer"`, `"merchant"`. |
| `reason` | Required | string | Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
| `started_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

