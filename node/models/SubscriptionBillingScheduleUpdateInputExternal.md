[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingScheduleUpdateInputExternal

The `external` variant of `SubscriptionBillingScheduleUpdateInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_billing_at` | Optional | string or null | Future date at which Flint attempts the next charge. Omit to preserve the date or send null to clear it. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `owner` | Required | string | Values: `"external"`. |

