[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentUpdatedMerchantEvent

The `shipment.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ShipmentUpdatedMerchantEventData](../models/ShipmentUpdatedMerchantEventData.md#shipmentupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ShipmentUpdatedMerchantEvent.md#shipmentupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"shipment.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ShipmentUpdatedMerchantEventRequest](../models/ShipmentUpdatedMerchantEventRequest.md#shipmentupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ShipmentUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ShipmentCreatedMerchantEvent.md#shipmentcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ShipmentUpdatedMerchantEvent.md#shipmentupdatedmerchanteventdata-fields-1previous_attributes). |

### ShipmentUpdatedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### ShipmentUpdatedMerchantEvent.data fields 1.object

Field definitions: [ShipmentCreatedMerchantEvent.data fields 1.object](../models/ShipmentCreatedMerchantEvent.md#shipmentcreatedmerchanteventdata-fields-1object).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributes).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.created_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributescreated_at).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.delivered_at

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.delivered_at](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdelivered_at).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.direction

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.direction](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdirection).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.external_reference_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_reference_id).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.external_system

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.external_system](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_system).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.fulfillment_id

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.fulfillment_id](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesfulfillment_id).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.handed_off_at

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.handed_off_at](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributeshanded_off_at).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.metadata](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesmetadata).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.order_id](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesorder_id).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.package_count

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.package_count](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributespackage_count).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.packages

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.packages](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributespackages).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.return_id](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesreturn_id).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.return_line_items

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.return_line_items](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesreturn_line_items).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.shipment_id

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.shipment_id](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesshipment_id).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.shipped_at

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.shipped_at](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesshipped_at).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.status](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesstatus).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.supported_actions](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributessupported_actions).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.updated_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesupdated_at).

### ShipmentUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ShipmentUpdatedMerchantEventDataPreviousAttributes.version](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesversion).

