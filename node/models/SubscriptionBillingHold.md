[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingHold

A configuration issue preventing subscription billing, with the time Flint first detected it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Required | string | When Flint first detected this billing hold. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason` | Required | string | Why subscription billing cannot proceed. Values: `"configuration"`, `"other"`. |

