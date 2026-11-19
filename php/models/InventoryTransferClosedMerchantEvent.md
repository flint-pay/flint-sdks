[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferClosedMerchantEvent

The `inventory_transfer.closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [InventoryTransferClosedMerchantEventData](../models/InventoryTransferClosedMerchantEventData.md#inventorytransferclosedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"inventory_transfer.closed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InventoryTransferClosedMerchantEventRequest](../models/InventoryTransferClosedMerchantEventRequest.md#inventorytransferclosedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### InventoryTransferClosedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryTransferClosedMerchantEvent.md#inventorytransferclosedmerchanteventdata-fields-1previous_attributes). |

### InventoryTransferClosedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InventoryTransferClosedMerchantEventDataObject.md#inventorytransferclosedmerchanteventdataobject).

### InventoryTransferClosedMerchantEvent.data fields 1.object.lines[]

Field definitions: [InventoryTransferResponse.data.lines[]](../models/InventoryTransferResponse.md#inventorytransferresponsedatalines).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributes).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.closed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.closed_reason

Declared alternatives: [InventoryTransferClosedMerchantEventDataPreviousAttributes.closed_reason](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesclosed_reason).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.departed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.destination_location_id

Declared alternatives: [InventoryTransferClosedMerchantEventDataPreviousAttributes.destination_location_id](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesdestination_location_id).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.inventory_transfer_id

Declared alternatives: [InventoryTransferClosedMerchantEventDataPreviousAttributes.inventory_transfer_id](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesinventory_transfer_id).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.lines

Declared alternatives: [InventoryTransferClosedMerchantEventDataPreviousAttributes.lines](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributeslines).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.note

Declared alternatives: [InventoryTransferClosedMerchantEventDataPreviousAttributes.note](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesnote).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.origin_location_id

Declared alternatives: [InventoryTransferClosedMerchantEventDataPreviousAttributes.origin_location_id](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesorigin_location_id).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [InventoryTransferClosedMerchantEventDataPreviousAttributes.status](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesstatus).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [InventoryTransferClosedMerchantEventDataPreviousAttributes.supported_actions](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributessupported_actions).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

