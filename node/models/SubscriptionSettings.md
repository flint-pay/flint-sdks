[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionSettings







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_billing_schedule_owner` | Optional | string | Values: `"flint"`, `"external"`. |
| `dunning_end_action` | Optional | string | Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `dunning_retry_days` | Optional | integer | Format: `int32`. |
| `external_dunning_end_action` | Optional | string | Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `send_backordered_email` | Optional | boolean |  |

### SubscriptionSettings variant 1

anyOf variant 1: Declared schema SubscriptionSettings. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email..

No additional constraints.

### SubscriptionSettings variant 2

anyOf variant 2: Declared schema SubscriptionSettingsRequest. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email..

No additional constraints.

