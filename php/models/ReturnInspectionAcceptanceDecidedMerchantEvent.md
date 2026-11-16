[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionAcceptanceDecidedMerchantEvent

The `return_inspection.acceptance_decided` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ReturnInspectionAcceptanceDecidedMerchantEventData](../models/ReturnInspectionAcceptanceDecidedMerchantEventData.md#returninspectionacceptancedecidedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnInspectionAcceptanceDecidedMerchantEvent.md#returninspectionacceptancedecidedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_inspection.acceptance_decided"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnInspectionAcceptanceDecidedMerchantEventRequest](../models/ReturnInspectionAcceptanceDecidedMerchantEventRequest.md#returninspectionacceptancedecidedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnInspectionAcceptanceDecidedMerchantEvent.md#returninspectionacceptancedecidedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnInspectionAcceptanceDecidedMerchantEvent.md#returninspectionacceptancedecidedmerchanteventdata-fields-1previous_attributes). |

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ReturnInspection.md#returninspection).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.object.generated_dispositions[]

Field definitions: [CancelReturnResponse.data.return_dispositions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.object.line_items[]

Field definitions: [CancelReturnResponse.data.return_inspections[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_items).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributes).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.correction_reason

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributescorrection_reason).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.correction_reason_message

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason_message](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributescorrection_reason_message).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.external_actor_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.external_actor_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesexternal_actor_id).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.generated_dispositions

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.generated_dispositions](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesgenerated_dispositions).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.inspected_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.inspection_location_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.inspection_location_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesinspection_location_id).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.line_items](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesline_items).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesreturn_id).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.return_inspection_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_inspection_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesreturn_inspection_id).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.return_receipt_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_receipt_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesreturn_receipt_id).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.status](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesstatus).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.superseded_by_return_inspection_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.superseded_by_return_inspection_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributessuperseded_by_return_inspection_id).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.supersedes_return_inspection_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.supersedes_return_inspection_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributessupersedes_return_inspection_id).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionAcceptanceDecidedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.version](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesversion).

