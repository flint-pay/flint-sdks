[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscribedLineRequest

Makes an order line a subscription purchase, with the subscription offer and billing interval.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. minimum: `1`. maximum: `365`. |
| `subscription_offer_id` | Required | string | Active subscription offer for this catalog variant. minLength: `1`. |

