[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundFailedMerchantEvent

The `refund.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [RefundFailedMerchantEventData](../models/RefundFailedMerchantEventData.md#refundfailedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/RefundFailedMerchantEvent.md#refundfailedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"refund.failed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [RefundFailedMerchantEventRequest](../models/RefundFailedMerchantEventRequest.md#refundfailedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### RefundFailedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/RefundCreatedMerchantEvent.md#refundcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/RefundFailedMerchantEvent.md#refundfailedmerchanteventdata-fields-1previous_attributes). |

### RefundFailedMerchantEvent.data fields 1.object

Field definitions: [RefundCreatedMerchantEvent.data fields 1.object](../models/RefundCreatedMerchantEvent.md#refundcreatedmerchanteventdata-fields-1object).

### RefundFailedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributes).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.credit_note_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.credit_note_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributescredit_note_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.customer_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributescustomer_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.failure_reason

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.failure_reason](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesfailure_reason).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.idempotency_key](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesidempotency_key).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.initiated_by

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.initiated_by](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesinitiated_by).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.invoice_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesinvoice_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.line_item_allocations

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.line_item_allocations](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesline_item_allocations).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.order_edit_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.order_edit_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesorder_edit_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.order_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesorder_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.payment_intent_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_intent_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.payment_refunds

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.payment_refunds](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_refunds).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.payment_review_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.payment_review_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_review_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.pending_reason

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.pending_reason](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespending_reason).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.processed_by

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.processed_by](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesprocessed_by).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.reason

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.reason](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreason).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.reason_message

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.reason_message](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreason_message).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.refund_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.refund_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.refund_platform_fee

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_platform_fee).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.refund_reference

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.refund_reference](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_reference).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.refunded_at

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.refunded_at](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefunded_at).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.return_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreturn_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.return_resolution_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.return_resolution_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreturn_resolution_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.status](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesstatus).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.succeeded_at

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.succeeded_at](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributessucceeded_at).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.tax_breakdown_refunds

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.tax_breakdown_refunds](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributestax_breakdown_refunds).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.tender_allocations

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.tender_allocations](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributestender_allocations).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.unissued_gift_card_recoveries

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

