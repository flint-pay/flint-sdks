[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewClosedMerchantEvent

The `payment_review.closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PaymentReviewClosedMerchantEventData](../models/PaymentReviewClosedMerchantEventData.md#paymentreviewclosedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_review.closed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentReviewClosedMerchantEventRequest](../models/PaymentReviewClosedMerchantEventRequest.md#paymentreviewclosedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PaymentReviewClosedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1previous_attributes). |

### PaymentReviewClosedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### PaymentReviewClosedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentReview.md#paymentreview).

### PaymentReviewClosedMerchantEvent.data fields 1.object.payment_summary

Field definitions: [PaymentReviewResponse.data.payment_summary](../models/PaymentReviewResponse.md#paymentreviewresponsedatapayment_summary).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributes).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.closed_at

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_at](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesclosed_at).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.closed_by

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_by](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesclosed_by).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.closed_reason

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_reason](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesclosed_reason).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.customer_id](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributescustomer_id).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.ip_address

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.ip_address](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesip_address).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.last_resolution_failure

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.last_resolution_failure](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributeslast_resolution_failure).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.matched_risk_rule_id

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.matched_risk_rule_id](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesmatched_risk_rule_id).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.opened_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.opened_reason

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.opened_reason](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesopened_reason).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.order_id](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesorder_id).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.payment_flow

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_flow](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_flow).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.payment_intent

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_intent_id](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_intent_id).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.payment_review_id

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_review_id](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_review_id).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.payment_summary

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_summary).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.pending_action

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.pending_action](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespending_action).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.refund_id

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.refund_id](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesrefund_id).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.resolution_started_at

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_at](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesresolution_started_at).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.resolution_started_by

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_by](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesresolution_started_by).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.status](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesstatus).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [PaymentReviewClosedMerchantEventDataPreviousAttributes.supported_actions](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributessupported_actions).

### PaymentReviewClosedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

