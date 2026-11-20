[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyPoolArchivedMerchantEvent

The `license_key_pool.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [LicenseKeyPoolArchivedMerchantEventData](../models/LicenseKeyPoolArchivedMerchantEventData.md#licensekeypoolarchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/LicenseKeyPoolArchivedMerchantEvent.md#licensekeypoolarchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"license_key_pool.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [LicenseKeyPoolArchivedMerchantEventRequest](../models/LicenseKeyPoolArchivedMerchantEventRequest.md#licensekeypoolarchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### LicenseKeyPoolArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/LicenseKeyPoolArchivedMerchantEvent.md#licensekeypoolarchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/LicenseKeyPoolArchivedMerchantEvent.md#licensekeypoolarchivedmerchanteventdata-fields-1previous_attributes). |

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](LicenseKeyPool.md#licensekeypool).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [LicenseKeyPoolResponse.data.metadata](../models/LicenseKeyPoolResponse.md#licensekeypoolresponsedatametadata).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributes).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.available_quantity

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.available_quantity](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesavailable_quantity).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.created_at](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributescreated_at).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.held_quantity

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.held_quantity](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesheld_quantity).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.issued_quantity

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.issued_quantity](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesissued_quantity).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.license_key_pool_id

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.license_key_pool_id](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributeslicense_key_pool_id).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.low_stock_threshold

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.low_stock_threshold](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributeslow_stock_threshold).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.metadata](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesmetadata).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.name](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesname).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.pending_quantity

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.pending_quantity](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributespending_quantity).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.public_validation_enabled

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.public_validation_enabled](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributespublic_validation_enabled).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.removed_quantity

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.removed_quantity](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesremoved_quantity).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.status](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesstatus).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.updated_at](../models/LicenseKeyPoolArchivedMerchantEventDataPreviousAttributes.md#licensekeypoolarchivedmerchanteventdatapreviousattributesupdated_at).

### LicenseKeyPoolArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

