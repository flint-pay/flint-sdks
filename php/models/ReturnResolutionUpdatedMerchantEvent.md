[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionUpdatedMerchantEvent

The `return_resolution.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ReturnResolutionUpdatedMerchantEventData](../models/ReturnResolutionUpdatedMerchantEventData.md#returnresolutionupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnResolutionUpdatedMerchantEvent.md#returnresolutionupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_resolution.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnResolutionUpdatedMerchantEventRequest](../models/ReturnResolutionUpdatedMerchantEventRequest.md#returnresolutionupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ReturnResolutionUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnResolutionUpdatedMerchantEvent.md#returnresolutionupdatedmerchanteventdata-fields-1previous_attributes). |

### ReturnResolutionUpdatedMerchantEvent.data fields 1.object

Field definitions: [ReturnResolutionCreatedMerchantEvent.data fields 1.object](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1object).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnResolutionUpdatedMerchantEventData.md#returnresolutionupdatedmerchanteventdataprevious_attributes).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.action_reason

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.action_reason](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesaction_reason).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.action_required_by

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.action_required_by](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesaction_required_by).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.adjustments

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.adjustments](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesadjustments).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.cancellation_reason

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.cancellation_reason](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributescancellation_reason).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason_message](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason_message).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.confirmed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.corrects_return_resolution_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.corrects_return_resolution_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributescorrects_return_resolution_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.execution_blockers

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.execution_blockers](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesexecution_blockers).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.failure_code

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.failure_code](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfailure_code).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.failure_message

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.failure_message](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfailure_message).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.fulfilled_at

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.fulfilled_at](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfulfilled_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_refund_destination

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.gift_card_refund_destination](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesgift_card_refund_destination).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.line_items](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesline_items).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.payment_intent_ids

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.payment_intent_ids](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespayment_intent_ids).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.payment_intents

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.payment_intents](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespayment_intents).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.pricing_basis

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.pricing_basis](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespricing_basis).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.refund_ids

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.refund_ids](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesrefund_ids).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.refunds

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.refunds](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesrefunds).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.replacement_line_items

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.replacement_line_items](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreplacement_line_items).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.replacement_order_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.replacement_order_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreplacement_order_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.resolution_type

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.resolution_type](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesresolution_type).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.return_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.return_policy_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.return_policy_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_policy_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.return_policy_revision_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.return_policy_revision_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_policy_revision_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.return_resolution_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.return_resolution_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_resolution_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.status](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesstatus).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.supported_actions](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributessupported_actions).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.version](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesversion).

