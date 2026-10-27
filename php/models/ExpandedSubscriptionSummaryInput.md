[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionSummaryInput

A subscription's summary fields, including status, billing period, and next billing time, returned when the subscription is expanded.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Required | integer | Format: `int32`. |
| `cancel_at_period_end` | Required | boolean |  |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `next_billing_at` | Optional | string | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports awaiting_billing_schedule. Format: `date-time`. |
| `status` | Required | string | Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `subscription_id` | Required | string |  |
| `subscription_plan_id` | Required | string |  |
| `terms_type` | Required | string | Values: `"subscription_plan"`, `"subscription_offer"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

