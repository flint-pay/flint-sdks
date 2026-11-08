[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangeOption







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The store's billing timing for this target: now collects a new period with unused-time credit; next_renewal changes the plan now and keeps the current paid period and next billing date; period_end keeps the current plan until the next charged renewal; prorated_now charges the difference for the rest of the current period and keeps the period and anchor. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `subscription_plan_id` | Required | string | The target subscription plan offered for buyer plan changes. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |

### SubscriptionPlanChangeOption variant 1

anyOf variant 1: Declared schema SubscriptionPlanChangeOption. A target plan subscribers may switch to and the billing timing for that change..

No additional constraints.

### SubscriptionPlanChangeOption variant 2

anyOf variant 2: Declared schema SubscriptionPlanChangeOptionRequest. A target plan subscribers may switch to and the billing timing for that change..

No additional constraints.

