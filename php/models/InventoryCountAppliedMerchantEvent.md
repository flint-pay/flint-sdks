[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountAppliedMerchantEvent

The `inventory_count.applied` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [InventoryCountAppliedMerchantEventData](../models/InventoryCountAppliedMerchantEventData.md#inventorycountappliedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InventoryCountAppliedMerchantEvent.md#inventorycountappliedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"inventory_count.applied"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryCountAppliedMerchantEventRequest](../models/InventoryCountAppliedMerchantEventRequest.md#inventorycountappliedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### InventoryCountAppliedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InventoryCountAppliedMerchantEvent.md#inventorycountappliedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryCountAppliedMerchantEvent.md#inventorycountappliedmerchanteventdata-fields-1previous_attributes). |

### InventoryCountAppliedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InventoryCount.md#inventorycount).

### InventoryCountAppliedMerchantEvent.data fields 1.object.lines[]

Field definitions: [InventoryCountResponse.data.lines[]](../models/InventoryCountResponse.md#inventorycountresponsedatalines).

### InventoryCountAppliedMerchantEvent.data fields 1.object.observation_provenance

Field definitions: [InventoryCountResponse.data.observation_provenance](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenance).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributes).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.applied_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.inventory_count_id

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesinventory_count_id).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.lines

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.lines](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.location_id

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslocation_id).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.observation_provenance

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.status](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesstatus).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributessupported_actions).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

