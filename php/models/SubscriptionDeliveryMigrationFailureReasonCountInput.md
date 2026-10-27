[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationFailureReasonCountInput

The number of subscriptions that failed a delivery method migration for one reason.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Required | string | Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. |

