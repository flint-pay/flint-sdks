[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanTermsRequest

The `subscription_plan` variant of `SubscriptionTermsInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `365`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `100`. Default: `1`. |
| `subscription_plan_id` | Required | string | minLength: `1`. |
| `type` | Required | string | Values: `"subscription_plan"`. |

