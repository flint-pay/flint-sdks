[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevelShortageDetectedMerchantEvent

The `inventory_level.shortage_detected` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [InventoryLevelShortageDetectedMerchantEventData](../models/InventoryLevelShortageDetectedMerchantEventData.md#inventorylevelshortagedetectedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InventoryLevelShortageDetectedMerchantEvent.md#inventorylevelshortagedetectedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"inventory_level.shortage_detected"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryLevelShortageDetectedMerchantEventRequest](../models/InventoryLevelShortageDetectedMerchantEventRequest.md#inventorylevelshortagedetectedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### InventoryLevelShortageDetectedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InventoryLevelShortageDetectedMerchantEvent.md#inventorylevelshortagedetectedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryLevelShortageDetectedMerchantEvent.md#inventorylevelshortagedetectedmerchanteventdata-fields-1previous_attributes). |

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InventoryLevel.md#inventorylevel).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.object.inventory_item

Field definitions: [InventoryLevelResponse.data.inventory_item](../models/InventoryLevelResponse.md#inventorylevelresponsedatainventory_item).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributes).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.available_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.available_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesavailable_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.backordered_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.backordered_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.claim_version

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.claim_version](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesclaim_version).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.committed_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.committed_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributescommitted_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.damaged_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.damaged_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesdamaged_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.held_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.held_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesheld_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.incoming_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.incoming_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesincoming_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.inventory_item_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item_id).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.inventory_level_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_level_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_level_id).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.location_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.location_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributeslocation_id).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.on_hand_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.on_hand_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributeson_hand_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.physical_version

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.physical_version](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesphysical_version).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.quality_control_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.quality_control_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesquality_control_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.quarantined_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.quarantined_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesquarantined_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.safety_stock_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.safety_stock_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributessafety_stock_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.shortage_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.shortage_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesshortage_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.unavailable_on_hand_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.unavailable_on_hand_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesunavailable_on_hand_quantity).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryLevelShortageDetectedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.version](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesversion).

