[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationFailureReasonCount

The number of subscriptions that failed a delivery method migration for one reason.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `count` | Required | integer | Format: `int64`. |
| `reason` | Required | string | Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. |

