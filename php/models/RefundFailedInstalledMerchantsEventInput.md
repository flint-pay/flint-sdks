[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundFailedInstalledMerchantsEventInput

The `refund.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"refund.failed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### RefundFailedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/RefundCreatedInstalledMerchantsEventInput.md#refundcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object and [RefundPreviousAttributesInput](../models/RefundPreviousAttributesInput.md#refundpreviousattributesinput) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributes). |

### RefundFailedInstalledMerchantsEventInput.data.object

Field definitions: [RefundCreatedInstalledMerchantsEventInput.data.object](../models/RefundCreatedInstalledMerchantsEventInput.md#refundcreatedinstalledmerchantseventinputdataobject).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](RefundPreviousAttributesInput.md#refundpreviousattributesinput).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.credit_note_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputcredit_note_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.customer_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.customer_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputcustomer_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributesInput.failure_reason](../models/BuyerPaymentRefundPreviousAttributesInput.md#buyerpaymentrefundpreviousattributesinputfailure_reason).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

Declared alternatives: [BuyerRefundPreviousAttributesInput.idempotency_key](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputidempotency_key).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.initiated_by

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.initiated_by variant 1

anyOf variant 1: Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only..

- Value shape: string. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`.

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.invoice_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputinvoice_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.line_item_allocations

Declared alternatives: [BuyerRefundPreviousAttributesInput.line_item_allocations](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputline_item_allocations).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.order_edit_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.order_edit_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputorder_edit_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.order_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.order_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputorder_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.payment_intent_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpayment_intent_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_refunds

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_refunds variant 1

anyOf variant 1: The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit..

- Value shape: Array of [PaymentRefundPreviousAttributesInput](../models/PaymentRefundPreviousAttributesInput.md#paymentrefundpreviousattributesinput). The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_refunds variant 2

anyOf variant 2.

- Value shape: null. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_review_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_review_id variant 1

anyOf variant 1: ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review..

- Value shape: string. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.pending_reason

Declared alternatives: [BuyerRefundPreviousAttributesInput.pending_reason](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputpending_reason).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.processed_by

Declared alternatives: [BuyerRefundPreviousAttributesInput.processed_by](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputprocessed_by).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason variant 1

anyOf variant 1: Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded..

- Value shape: string. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: `"duplicate"`, `"fraudulent"`, `"requested_by_customer"`, `"defective_product"`, `"wrong_item_shipped"`, `"never_received"`, `"not_as_described"`, `"arrived_too_late"`, `"customer_changed_mind"`, `"better_price_found"`, `"accidental_order"`, `"other"`, `"out_of_stock"`, `"payment_returned"`, `null`.

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason_message

Declared alternatives: [BuyerRefundPreviousAttributesInput.reason_message](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreason_message).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.refund_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefund_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_platform_fee

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_platform_fee variant 1

anyOf variant 1: Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns..

- Value shape: boolean. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_platform_fee variant 2

anyOf variant 2.

- Value shape: null. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_reference

Declared alternatives: [BuyerRefundPreviousAttributesInput.refund_reference](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefund_reference).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refunded_at

Declared alternatives: [BuyerRefundPreviousAttributesInput.refunded_at](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputrefunded_at).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.return_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.return_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreturn_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id

Declared alternatives: [BuyerRefundPreviousAttributesInput.return_resolution_id](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputreturn_resolution_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.status

Declared alternatives: [BuyerRefundPreviousAttributesInput.status](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputstatus).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.succeeded_at

Declared alternatives: [BuyerRefundPreviousAttributesInput.succeeded_at](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputsucceeded_at).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.tax_breakdown_refunds

Declared alternatives: [BuyerRefundPreviousAttributesInput.tax_breakdown_refunds](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputtax_breakdown_refunds).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.tender_allocations

Declared alternatives: [BuyerRefundPreviousAttributesInput.tender_allocations](../models/BuyerRefundPreviousAttributesInput.md#buyerrefundpreviousattributesinputtender_allocations).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.unissued_gift_card_recoveries

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.unissued_gift_card_recoveries variant 1

anyOf variant 1: Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive..

- Value shape: Array of [RefundUnissuedGiftCardRecoveryPreviousAttributesInput](../models/RefundUnissuedGiftCardRecoveryPreviousAttributesInput.md#refundunissuedgiftcardrecoverypreviousattributesinput). Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.unissued_gift_card_recoveries variant 2

anyOf variant 2.

- Value shape: null. Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

### RefundFailedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

