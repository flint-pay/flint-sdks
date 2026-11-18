[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeInquiryClosedMerchantEvent

The `dispute.inquiry_closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [DisputeInquiryClosedMerchantEventData](../models/DisputeInquiryClosedMerchantEventData.md#disputeinquiryclosedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DisputeInquiryClosedMerchantEvent.md#disputeinquiryclosedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"dispute.inquiry_closed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DisputeInquiryClosedMerchantEventRequest](../models/DisputeInquiryClosedMerchantEventRequest.md#disputeinquiryclosedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### DisputeInquiryClosedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DisputeCreatedMerchantEvent.md#disputecreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DisputeInquiryClosedMerchantEvent.md#disputeinquiryclosedmerchanteventdata-fields-1previous_attributes). |

### DisputeInquiryClosedMerchantEvent.data fields 1.object

Field definitions: [DisputeCreatedMerchantEvent.data fields 1.object](../models/DisputeCreatedMerchantEvent.md#disputecreatedmerchanteventdata-fields-1object).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributes).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.can_respond_with_evidence

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.can_respond_with_evidence](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescan_respond_with_evidence).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.case_type

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.case_type](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescase_type).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.closed_reason

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.closed_reason](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesclosed_reason).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.customer_id](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributescustomer_id).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.dispute_id

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.dispute_id](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesdispute_id).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.evidence_due_at

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_due_at](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesevidence_due_at).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.evidence_submission_count

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.evidence_submission_count](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesevidence_submission_count).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.fraud_warning_id

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.fraud_warning_id](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesfraud_warning_id).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.has_evidence

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.has_evidence](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributeshas_evidence).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.is_action_required

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_action_required](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesis_action_required).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.is_evidence_deadline_passed

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.is_evidence_deadline_passed](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesis_evidence_deadline_passed).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.network_reason_code

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.network_reason_code](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesnetwork_reason_code).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.order_id](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesorder_id).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.payment_intent

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent_id](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent_id).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.payment_option

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_option](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_option).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.reason

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.reason](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesreason).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.recommended_evidence_types

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.recommended_evidence_types](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesrecommended_evidence_types).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.response_unavailable_reason

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.response_unavailable_reason](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesresponse_unavailable_reason).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.split_reversals

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.split_reversals](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessplit_reversals).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.status](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesstatus).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.status_changed_at

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.status_changed_at](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributesstatus_changed_at).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.supported_actions](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributessupported_actions).

### DisputeInquiryClosedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

