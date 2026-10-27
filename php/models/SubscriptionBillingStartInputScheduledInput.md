[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingStartInputScheduledInput

The `scheduled` variant of `SubscriptionBillingStartInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `starts_at` | Required | string | Future instant when the first billing period starts. Format: `date-time`. minLength: `1`. |
| `type` | Required | string | Values: `"scheduled"`. |

