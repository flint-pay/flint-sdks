[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionSummary

A subscription's summary fields, including status, billing period, and next billing time, returned when the subscription is expanded.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Required | integer | Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. Format: `int32`. |
| `cancel_at_period_end` | Required | boolean | True when the subscription is scheduled to cancel instead of renewing. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `current_period_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string | The customer this subscription bills. |
| `next_billing_at` | Optional | string | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. |
| `status` | Required | string | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `subscription_id` | Required | string | Unique identifier for this subscription, prefixed `sub_`. |
| `subscription_plan_id` | Required | string | ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. |
| `supported_actions` | Optional | Array of string | Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. |
| `terms_type` | Required | string | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

