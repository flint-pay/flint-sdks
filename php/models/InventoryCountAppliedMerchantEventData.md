[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountAppliedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [InventoryCountAppliedMerchantEventDataObject](../models/InventoryCountAppliedMerchantEventDataObject.md#inventorycountappliedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. |
| `previous_attributes` | Optional | [InventoryCountAppliedMerchantEventDataPreviousAttributes](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryCountAppliedMerchantEventData.md#inventorycountappliedmerchanteventdataprevious_attributes). |

### InventoryCountAppliedMerchantEventData.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string or null | RFC3339 timestamp. `applied_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. `idempotency_key`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key). |
| `inventory_count_id` | Optional | string or null | Unique identifier for this inventory count, prefixed `invc_`. `inventory_count_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesinventory_count_id). |
| `lines` | Optional | Array of [InventoryCountLine](../models/InventoryCountLine.md#inventorycountline) or null | Count lines, one for each inventory item being counted. `lines`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines). |
| `location_id` | Optional | string or null | ID of the Location whose stock is counted. `location_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslocation_id). |
| `observation_provenance` | Optional | [InventoryCountObservationProvenance](../models/InventoryCountObservationProvenance.md#inventorycountobservationprovenance) or null | Source system, actor, and time reported with the count's observations. `observation_provenance`: [declared alternatives](../models/InventoryCountAppliedMerchantEventData.md#inventorycountappliedmerchanteventdataprevious_attributesobservation_provenance). |
| `status` | Optional | string or null | Whether the count is still open. Applying or canceling a `draft` count ends it. Values: `"draft"`, `"applied"`, `"canceled"`. `status`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### InventoryCountAppliedMerchantEventData.previous_attributes.applied_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventData.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventData.previous_attributes.idempotency_key

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key).

### InventoryCountAppliedMerchantEventData.previous_attributes.inventory_count_id

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesinventory_count_id).

### InventoryCountAppliedMerchantEventData.previous_attributes.lines

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.lines](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines).

### InventoryCountAppliedMerchantEventData.previous_attributes.location_id

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslocation_id).

### InventoryCountAppliedMerchantEventData.previous_attributes.observation_provenance

Source system, actor, and time reported with the count's observations.

Field definitions: [shared fields](InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance).

### InventoryCountAppliedMerchantEventData.previous_attributes.observation_provenance variant 1

anyOf InventoryCountObservationProvenance: Source system, actor, and time reported with the count's observations..

- Required: `source_system`.
- Optional: `external_actor_id`, `occurred_at`.

### InventoryCountAppliedMerchantEventData.previous_attributes.observation_provenance variant 2

anyOf variant 2.

- Undeclared: `external_actor_id`, `occurred_at`, `source_system`.
- Value shape: null. Source system, actor, and time reported with the count's observations. 

### InventoryCountAppliedMerchantEventData.previous_attributes.status

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.status](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesstatus).

### InventoryCountAppliedMerchantEventData.previous_attributes.supported_actions

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributessupported_actions).

### InventoryCountAppliedMerchantEventData.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventData.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

