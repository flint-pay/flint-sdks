[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessInput

A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Required | Array of [CapabilityReadinessInput](../models/CapabilityReadinessInput.md#capabilityreadinessinput) | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payments` | Required | [ReadinessAxisInput](../models/ReadinessAxisInput.md#readinessaxisinput) | Readiness to accept payments. Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. |
| `payouts` | Required | [ReadinessAxisInput](../models/ReadinessAxisInput.md#readinessaxisinput) | Readiness to receive payouts. Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. |
| `requirements` | Required | [ReadinessRequirementsInput](../models/ReadinessRequirementsInput.md#readinessrequirementsinput) | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. |

