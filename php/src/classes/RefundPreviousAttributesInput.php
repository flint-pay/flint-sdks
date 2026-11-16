<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $credit_note_id
 * @property-read ExpandedCustomerSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $external_reference_id
 * @property-read string|null $failure_reason
 * @property-read string|null $idempotency_key
 * @property-read string|null $initiated_by
 * @property-read string|null $invoice_id
 * @property-read list<RefundLineItemAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_item_allocations
 * @property-read string|null $merchant_id
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $order
 * @property-read string|null $order_edit_id
 * @property-read string|null $order_id
 * @property-read ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $payment_intent
 * @property-read string|null $payment_intent_id
 * @property-read list<PaymentRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $payment_refunds
 * @property-read string|null $payment_review_id
 * @property-read string|null|null $pending_reason
 * @property-read string|null $processed_by
 * @property-read string|null|null $reason
 * @property-read string|null $reason_message
 * @property-read string|null $refund_id
 * @property-read bool|null $refund_platform_fee
 * @property-read string|null $refund_reference
 * @property-read string|\DateTimeInterface|null $refunded_at
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_tip_money
 * @property-read string|null $return_id
 * @property-read string|null $return_resolution_id
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $succeeded_at
 * @property-read list<RefundTaxBreakdownRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $tax_breakdown_refunds
 * @property-read list<RefundTenderAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $tender_allocations
 * @property-read list<RefundUnissuedGiftCardRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $unissued_gift_card_recoveries
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'credit_note_id'?: string|null, 'customer'?: ExpandedCustomerSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'customer_id'?: string|null, 'external_reference_id'?: string|null, 'failure_reason'?: string|null, 'idempotency_key'?: string|null, 'initiated_by'?: string|null, 'invoice_id'?: string|null, 'line_item_allocations'?: list<RefundLineItemAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'merchant_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'order'?: ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'order_edit_id'?: string|null, 'order_id'?: string|null, 'payment_intent'?: ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'payment_intent_id'?: string|null, 'payment_refunds'?: list<PaymentRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'payment_review_id'?: string|null, 'pending_reason'?: string|null|null, 'processed_by'?: string|null, 'reason'?: string|null|null, 'reason_message'?: string|null, 'refund_id'?: string|null, 'refund_platform_fee'?: bool|null, 'refund_reference'?: string|null, 'refunded_at'?: string|\DateTimeInterface|null, 'refunded_tip_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'return_id'?: string|null, 'return_resolution_id'?: string|null, 'status'?: string|null, 'succeeded_at'?: string|\DateTimeInterface|null, 'tax_breakdown_refunds'?: list<RefundTaxBreakdownRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'tender_allocations'?: list<RefundTenderAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'unissued_gift_card_recoveries'?: list<RefundUnissuedGiftCardRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundPreviousAttributesInput')); }
    /** Total refunded across all tenders, including `refunded_tip_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the credit note this refund paid out. Present only on refunds issued through a credit note. anyOf[1] (Value): string. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): mixed { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): ({@see ExpandedCustomerSummaryPreviousAttributesInput} or null). Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1].anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** ID of the customer on the refunded order or payment. Absent when neither has one. anyOf[1] (Value): string. ID of the customer on the refunded order or payment. Absent when neither has one. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed". anyOf[1] (Value): string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): mixed { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. anyOf[1] (Value): string. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): mixed { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value enum: "merchant", "flint". anyOf[1] (Value): string. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Value enum: "merchant", "flint". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): mixed { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. anyOf[1] (Value): string. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): mixed { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** How the refund applied to each order line item it covered, with quantity, tax, and adjustments. anyOf[1] (Value): Array of {@see RefundLineItemAllocationPreviousAttributesInput}. How the refund applied to each order line item it covered, with quantity, tax, and adjustments. anyOf[1][] (Value): {@see RefundLineItemAllocationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundLineItemAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_item_allocations is omitted; use hasLineItemAllocations() or valueOrDefault().
     */
    public function getLineItemAllocations(): mixed { return $this->get('line_item_allocations'); }
    public function hasLineItemAllocations(): bool { return $this->has('line_item_allocations'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): mixed { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): ({@see ExpandedOrderSummaryPreviousAttributesInput} or null). Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. anyOf[1] (Value): string. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_edit_id is omitted; use hasOrderEditId() or valueOrDefault().
     */
    public function getOrderEditId(): mixed { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. anyOf[1] (Value): string. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): ({@see ExpandedPaymentIntentSummaryPreviousAttributesInput} or null). Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1].anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. anyOf[1] (Value): string. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): mixed { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. anyOf[1] (Value): Array of {@see PaymentRefundPreviousAttributesInput}. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. anyOf[1][] (Value): {@see PaymentRefundPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<PaymentRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When payment_refunds is omitted; use hasPaymentRefunds() or valueOrDefault().
     */
    public function getPaymentRefunds(): mixed { return $this->get('payment_refunds'); }
    public function hasPaymentRefunds(): bool { return $this->has('payment_refunds'); }
    /** ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. anyOf[1] (Value): string. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_review_id is omitted; use hasPaymentReviewId() or valueOrDefault().
     */
    public function getPaymentReviewId(): mixed { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Value enum: "manual_review", null. anyOf[1] (Value): string or null. Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Value enum: "manual_review", null. anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When pending_reason is omitted; use hasPendingReason() or valueOrDefault().
     */
    public function getPendingReason(): mixed { return $this->get('pending_reason'); }
    public function hasPendingReason(): bool { return $this->has('pending_reason'); }
    /** Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant". anyOf[1] (Value): string. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When processed_by is omitted; use hasProcessedBy() or valueOrDefault().
     */
    public function getProcessedBy(): mixed { return $this->get('processed_by'); }
    public function hasProcessedBy(): bool { return $this->has('processed_by'); }
    /** Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock", "payment_returned", null. anyOf[1] (Value): string or null. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock", "payment_returned", null. anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Note explaining the refund, up to 1,024 characters. anyOf[1] (Value): string. Note explaining the refund, up to 1,024 characters. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): mixed { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Unique identifier for this refund, prefixed `ref_`. anyOf[1] (Value): string. Unique identifier for this refund, prefixed `ref_`. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): mixed { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. anyOf[1] (Value): boolean. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When refund_platform_fee is omitted; use hasRefundPlatformFee() or valueOrDefault().
     */
    public function getRefundPlatformFee(): mixed { return $this->get('refund_platform_fee'); }
    public function hasRefundPlatformFee(): bool { return $this->has('refund_platform_fee'); }
    /** The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. anyOf[1] (Value): string. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_reference is omitted; use hasRefundReference() or valueOrDefault().
     */
    public function getRefundReference(): mixed { return $this->get('refund_reference'); }
    public function hasRefundReference(): bool { return $this->has('refund_reference'); }
    /** When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. anyOf[1] (Value): string. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When refunded_at is omitted; use hasRefundedAt() or valueOrDefault().
     */
    public function getRefundedAt(): mixed { return $this->get('refunded_at'); }
    public function hasRefundedAt(): bool { return $this->has('refunded_at'); }
    /** Share of `amount_money` that refunds tips. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_tip_money is omitted; use hasRefundedTipMoney() or valueOrDefault().
     */
    public function getRefundedTipMoney(): mixed { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** ID of the return this refund paid out. Present only on refunds issued by a return. anyOf[1] (Value): string. ID of the return this refund paid out. Present only on refunds issued by a return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the return resolution that issued this refund. Present only on refunds issued by a return. anyOf[1] (Value): string. ID of the return resolution that issued this refund. Present only on refunds issued by a return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): mixed { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[1] (Value): string. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. anyOf[1] (Value): string. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): mixed { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. anyOf[1] (Value): Array of {@see RefundTaxBreakdownRefundPreviousAttributesInput}. Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. anyOf[1][] (Value): {@see RefundTaxBreakdownRefundPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundTaxBreakdownRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): mixed { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. anyOf[1] (Value): Array of {@see RefundTenderAllocationPreviousAttributesInput}. Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. anyOf[1][] (Value): {@see RefundTenderAllocationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundTenderAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When tender_allocations is omitted; use hasTenderAllocations() or valueOrDefault().
     */
    public function getTenderAllocations(): mixed { return $this->get('tender_allocations'); }
    public function hasTenderAllocations(): bool { return $this->has('tender_allocations'); }
    /** Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. anyOf[1] (Value): Array of {@see RefundUnissuedGiftCardRecoveryPreviousAttributesInput}. Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. anyOf[1][] (Value): {@see RefundUnissuedGiftCardRecoveryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundUnissuedGiftCardRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When unissued_gift_card_recoveries is omitted; use hasUnissuedGiftCardRecoveries() or valueOrDefault().
     */
    public function getUnissuedGiftCardRecoveries(): mixed { return $this->get('unissued_gift_card_recoveries'); }
    public function hasUnissuedGiftCardRecoveries(): bool { return $this->has('unissued_gift_card_recoveries'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
