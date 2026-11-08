[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingStartInputScheduled

The `scheduled` variant of `SubscriptionBillingStartInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `starts_at` | Required | string | Future instant when the first billing period starts. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Required | string | Starts the first billing period at starts_at. Values: `"scheduled"`. |

