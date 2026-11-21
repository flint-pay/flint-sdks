[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Optional | Array of [CapabilityReadinessPreviousAttributes](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributes) or null | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. `capabilities`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities). |
| `observed_at` | Optional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `payments` | Optional | [ReadinessAxisPreviousAttributes](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributes) or null | Readiness to accept payments. |
| `payouts` | Optional | [ReadinessAxisPreviousAttributes](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributes) or null | Readiness to receive payouts. |
| `requirements` | Optional | [ReadinessRequirementsPreviousAttributes](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributes) or null | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. |
| `review_blocks_captures` | Optional | boolean or null | Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. `review_blocks_captures`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributesreview_blocks_captures). |

### MerchantReadinessPreviousAttributes.capabilities

### MerchantReadinessPreviousAttributes.capabilities variant 1

anyOf variant 1: Readiness of each payment and money movement capability, with its own status, requirements, and next actions..

- Value shape: Array of [CapabilityReadinessPreviousAttributes](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributes). Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessPreviousAttributes.capabilities variant 2

anyOf variant 2.

- Value shape: null. Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessPreviousAttributes.observed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### MerchantReadinessPreviousAttributes.review_blocks_captures

### MerchantReadinessPreviousAttributes.review_blocks_captures variant 1

anyOf variant 1: Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable..

- Value shape: boolean. Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. 

### MerchantReadinessPreviousAttributes.review_blocks_captures variant 2

anyOf variant 2.

- Value shape: null. Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. 

