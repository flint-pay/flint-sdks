<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $created_at
 * @property-read MoneyValuePreviousAttributes|null $credit_adjustment_money
 * @property-read string|null $credit_note_id
 * @property-read ExpandedCustomerSummaryPreviousAttributes|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $failure_reason
 * @property-read string|null $idempotency_key
 * @property-read string|null $invoice_id
 * @property-read list<RefundLineItemAllocationPreviousAttributes>|null $line_item_allocations
 * @property-read BuyerExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_edit_id
 * @property-read string|null $order_id
 * @property-read BuyerExpandedPaymentIntentSummaryPreviousAttributes|null $payment_intent
 * @property-read string|null $payment_intent_id
 * @property-read list<BuyerPaymentRefundPreviousAttributes>|null $payment_refunds
 * @property-read string|null $pending_reason
 * @property-read string|null $processed_by
 * @property-read string|null $reason
 * @property-read string|null $reason_message
 * @property-read string|null $refund_id
 * @property-read string|null $refund_reference
 * @property-read string|null $refunded_at
 * @property-read MoneyValuePreviousAttributes|null $refunded_tip_money
 * @property-read string|null $return_id
 * @property-read string|null $return_resolution_id
 * @property-read string|null $status
 * @property-read string|null $succeeded_at
 * @property-read list<RefundTaxBreakdownRefundPreviousAttributes>|null $tax_breakdown_refunds
 * @property-read list<RefundTenderAllocationPreviousAttributes>|null $tender_allocations
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class BuyerRefundPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'created_at'?: mixed, 'credit_adjustment_money'?: mixed, 'credit_note_id'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'failure_reason'?: mixed, 'idempotency_key'?: mixed, 'invoice_id'?: mixed, 'line_item_allocations'?: mixed, 'order'?: mixed, 'order_edit_id'?: mixed, 'order_id'?: mixed, 'payment_intent'?: mixed, 'payment_intent_id'?: mixed, 'payment_refunds'?: mixed, 'pending_reason'?: mixed, 'processed_by'?: mixed, 'reason'?: mixed, 'reason_message'?: mixed, 'refund_id'?: mixed, 'refund_reference'?: mixed, 'refunded_at'?: mixed, 'refunded_tip_money'?: mixed, 'return_id'?: mixed, 'return_resolution_id'?: mixed, 'status'?: mixed, 'succeeded_at'?: mixed, 'tax_breakdown_refunds'?: mixed, 'tender_allocations'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerRefundPreviousAttributes')); }
    /** Total refunded across all tenders, including `refunded_tip_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Money paid for Return resolution credits, included in amount_money. It carries no merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCreditAdjustmentMoney(): MoneyValuePreviousAttributes|null { return $this->get('credit_adjustment_money'); }
    public function hasCreditAdjustmentMoney(): bool { return $this->has('credit_adjustment_money'); }
    /** ID of the credit note this refund paid out. Present only on refunds issued through a credit note. anyOf[1] (Value): string. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreditNoteId(): string|null { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributes|null
     */
    public function getCustomer(): ExpandedCustomerSummaryPreviousAttributes|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** ID of the customer on the refunded order or payment. Absent when neither has one. anyOf[1] (Value): string. ID of the customer on the refunded order or payment. Absent when neither has one. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Value enum: "refund_failed", "refund_abandoned". anyOf[1] (Value): string. A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Value enum: "refund_failed", "refund_abandoned". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureReason(): string|null { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. anyOf[1] (Value): string. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. anyOf[1] (Value): string. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** How the refund applied to each order line item it covered, with quantity, tax, and adjustments. anyOf[1] (Value): Array of {@see RefundLineItemAllocationPreviousAttributes}. How the refund applied to each order line item it covered, with quantity, tax, and adjustments. anyOf[1][] (Value): {@see RefundLineItemAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundLineItemAllocationPreviousAttributes>|null
     */
    public function getLineItemAllocations(): array|null { return $this->get('line_item_allocations'); }
    public function hasLineItemAllocations(): bool { return $this->has('line_item_allocations'); }
    /** The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value): {@see BuyerExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return BuyerExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): BuyerExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. anyOf[1] (Value): string. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderEditId(): string|null { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. anyOf[1] (Value): string. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value): {@see BuyerExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return BuyerExpandedPaymentIntentSummaryPreviousAttributes|null
     */
    public function getPaymentIntent(): BuyerExpandedPaymentIntentSummaryPreviousAttributes|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. anyOf[1] (Value): string. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. anyOf[1] (Value): Array of {@see BuyerPaymentRefundPreviousAttributes}. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. anyOf[1][] (Value): {@see BuyerPaymentRefundPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<BuyerPaymentRefundPreviousAttributes>|null
     */
    public function getPaymentRefunds(): array|null { return $this->get('payment_refunds'); }
    public function hasPaymentRefunds(): bool { return $this->has('payment_refunds'); }
    /** Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Value enum: "manual_review", null. anyOf[1] (Value): string. Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Value enum: "manual_review", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPendingReason(): string|null { return $this->get('pending_reason'); }
    public function hasPendingReason(): bool { return $this->has('pending_reason'); }
    /** Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant". anyOf[1] (Value): string. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProcessedBy(): string|null { return $this->get('processed_by'); }
    public function hasProcessedBy(): bool { return $this->has('processed_by'); }
    /** `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Value enum: "payment_returned", null. anyOf[1] (Value): string. `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Value enum: "payment_returned", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Note explaining the refund, up to 1,024 characters. anyOf[1] (Value): string. Note explaining the refund, up to 1,024 characters. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReasonMessage(): string|null { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Unique identifier for this refund, prefixed `ref_`. anyOf[1] (Value): string. Unique identifier for this refund, prefixed `ref_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. anyOf[1] (Value): string. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundReference(): string|null { return $this->get('refund_reference'); }
    public function hasRefundReference(): bool { return $this->has('refund_reference'); }
    /** When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. anyOf[1] (Value): string. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundedAt(): string|null { return $this->get('refunded_at'); }
    public function hasRefundedAt(): bool { return $this->has('refunded_at'); }
    /** Share of `amount_money` that refunds tips. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** ID of the return this refund paid out. Present only on refunds issued by a return. anyOf[1] (Value): string. ID of the return this refund paid out. Present only on refunds issued by a return. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the return resolution that issued this refund. Present only on refunds issued by a return. anyOf[1] (Value): string. ID of the return resolution that issued this refund. Present only on refunds issued by a return. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionId(): string|null { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[1] (Value): string. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. anyOf[1] (Value): string. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSucceededAt(): string|null { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. anyOf[1] (Value): Array of {@see RefundTaxBreakdownRefundPreviousAttributes}. Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. anyOf[1][] (Value): {@see RefundTaxBreakdownRefundPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundTaxBreakdownRefundPreviousAttributes>|null
     */
    public function getTaxBreakdownRefunds(): array|null { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. anyOf[1] (Value): Array of {@see RefundTenderAllocationPreviousAttributes}. Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. anyOf[1][] (Value): {@see RefundTenderAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundTenderAllocationPreviousAttributes>|null
     */
    public function getTenderAllocations(): array|null { return $this->get('tender_allocations'); }
    public function hasTenderAllocations(): bool { return $this->has('tender_allocations'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
