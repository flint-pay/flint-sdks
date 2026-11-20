[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionUpdatedMerchantEvent

The `return_disposition.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ReturnDispositionUpdatedMerchantEventData](../models/ReturnDispositionUpdatedMerchantEventData.md#returndispositionupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnDispositionUpdatedMerchantEvent.md#returndispositionupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_disposition.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnDispositionUpdatedMerchantEventRequest](../models/ReturnDispositionUpdatedMerchantEventRequest.md#returndispositionupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ReturnDispositionUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnDispositionCreatedMerchantEvent.md#returndispositioncreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnDispositionUpdatedMerchantEvent.md#returndispositionupdatedmerchanteventdata-fields-1previous_attributes). |

### ReturnDispositionUpdatedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.object

Field definitions: [ReturnDispositionCreatedMerchantEvent.data fields 1.object](../models/ReturnDispositionCreatedMerchantEvent.md#returndispositioncreatedmerchanteventdata-fields-1object).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.canceled_by

Declared alternatives: [ReturnDispositionPreviousAttributes.canceled_by](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescanceled_by).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.cancellation_reason

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.created_by

Declared alternatives: [ReturnDispositionPreviousAttributes.created_by](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescreated_by).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.disposition_type

Declared alternatives: [ReturnDispositionPreviousAttributes.disposition_type](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesdisposition_type).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.failure_code

Declared alternatives: [ReturnDispositionPreviousAttributes.failure_code](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_code).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.failure_message

Declared alternatives: [ReturnDispositionPreviousAttributes.failure_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_message).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.inventory_location_id

Declared alternatives: [ReturnDispositionPreviousAttributes.inventory_location_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_location_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.inventory_movement_ids

Declared alternatives: [ReturnDispositionPreviousAttributes.inventory_movement_ids](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_movement_ids).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.inventory_receipt_id

Declared alternatives: [ReturnDispositionPreviousAttributes.inventory_receipt_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_receipt_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.occurred_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.reason

Declared alternatives: [ReturnDispositionPreviousAttributes.reason](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.replaced_by_return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributes.replaced_by_return_disposition_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreplaced_by_return_disposition_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.replaces_return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributes.replaces_return_disposition_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreplaces_return_disposition_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_disposition_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_disposition_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.return_inspection_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_inspection_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_inspection_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.return_inspection_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_inspection_line_item_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_inspection_line_item_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.return_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_line_item_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_line_item_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.return_receipt_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_receipt_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_receipt_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.return_receipt_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_receipt_line_item_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_receipt_line_item_id).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ReturnDispositionPreviousAttributes.status](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesstatus).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [ReturnDispositionPreviousAttributes.supported_actions](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributessupported_actions).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ReturnDispositionPreviousAttributes.version](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion).

