[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestPlanChangeInput

The `plan_change` variant of `CreateSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `billing_starts` | Required | string | now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. Values: `"now"`, `"next_renewal"`. |
| `line_items` | Optional | Array of [SubscriptionPlanChangeLineItemRequestInput](../models/SubscriptionPlanChangeLineItemRequestInput.md#subscriptionplanchangelineitemrequestinput) | Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their paired current line's quantity, or use the target line's quantity when unpaired. If an adjusted current quantity cannot be paired, send a quantity for every target line. |
| `mode` | Required | string | Values: `"plan_change"`. |
| `quantity` | Optional | integer | Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `subscription_plan_id` | Required | string | minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |

