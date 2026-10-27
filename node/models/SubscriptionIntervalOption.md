[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionIntervalOption

A billing interval, such as every 2 months, offered by a subscription plan.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. minimum: `1`. maximum: `365`. |

