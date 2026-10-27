[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationFailure

A subscription that could not be moved to a new delivery method, with the reason.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `message` | Required | string |  |
| `reason` | Required | string | Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. |
| `subscription_id` | Required | string |  |

