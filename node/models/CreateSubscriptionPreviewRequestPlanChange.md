[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestPlanChange

The `plan_change` variant of `CreateSubscriptionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `billing_starts` | Required | string | now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. period_end keeps the current plan until the next charged renewal, then applies and bills the scheduled terms. prorated_now charges the new terms for the rest of the current period, less unused paid item credit, and keeps the billing period and anchor. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `line_items` | Optional | Array of [SubscriptionPlanChangeLineItemRequest](../models/SubscriptionPlanChangeLineItemRequest.md#subscriptionplanchangelineitemrequest) | Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their paired current line's quantity, or use the target line's quantity when unpaired. If an adjusted current quantity cannot be paired, send a quantity for every target line. |
| `mode` | Required | string | Values: `"plan_change"`. |
| `quantity` | Optional | integer | Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use line_items for multiple units. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `1`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan_id` | Required | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |

