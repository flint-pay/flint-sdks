[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundFailedInstalledMerchantsEvent

The `refund.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"refund.failed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### RefundFailedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/RefundCreatedInstalledMerchantsEvent.md#refundcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object and [RefundPreviousAttributes](../models/RefundPreviousAttributes.md#refundpreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/RefundFailedInstalledMerchantsEvent.md#refundfailedinstalledmerchantseventdataprevious_attributes). |

### RefundFailedInstalledMerchantsEvent.data.object

Field definitions: [RefundCreatedInstalledMerchantsEvent.data.object](../models/RefundCreatedInstalledMerchantsEvent.md#refundcreatedinstalledmerchantseventdataobject).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](RefundPreviousAttributes.md#refundpreviousattributes).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.amount_money

Declared alternatives: [BuyerRefundPreviousAttributes.amount_money](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesamount_money).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.charge_allocations

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.charge_allocations variant 1

anyOf variant 1: Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds..

- Value shape: Array of [RefundChargeAllocationPreviousAttributes](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributes). Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.charge_allocations variant 2

anyOf variant 2.

- Value shape: null. Money returned for each order charge, including subtotal, discount, and tax, combined across payment refunds. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.credit_adjustment_money

Declared alternatives: [BuyerRefundPreviousAttributes.credit_adjustment_money](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_adjustment_money).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.credit_note_id

Declared alternatives: [BuyerRefundPreviousAttributes.credit_note_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescredit_note_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEvent.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.initiated_by

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.initiated_by variant 1

anyOf variant 1: Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only..

- Value shape: string. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`.

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.invoice_id

Declared alternatives: [BuyerRefundPreviousAttributes.invoice_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesinvoice_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.line_item_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.order_edit_id

Declared alternatives: [BuyerRefundPreviousAttributes.order_edit_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_edit_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.order_id

Declared alternatives: [BuyerRefundPreviousAttributes.order_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesorder_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_intent_id

Declared alternatives: [BuyerRefundPreviousAttributes.payment_intent_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespayment_intent_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_refunds

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_refunds variant 1

anyOf variant 1: The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit..

- Value shape: Array of [PaymentRefundPreviousAttributes](../models/PaymentRefundPreviousAttributes.md#paymentrefundpreviousattributes). The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_refunds variant 2

anyOf variant 2.

- Value shape: null. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_review_id

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_review_id variant 1

anyOf variant 1: ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review..

- Value shape: string. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.pending_reason

Declared alternatives: [BuyerRefundPreviousAttributes.pending_reason](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.processed_by

Declared alternatives: [BuyerRefundPreviousAttributes.processed_by](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.reason

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.reason variant 1

anyOf variant 1: Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded..

- Value shape: string. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: `"duplicate"`, `"fraudulent"`, `"requested_by_customer"`, `"defective_product"`, `"wrong_item_shipped"`, `"never_received"`, `"not_as_described"`, `"arrived_too_late"`, `"customer_changed_mind"`, `"better_price_found"`, `"accidental_order"`, `"other"`, `"out_of_stock"`, `"payment_returned"`, `null`.

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.reason_message

Declared alternatives: [BuyerRefundPreviousAttributes.reason_message](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.refund_id

Declared alternatives: [BuyerRefundPreviousAttributes.refund_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.refund_platform_fee

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.refund_platform_fee variant 1

anyOf variant 1: Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns..

- Value shape: boolean. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.refund_platform_fee variant 2

anyOf variant 2.

- Value shape: null. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.refund_reference

Declared alternatives: [BuyerRefundPreviousAttributes.refund_reference](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.refunded_at

Declared alternatives: [BuyerRefundPreviousAttributes.refunded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefunded_at).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.refunded_tip_money

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.refunded_tip_money](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesrefunded_tip_money).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.return_id

Declared alternatives: [BuyerRefundPreviousAttributes.return_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.return_resolution_id

Declared alternatives: [BuyerRefundPreviousAttributes.return_resolution_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreturn_resolution_id).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.status

Declared alternatives: [BuyerRefundPreviousAttributes.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.succeeded_at

Declared alternatives: [BuyerRefundPreviousAttributes.succeeded_at](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributessucceeded_at).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.tax_breakdown_refunds

Declared alternatives: [BuyerRefundPreviousAttributes.tax_breakdown_refunds](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.tender_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.tender_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.unissued_gift_card_recoveries

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.unissued_gift_card_recoveries variant 1

anyOf variant 1: Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive..

- Value shape: Array of [RefundUnissuedGiftCardRecoveryPreviousAttributes](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributes). Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.unissued_gift_card_recoveries variant 2

anyOf variant 2.

- Value shape: null. Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### RefundFailedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

### RefundFailedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

