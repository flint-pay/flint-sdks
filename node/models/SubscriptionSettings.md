[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionSettings







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_billing_schedule_owner` | Optional | string | Who sets billing dates for a new subscription that doesn't send `billing_schedule`. Defaults to `flint`. Values: `"flint"`, `"external"`. |
| `dunning_end_action` | Optional | string | What happens to a subscription that Flint bills when every payment retry has failed. Defaults to `cancel`. Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `dunning_retry_days` | Optional | integer | Days automatic payment retries run after a renewal fails, from 1 to 90. Defaults to 16. Format: `int32`. minimum: `1`. maximum: `90`. Default: `16`. |
| `external_dunning_end_action` | Optional | string | What happens to a subscription with an external billing schedule when every payment retry has failed. Defaults to `notify_only`. Values: `"cancel"`, `"pause"`, `"notify_only"`. |
| `send_backordered_email` | Optional | boolean | Whether Flint emails the buyer when a renewal waits on stock. Defaults to false. |

### SubscriptionSettings variant 1

anyOf variant 1: Declared schema SubscriptionSettings. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email..

No additional constraints.

### SubscriptionSettings variant 2

anyOf variant 2: Declared schema SubscriptionSettingsRequest. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email..

No additional constraints.

