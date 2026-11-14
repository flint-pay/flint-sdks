[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequestPlanChange

The `plan_change` variant of `CreateMeSubscriptionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `mode` | Required | string | The subscription change to preview. Values: `"plan_change"`. |
| `quantity` | Optional | integer | Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use line_items for multiple units. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `1`. |
| `subscription_id` | Required | string | The buyer's subscription to preview a plan change for. minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan_id` | Required | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |

