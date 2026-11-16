[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountUpdatedInstalledMerchantsEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [InventoryCountUpdatedInstalledMerchantsEventDataObject](../models/InventoryCountUpdatedInstalledMerchantsEventDataObject.md#inventorycountupdatedinstalledmerchantseventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. |
| `previous_attributes` | Optional | [InventoryCountUpdatedInstalledMerchantsEventDataPreviousAttributes](../models/InventoryCountUpdatedInstalledMerchantsEventDataPreviousAttributes.md#inventorycountupdatedinstalledmerchantseventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryCountUpdatedInstalledMerchantsEventData.md#inventorycountupdatedinstalledmerchantseventdataprevious_attributes). |

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](InventoryCountAppliedMerchantEventData.md#inventorycountappliedmerchanteventdataprevious_attributes).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.applied_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.idempotency_key

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.inventory_count_id

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesinventory_count_id).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.lines

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.lines](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.location_id

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslocation_id).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.observation_provenance

Declared alternatives: [InventoryCountAppliedMerchantEventData.previous_attributes.observation_provenance](../models/InventoryCountAppliedMerchantEventData.md#inventorycountappliedmerchanteventdataprevious_attributesobservation_provenance).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.status

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.status](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesstatus).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.supported_actions

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributessupported_actions).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountUpdatedInstalledMerchantsEventData.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

