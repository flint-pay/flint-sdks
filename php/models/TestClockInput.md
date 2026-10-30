[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockInput

A sandbox clock that customers created on it, and their subscriptions, read as the current time.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the test clock was created, in real time. Format: `date-time`. |
| `frozen_at` | Required | string | The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. Format: `date-time`. |
| `name` | Optional | string | Your label for the test clock. Omitted when you didn't set one. minLength: `1`. maxLength: `255`. |
| `status` | Required | string | Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Values: `"ready"`, `"advancing"`, `"failed"`, `"archived"`. |
| `test_clock_id` | Required | string | Unique identifier for the test clock. |
| `updated_at` | Required | string | When the test clock last changed, in real time. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

