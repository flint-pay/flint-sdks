[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanTermsRequestInput

The `subscription_plan` variant of `SubscriptionTermsInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `365`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `1`. Default: `1`. |
| `subscription_plan_id` | Required | string | minLength: `1`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `type` | Required | string | Values: `"subscription_plan"`. |

