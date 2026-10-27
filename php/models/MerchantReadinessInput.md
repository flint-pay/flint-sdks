[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessInput

A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Required | Array of [CapabilityReadinessInput](../models/CapabilityReadinessInput.md#capabilityreadinessinput) |  |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `payments` | Required | [ReadinessAxisInput](../models/ReadinessAxisInput.md#readinessaxisinput) | Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. |
| `payouts` | Required | [ReadinessAxisInput](../models/ReadinessAxisInput.md#readinessaxisinput) | Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. |
| `requirements` | Required | [ReadinessRequirementsInput](../models/ReadinessRequirementsInput.md#readinessrequirementsinput) | Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. |

