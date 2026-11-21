[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadiness

A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Required | Array of [CapabilityReadiness](../models/CapabilityReadiness.md#capabilityreadiness) | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. `capabilities[]`: [field definitions](../models/MerchantResponse.md#merchantresponsedatareadinesscapabilities). |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `payments` | Required | [ReadinessAxis](../models/ReadinessAxis.md#readinessaxis) | Readiness to accept payments. Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. `payments`: [field definitions](../models/MerchantResponse.md#merchantresponsedatareadinesspayments). |
| `payouts` | Required | [ReadinessAxis](../models/ReadinessAxis.md#readinessaxis) | Readiness to receive payouts. Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. `payouts`: [field definitions](../models/MerchantResponse.md#merchantresponsedatareadinesspayouts). |
| `requirements` | Required | [ReadinessRequirements](../models/ReadinessRequirements.md#readinessrequirements) | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. `requirements`: [field definitions](../models/MerchantResponse.md#merchantresponsedatareadinessrequirements). |
| `review_blocks_captures` | Optional | boolean | Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. |

### MerchantReadiness.capabilities[]

Field definitions: [MerchantResponse.data.readiness.capabilities[]](../models/MerchantResponse.md#merchantresponsedatareadinesscapabilities).

### MerchantReadiness.payments

Field definitions: [MerchantResponse.data.readiness.payments](../models/MerchantResponse.md#merchantresponsedatareadinesspayments).

### MerchantReadiness.payouts

Field definitions: [MerchantResponse.data.readiness.payouts](../models/MerchantResponse.md#merchantresponsedatareadinesspayouts).

### MerchantReadiness.requirements

Field definitions: [MerchantResponse.data.readiness.requirements](../models/MerchantResponse.md#merchantresponsedatareadinessrequirements).

