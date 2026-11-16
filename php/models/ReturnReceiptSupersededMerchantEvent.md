[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptSupersededMerchantEvent

The `return_receipt.superseded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ReturnReceiptSupersededMerchantEventData](../models/ReturnReceiptSupersededMerchantEventData.md#returnreceiptsupersededmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnReceiptSupersededMerchantEvent.md#returnreceiptsupersededmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_receipt.superseded"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnReceiptSupersededMerchantEventRequest](../models/ReturnReceiptSupersededMerchantEventRequest.md#returnreceiptsupersededmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ReturnReceiptSupersededMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnReceiptCreatedMerchantEvent.md#returnreceiptcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnReceiptSupersededMerchantEvent.md#returnreceiptsupersededmerchanteventdata-fields-1previous_attributes). |

### ReturnReceiptSupersededMerchantEvent.data fields 1.object

Field definitions: [ReturnReceiptCreatedMerchantEvent.data fields 1.object](../models/ReturnReceiptCreatedMerchantEvent.md#returnreceiptcreatedmerchanteventdata-fields-1object).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributes).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.correction_reason

Declared alternatives: [ReturnInspectionPreviousAttributes.correction_reason](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.correction_reason_message

Declared alternatives: [ReturnInspectionPreviousAttributes.correction_reason_message](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason_message).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.external_actor_id

Declared alternatives: [InventoryCountObservationProvenancePreviousAttributes.external_actor_id](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesexternal_actor_id).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.generated_dispositions

Declared alternatives: [ReturnInspectionPreviousAttributes.generated_dispositions](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [ReturnReceiptPreviousAttributes.line_items](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.receiving_location_id

Declared alternatives: [ReturnReceiptPreviousAttributes.receiving_location_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesreceiving_location_id).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [ReturnInspectionPreviousAttributes.return_id](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesreturn_id).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributes.return_receipt_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesreturn_receipt_id).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.shipment_id

Declared alternatives: [ReturnReceiptPreviousAttributes.shipment_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesshipment_id).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.source_system

Declared alternatives: [ReturnInspectionPreviousAttributes.source_system](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ReturnInspectionPreviousAttributes.status](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesstatus).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.superseded_by_return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributes.superseded_by_return_receipt_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributessuperseded_by_return_receipt_id).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.supersedes_return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributes.supersedes_return_receipt_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributessupersedes_return_receipt_id).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptSupersededMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ReturnInspectionPreviousAttributes.version](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesversion).

