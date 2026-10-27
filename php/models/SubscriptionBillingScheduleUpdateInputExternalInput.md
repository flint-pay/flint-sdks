[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingScheduleUpdateInputExternalInput

The `external` variant of `SubscriptionBillingScheduleUpdateInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_billing_at` | Optional | string or null | Future date at which Flint attempts the next charge. Omit to preserve the date or send null to clear it. Format: `date-time`. minLength: `1`. |
| `owner` | Required | string | Values: `"external"`. |

