[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionSettingsRequestInput

Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_billing_schedule_owner` | Optional | string | Values: `"flint"`, `"external"`. |
| `dunning_end_action` | Optional | string | Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `dunning_retry_days` | Optional | integer | Format: `int32`. |
| `external_dunning_end_action` | Optional | string | Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `send_backordered_email` | Optional | boolean |  |

