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
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnResolutionUpdatedMerchantEvent.md#returnresolutionupdatedmerchanteventdata-fields-1previous_attributes). |

### ReturnResolutionUpdatedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.object

Field definitions: [ReturnResolutionCreatedMerchantEvent.data fields 1.object](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1object).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributes).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.action_reason

Declared alternatives: [ReturnResolutionPreviousAttributes.action_reason](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_reason).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.action_required_by

Declared alternatives: [ReturnResolutionPreviousAttributes.action_required_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_required_by).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.adjustments

Declared alternatives: [ReturnResolutionPreviousAttributes.adjustments](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.canceled_by

Declared alternatives: [ReturnResolutionPreviousAttributes.canceled_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescanceled_by).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.cancellation_reason

Declared alternatives: [ReturnResolutionPreviousAttributes.cancellation_reason](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescancellation_reason).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.confirmed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.confirmed_by

Declared alternatives: [ReturnResolutionPreviousAttributes.confirmed_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesconfirmed_by).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.corrects_return_resolution_id

Declared alternatives: [ReturnResolutionPreviousAttributes.corrects_return_resolution_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescorrects_return_resolution_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.created_by

Declared alternatives: [ReturnResolutionPreviousAttributes.created_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescreated_by).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.execution_blockers

Declared alternatives: [ReturnResolutionPreviousAttributes.execution_blockers](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesexecution_blockers).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.failure_code

Declared alternatives: [ReturnResolutionPreviousAttributes.failure_code](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_code).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.failure_message

Declared alternatives: [ReturnResolutionPreviousAttributes.failure_message](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_message).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.fulfilled_at

Declared alternatives: [ReturnResolutionPreviousAttributes.fulfilled_at](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfulfilled_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_refund_destination

Declared alternatives: [ReturnResolutionPreviousAttributes.gift_card_refund_destination](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesgift_card_refund_destination).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [ReturnResolutionPreviousAttributes.line_items](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.payment_intent_ids

Declared alternatives: [ReturnResolutionPreviousAttributes.payment_intent_ids](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intent_ids).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.payment_intents

Declared alternatives: [ReturnResolutionPreviousAttributes.payment_intents](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intents).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.pricing_basis

Declared alternatives: [ReturnResolutionPreviousAttributes.pricing_basis](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespricing_basis).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.refund_ids

Declared alternatives: [ReturnResolutionPreviousAttributes.refund_ids](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefund_ids).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.refunds

Declared alternatives: [ReturnResolutionPreviousAttributes.refunds](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefunds).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.replacement_line_items

Declared alternatives: [ReturnResolutionPreviousAttributes.replacement_line_items](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.replacement_order

Declared alternatives: [ReturnResolutionPreviousAttributes.replacement_order](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_order).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.replacement_order_id

Declared alternatives: [ReturnResolutionPreviousAttributes.replacement_order_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_order_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.resolution_type

Declared alternatives: [ReturnResolutionPreviousAttributes.resolution_type](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesresolution_type).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [ReturnResolutionPreviousAttributes.return_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.return_policy_id

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.return_policy_id](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_policy_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.return_policy_revision_id

Declared alternatives: [ReturnResolutionPreviousAttributes.return_policy_revision_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_policy_revision_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.return_resolution_id

Declared alternatives: [ReturnResolutionPreviousAttributes.return_resolution_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_resolution_id).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ReturnResolutionPreviousAttributes.status](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesstatus).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [ReturnResolutionPreviousAttributes.supported_actions](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributessupported_actions).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ReturnDispositionPreviousAttributes.version](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion).

