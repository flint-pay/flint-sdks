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

Declared alternatives: [BuyerRefundPreviousAttributes.credit_note_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_note_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [BuyerRefundPreviousAttributes.idempotency_key](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.initiated_by

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.initiated_by](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesinitiated_by).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.invoice_id

Declared alternatives: [BuyerRefundPreviousAttributes.invoice_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesinvoice_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.line_item_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.order_edit_id

Declared alternatives: [BuyerRefundPreviousAttributes.order_edit_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_edit_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [BuyerRefundPreviousAttributes.order_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.payment_intent

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [BuyerRefundPreviousAttributes.payment_intent_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_intent_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.payment_refunds

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.payment_refunds](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_refunds).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.payment_review_id

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.payment_review_id](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_review_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.pending_reason

Declared alternatives: [BuyerRefundPreviousAttributes.pending_reason](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.processed_by

Declared alternatives: [BuyerRefundPreviousAttributes.processed_by](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.reason

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.reason](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreason).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.reason_message

Declared alternatives: [BuyerRefundPreviousAttributes.reason_message](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.refund_id

Declared alternatives: [BuyerRefundPreviousAttributes.refund_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.refund_platform_fee

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_platform_fee).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.refund_reference

Declared alternatives: [BuyerRefundPreviousAttributes.refund_reference](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.refunded_at

Declared alternatives: [BuyerRefundPreviousAttributes.refunded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefunded_at).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [BuyerRefundPreviousAttributes.return_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.return_resolution_id

Declared alternatives: [BuyerRefundPreviousAttributes.return_resolution_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_resolution_id).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [BuyerRefundPreviousAttributes.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.succeeded_at

Declared alternatives: [BuyerRefundPreviousAttributes.succeeded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributessucceeded_at).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.tax_breakdown_refunds

Declared alternatives: [BuyerRefundPreviousAttributes.tax_breakdown_refunds](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.tender_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.tender_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.unissued_gift_card_recoveries

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### RefundFailedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

