[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadiness

A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Required | Array of [CapabilityReadiness](../models/CapabilityReadiness.md#capabilityreadiness) |  |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `payments` | Required | [ReadinessAxis](../models/ReadinessAxis.md#readinessaxis) | Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. |
| `payouts` | Required | [ReadinessAxis](../models/ReadinessAxis.md#readinessaxis) | Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. |
| `requirements` | Required | [ReadinessRequirements](../models/ReadinessRequirements.md#readinessrequirements) | Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. |

