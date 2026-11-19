[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingHold

Why subscription billing is delayed, with the time Flint first detected it. A billing hold does not mean the card was declined.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Required | string | When Flint first detected this billing hold. Format: `date-time`. |
| `reason` | Required | string | Why subscription billing cannot proceed. Treat unrecognized values as other. Values: `"configuration"`, `"retrying"`, `"platform_review"`, `"flint_restriction"`, `"other"`. |
| `retry_at` | Optional | string | When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. Format: `date-time`. |

