[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountAppliedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string or null | RFC3339 timestamp. `applied_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. `idempotency_key`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key). |
| `inventory_count_id` | Optional | string or null | Unique identifier for this inventory count, prefixed `invc_`. `inventory_count_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesinventory_count_id). |
| `lines` | Optional | Array of [InventoryCountLine](../models/InventoryCountLine.md#inventorycountline) or null | Count lines, one for each inventory item being counted. `lines`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines). |
| `location_id` | Optional | string or null | ID of the Location whose stock is counted. `location_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslocation_id). |
| `observation_provenance` | Optional | [InventoryCountObservationProvenance](../models/InventoryCountObservationProvenance.md#inventorycountobservationprovenance) or null | Source system, actor, and time reported with the count's observations. `observation_provenance`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance). |
| `status` | Optional | string or null | Whether the count is still open. Applying or canceling a `draft` count ends it. Values: `"draft"`, `"applied"`, `"canceled"`. `status`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### InventoryCountAppliedMerchantEventDataPreviousAttributes.applied_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key

### InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key variant 1

anyOf variant 1: The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key..

- Value shape: string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id

### InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id variant 1

anyOf variant 1: Unique identifier for this inventory count, prefixed `invc_`..

- Value shape: string. Unique identifier for this inventory count, prefixed `invc_`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory count, prefixed `invc_`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1

anyOf variant 1: Count lines, one for each inventory item being counted..

- Value shape: Array of [InventoryCountLine](../models/InventoryCountLine.md#inventorycountline). Count lines, one for each inventory item being counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 2

anyOf variant 2.

- Value shape: null. Count lines, one for each inventory item being counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1

Field definitions: [InventoryCountResponse.data.lines[]](../models/InventoryCountResponse.md#inventorycountresponsedatalines).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id

### InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location whose stock is counted..

- Value shape: string. ID of the Location whose stock is counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location whose stock is counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance

Source system, actor, and time reported with the count's observations.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Conditional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `occurred_at` | Conditional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. |
| `source_system` | Conditional | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. |

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1

anyOf InventoryCountObservationProvenance: Source system, actor, and time reported with the count's observations..

- Required: `source_system`.
- Optional: `external_actor_id`, `occurred_at`.

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 2

anyOf variant 2.

- Undeclared: `external_actor_id`, `occurred_at`, `source_system`.
- Value shape: null. Source system, actor, and time reported with the count's observations. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.status

### InventoryCountAppliedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the count is still open. Applying or canceling a `draft` count ends it..

- Value shape: string. Whether the count is still open. Applying or canceling a `draft` count ends it. Values: `"draft"`, `"applied"`, `"canceled"`.

### InventoryCountAppliedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the count is still open. Applying or canceling a `draft` count ends it. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions

### InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled..

- Value shape: Array of string. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`.

### InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

