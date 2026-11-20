[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditCanceledMerchantEvent

The `order_edit.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [OrderEditCanceledMerchantEventData](../models/OrderEditCanceledMerchantEventData.md#ordereditcanceledmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/OrderEditCanceledMerchantEvent.md#ordereditcanceledmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"order_edit.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [OrderEditCanceledMerchantEventRequest](../models/OrderEditCanceledMerchantEventRequest.md#ordereditcanceledmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### OrderEditCanceledMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`. `object`: [field definitions](../models/OrderEditCanceledMerchantEvent.md#ordereditcanceledmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/OrderEditCanceledMerchantEvent.md#ordereditcanceledmerchanteventdata-fields-1previous_attributes). |

### OrderEditCanceledMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### OrderEditCanceledMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `note`.

Field definitions: [shared fields](OrderEditCanceledMerchantEventData.md#ordereditcanceledmerchanteventdataobject-fields-1).

### OrderEditCanceledMerchantEvent.data fields 1.object.add_line_items[]

Field definitions: [OrderEditResponse.data.add_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataadd_line_items).

### OrderEditCanceledMerchantEvent.data fields 1.object.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### OrderEditCanceledMerchantEvent.data fields 1.object.remove_line_items[]

Field definitions: [OrderEditResponse.data.remove_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributes).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.add_line_items

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesadd_line_items).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.canceled_at

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.canceled_at](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescanceled_at).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.cancellation_reason

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.cancellation_reason](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescancellation_reason).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.charge_refunds

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.charge_refunds](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescharge_refunds).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.completed_at

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.completed_at](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescompleted_at).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.created_at](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescreated_at).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.expires_at](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesexpires_at).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.order_edit_id

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.order_edit_id](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesorder_edit_id).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.order_id](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesorder_id).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.payment_intent_id](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributespayment_intent_id).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.reason

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.reason](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesreason).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.refund_ids

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.refund_ids](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesrefund_ids).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.remove_line_items

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesremove_line_items).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.status](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesstatus).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributessupported_actions).

### OrderEditCanceledMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [OrderEditCanceledMerchantEventDataPreviousAttributes.version](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesversion).

