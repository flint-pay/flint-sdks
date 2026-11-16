[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundFailedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Total refunded across all tenders, including `refunded_tip_money`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributescredit_note_id). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributescustomer_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesidempotency_key). |
| `initiated_by` | Optional | string or null | Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`. `initiated_by`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesinitiated_by). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesinvoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesline_item_allocations). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesorder_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_refunds` | Optional | Array of [PaymentRefund](../models/PaymentRefund.md#paymentrefund) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_refunds). |
| `payment_review_id` | Optional | string or null | ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. `payment_review_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_review_id). |
| `pending_reason` | Optional | string or null or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesprocessed_by). |
| `reason` | Optional | string or null or null | Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: [15 declared values](RefundInput.md#refundinput-reason-values). `reason`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_id). |
| `refund_platform_fee` | Optional | boolean or null | Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. `refund_platform_fee`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_platform_fee). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefunded_at). |
| `refunded_tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Share of `amount_money` that refunds tips. |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreturn_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributessucceeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributestax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocation](../models/RefundTenderAllocation.md#refundtenderallocation) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributestender_allocations). |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecovery](../models/RefundUnissuedGiftCardRecovery.md#refundunissuedgiftcardrecovery) or null | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. `unissued_gift_card_recoveries`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### RefundFailedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### RefundFailedMerchantEventDataPreviousAttributes.credit_note_id

### RefundFailedMerchantEventDataPreviousAttributes.credit_note_id variant 1

anyOf variant 1: ID of the credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. 

### RefundFailedMerchantEventDataPreviousAttributes.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. 

### RefundFailedMerchantEventDataPreviousAttributes.customer_id

### RefundFailedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer on the refunded order or payment. Absent when neither has one..

- Value shape: string. ID of the customer on the refunded order or payment. Absent when neither has one. 

### RefundFailedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer on the refunded order or payment. Absent when neither has one. 

### RefundFailedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### RefundFailedMerchantEventDataPreviousAttributes.failure_reason

### RefundFailedMerchantEventDataPreviousAttributes.failure_reason variant 1

anyOf variant 1: Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed..

- Value shape: string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: `"expired_or_canceled_card"`, `"lost_or_stolen_card"`, `"insufficient_funds"`, `"insufficient_available_balance"`, `"declined"`, `"merchant_request"`, `"payment_disputed"`, `"refund_abandoned"`, `"payment_refund_failed"`, `"payment_refund_not_attempted"`, `"refund_failed"`.

### RefundFailedMerchantEventDataPreviousAttributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. 

### RefundFailedMerchantEventDataPreviousAttributes.idempotency_key

### RefundFailedMerchantEventDataPreviousAttributes.idempotency_key variant 1

anyOf variant 1: The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response..

- Value shape: string. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. 

### RefundFailedMerchantEventDataPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. 

### RefundFailedMerchantEventDataPreviousAttributes.initiated_by

### RefundFailedMerchantEventDataPreviousAttributes.initiated_by variant 1

anyOf variant 1: Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only..

- Value shape: string. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`.

### RefundFailedMerchantEventDataPreviousAttributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. 

### RefundFailedMerchantEventDataPreviousAttributes.invoice_id

### RefundFailedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. 

### RefundFailedMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. 

### RefundFailedMerchantEventDataPreviousAttributes.line_item_allocations

### RefundFailedMerchantEventDataPreviousAttributes.line_item_allocations variant 1

anyOf variant 1: How the refund applied to each order line item it covered, with quantity, tax, and adjustments..

- Value shape: Array of [RefundLineItemAllocation](../models/RefundLineItemAllocation.md#refundlineitemallocation). How the refund applied to each order line item it covered, with quantity, tax, and adjustments. 

### RefundFailedMerchantEventDataPreviousAttributes.line_item_allocations variant 2

anyOf variant 2.

- Value shape: null. How the refund applied to each order line item it covered, with quantity, tax, and adjustments. 

### RefundFailedMerchantEventDataPreviousAttributes.line_item_allocations variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocations).

### RefundFailedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### RefundFailedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### RefundFailedMerchantEventDataPreviousAttributes.order_edit_id

### RefundFailedMerchantEventDataPreviousAttributes.order_edit_id variant 1

anyOf variant 1: ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit..

- Value shape: string. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. 

### RefundFailedMerchantEventDataPreviousAttributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. 

### RefundFailedMerchantEventDataPreviousAttributes.order_id

### RefundFailedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund..

- Value shape: string. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. 

### RefundFailedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_intent_id

### RefundFailedMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through..

- Value shape: string. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1

anyOf variant 1: The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit..

- Value shape: Array of [PaymentRefund](../models/PaymentRefund.md#paymentrefund). The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 2

anyOf variant 2.

- Value shape: null. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_refunds variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].payment_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundspayment_refunds).

### RefundFailedMerchantEventDataPreviousAttributes.payment_review_id

### RefundFailedMerchantEventDataPreviousAttributes.payment_review_id variant 1

anyOf variant 1: ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review..

- Value shape: string. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. 

### RefundFailedMerchantEventDataPreviousAttributes.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. 

### RefundFailedMerchantEventDataPreviousAttributes.pending_reason

### RefundFailedMerchantEventDataPreviousAttributes.pending_reason variant 1

anyOf variant 1: Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review..

- Value shape: (string or null). Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`.

### RefundFailedMerchantEventDataPreviousAttributes.pending_reason variant 2

anyOf variant 2.

- Value shape: null. Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. 

### RefundFailedMerchantEventDataPreviousAttributes.processed_by

### RefundFailedMerchantEventDataPreviousAttributes.processed_by variant 1

anyOf variant 1: Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint..

- Value shape: string. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`.

### RefundFailedMerchantEventDataPreviousAttributes.processed_by variant 2

anyOf variant 2.

- Value shape: null. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. 

### RefundFailedMerchantEventDataPreviousAttributes.reason

### RefundFailedMerchantEventDataPreviousAttributes.reason variant 1

anyOf variant 1: Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded..

- Value shape: (string or null). Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: `"duplicate"`, `"fraudulent"`, `"requested_by_customer"`, `"defective_product"`, `"wrong_item_shipped"`, `"never_received"`, `"not_as_described"`, `"arrived_too_late"`, `"customer_changed_mind"`, `"better_price_found"`, `"accidental_order"`, `"other"`, `"out_of_stock"`, `"payment_returned"`, `null`.

### RefundFailedMerchantEventDataPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. 

### RefundFailedMerchantEventDataPreviousAttributes.reason_message

### RefundFailedMerchantEventDataPreviousAttributes.reason_message variant 1

anyOf variant 1: Note explaining the refund, up to 1,024 characters..

- Value shape: string. Note explaining the refund, up to 1,024 characters. 

### RefundFailedMerchantEventDataPreviousAttributes.reason_message variant 2

anyOf variant 2.

- Value shape: null. Note explaining the refund, up to 1,024 characters. 

### RefundFailedMerchantEventDataPreviousAttributes.refund_id

### RefundFailedMerchantEventDataPreviousAttributes.refund_id variant 1

anyOf variant 1: Unique identifier for this refund, prefixed `ref_`..

- Value shape: string. Unique identifier for this refund, prefixed `ref_`. 

### RefundFailedMerchantEventDataPreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund, prefixed `ref_`. 

### RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee

### RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee variant 1

anyOf variant 1: Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns..

- Value shape: boolean. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee variant 2

anyOf variant 2.

- Value shape: null. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedMerchantEventDataPreviousAttributes.refund_reference

### RefundFailedMerchantEventDataPreviousAttributes.refund_reference variant 1

anyOf variant 1: The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID..

- Value shape: string. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: `1`. maxLength: `255`. 

### RefundFailedMerchantEventDataPreviousAttributes.refund_reference variant 2

anyOf variant 2.

- Value shape: null. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. 

### RefundFailedMerchantEventDataPreviousAttributes.refunded_at

### RefundFailedMerchantEventDataPreviousAttributes.refunded_at variant 1

anyOf variant 1: When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant..

- Value shape: string. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. 

### RefundFailedMerchantEventDataPreviousAttributes.refunded_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. 

### RefundFailedMerchantEventDataPreviousAttributes.return_id

### RefundFailedMerchantEventDataPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the return this refund paid out. Present only on refunds issued by a return..

- Value shape: string. ID of the return this refund paid out. Present only on refunds issued by a return. 

### RefundFailedMerchantEventDataPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return this refund paid out. Present only on refunds issued by a return. 

### RefundFailedMerchantEventDataPreviousAttributes.return_resolution_id

### RefundFailedMerchantEventDataPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued this refund. Present only on refunds issued by a return..

- Value shape: string. ID of the return resolution that issued this refund. Present only on refunds issued by a return. 

### RefundFailedMerchantEventDataPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued this refund. Present only on refunds issued by a return. 

### RefundFailedMerchantEventDataPreviousAttributes.status

### RefundFailedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes..

- Value shape: string. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`.

### RefundFailedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. 

### RefundFailedMerchantEventDataPreviousAttributes.succeeded_at

### RefundFailedMerchantEventDataPreviousAttributes.succeeded_at variant 1

anyOf variant 1: When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time..

- Value shape: string. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. 

### RefundFailedMerchantEventDataPreviousAttributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. 

### RefundFailedMerchantEventDataPreviousAttributes.tax_breakdown_refunds

### RefundFailedMerchantEventDataPreviousAttributes.tax_breakdown_refunds variant 1

anyOf variant 1: Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`..

- Value shape: Array of [RefundTaxBreakdownRefund](../models/RefundTaxBreakdownRefund.md#refundtaxbreakdownrefund). Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. 

### RefundFailedMerchantEventDataPreviousAttributes.tax_breakdown_refunds variant 2

anyOf variant 2.

- Value shape: null. Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. 

### RefundFailedMerchantEventDataPreviousAttributes.tax_breakdown_refunds variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].line_item_allocations[].tax_breakdown_refunds[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsline_item_allocationstax_breakdown_refunds).

### RefundFailedMerchantEventDataPreviousAttributes.tender_allocations

### RefundFailedMerchantEventDataPreviousAttributes.tender_allocations variant 1

anyOf variant 1: Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination..

- Value shape: Array of [RefundTenderAllocation](../models/RefundTenderAllocation.md#refundtenderallocation). Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### RefundFailedMerchantEventDataPreviousAttributes.tender_allocations variant 2

anyOf variant 2.

- Value shape: null. Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### RefundFailedMerchantEventDataPreviousAttributes.tender_allocations variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].tender_allocations[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundstender_allocations).

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1

anyOf variant 1: Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive..

- Value shape: Array of [RefundUnissuedGiftCardRecovery](../models/RefundUnissuedGiftCardRecovery.md#refundunissuedgiftcardrecovery). Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 2

anyOf variant 2.

- Value shape: null. Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_resolutions[].refunds[].unissued_gift_card_recoveries[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsrefundsunissued_gift_card_recoveries).

### RefundFailedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### RefundFailedMerchantEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

