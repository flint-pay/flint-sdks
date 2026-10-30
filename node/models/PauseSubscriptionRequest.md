[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PauseSubscriptionRequest

The request body for: Pause one of the current buyer's subscriptions; Pause subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `pause_duration_cycles` | Optional | integer | Billing cycles to pause for, at least 1. Omit it to pause until the subscription is resumed. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the same pause length returns the paused subscription; changing the length requires resuming first. When the store's customer_account.buyer_capabilities.pause.max_cycles is set, a buyer must send a value from 1 to that limit. Format: `int32`. minimum: `1`. |

