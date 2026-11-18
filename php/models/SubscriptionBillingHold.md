[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingHold

A configuration issue preventing subscription billing, with the time Flint first detected it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Required | string | When Flint first detected this billing hold. Format: `date-time`. |
| `reason` | Required | string | Why subscription billing cannot proceed. Values: `"configuration"`, `"other"`. |

