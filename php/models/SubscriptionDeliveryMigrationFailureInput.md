[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationFailureInput

A subscription that could not be moved to a new delivery method, with the reason.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `message` | Required | string | Plain-language explanation of the failure. |
| `reason` | Required | string | Why the subscription could not be moved. Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. |
| `subscription_id` | Required | string | ID of the subscription that could not be moved. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

