[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Optional | Array of [CapabilityReadinessPreviousAttributesInput](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinput) or null | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. `capabilities`: [declared alternatives](../models/MerchantReadinessPreviousAttributesInput.md#merchantreadinesspreviousattributesinputcapabilities). |
| `observed_at` | Optional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `payments` | Optional | [ReadinessAxisPreviousAttributesInput](../models/ReadinessAxisPreviousAttributesInput.md#readinessaxispreviousattributesinput) or null | Readiness to accept payments. |
| `payouts` | Optional | [ReadinessAxisPreviousAttributesInput](../models/ReadinessAxisPreviousAttributesInput.md#readinessaxispreviousattributesinput) or null | Readiness to receive payouts. |
| `requirements` | Optional | [ReadinessRequirementsPreviousAttributesInput](../models/ReadinessRequirementsPreviousAttributesInput.md#readinessrequirementspreviousattributesinput) or null | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. |
| `review_blocks_captures` | Optional | boolean or null | Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. `review_blocks_captures`: [declared alternatives](../models/MerchantReadinessPreviousAttributesInput.md#merchantreadinesspreviousattributesinputreview_blocks_captures). |

### MerchantReadinessPreviousAttributesInput.capabilities

### MerchantReadinessPreviousAttributesInput.capabilities variant 1

anyOf variant 1: Readiness of each payment and money movement capability, with its own status, requirements, and next actions..

- Value shape: Array of [CapabilityReadinessPreviousAttributesInput](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinput). Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessPreviousAttributesInput.capabilities variant 2

anyOf variant 2.

- Value shape: null. Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessPreviousAttributesInput.observed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### MerchantReadinessPreviousAttributesInput.review_blocks_captures

### MerchantReadinessPreviousAttributesInput.review_blocks_captures variant 1

anyOf variant 1: Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable..

- Value shape: boolean. Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. 

### MerchantReadinessPreviousAttributesInput.review_blocks_captures variant 2

anyOf variant 2.

- Value shape: null. Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. 

