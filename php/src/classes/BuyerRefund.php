<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $created_at
 * @property-read ?string $credit_note_id
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read ?string $failure_reason
 * @property-read ?string $idempotency_key
 * @property-read ?string $invoice_id
 * @property-read ?list<RefundLineItemAllocation> $line_item_allocations
 * @property-read BuyerExpandedOrderSummary|null $order
 * @property-read ?string $order_edit_id
 * @property-read ?string $order_id
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read ?string $payment_intent_id
 * @property-read ?list<BuyerPaymentRefund> $payment_refunds
 * @property-read string|null $pending_reason
 * @property-read string $processed_by
 * @property-read string|null $reason
 * @property-read ?string $reason_message
 * @property-read string $refund_id
 * @property-read ?string $refund_reference
 * @property-read ?string $refunded_at
 * @property-read MoneyValue $refunded_tip_money
 * @property-read ?string $return_id
 * @property-read ?string $return_resolution_id
 * @property-read string $status
 * @property-read ?string $succeeded_at
 * @property-read ?list<RefundTaxBreakdownRefund> $tax_breakdown_refunds
 * @property-read ?list<RefundTenderAllocation> $tender_allocations
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class BuyerRefund extends Model {
    /** @param array{'amount_money': mixed, 'created_at': string, 'credit_note_id'?: string, 'customer'?: mixed, 'customer_id'?: string, 'failure_reason'?: string, 'idempotency_key'?: string, 'invoice_id'?: string, 'line_item_allocations'?: list<mixed>, 'order'?: mixed, 'order_edit_id'?: string, 'order_id'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'payment_refunds'?: list<mixed>, 'pending_reason': string|null, 'processed_by': string, 'reason': string|null, 'reason_message'?: string, 'refund_id': string, 'refund_reference'?: string, 'refunded_at'?: string, 'refunded_tip_money': mixed, 'return_id'?: string, 'return_resolution_id'?: string, 'status': string, 'succeeded_at'?: string, 'tax_breakdown_refunds'?: list<mixed>, 'tender_allocations'?: list<mixed>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerRefund')); }
    /** Total refunded across all tenders, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the credit note this refund paid out. Present only on refunds issued through a credit note.
     * @return ?string
     */
    public function getCreditNoteId(): ?string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** The customer summary for `customer_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** ID of the customer on the refunded order or payment. Absent when neither has one.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** A coarse buyer-visible failure category. refund_abandoned means the refund could not be completed; contact the store to get your money back. refund_failed means the refund failed. Omitted when there is no failure. Value enum: "refund_failed", "refund_abandoned".
     * @return ?string
     */
    public function getFailureReason(): ?string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response.
     * @return ?string
     */
    public function getIdempotencyKey(): ?string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note.
     * @return ?string
     */
    public function getInvoiceId(): ?string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** How the refund applied to each order line item it covered, with quantity, tax, and adjustments. [] (Value): {@see RefundLineItemAllocation}. How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and modifier allocations.
     * @return ?list<RefundLineItemAllocation>
     */
    public function getLineItemAllocations(): ?array { return $this->get('line_item_allocations'); }
    public function hasLineItemAllocations(): bool { return $this->has('line_item_allocations'); }
    /** The order summary for `order_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value): {@see BuyerExpandedOrderSummary}. An order summary in a buyer response, with order status and totals. Recorded buyer contact is omitted. anyOf[2] (Value): null.
     * @return BuyerExpandedOrderSummary|null
     */
    public function getOrder(): BuyerExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit.
     * @return ?string
     */
    public function getOrderEditId(): ?string { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The payment summary for `payment_intent_id`. Buyer refund endpoints take no `expand` parameter, so it is never expanded here. `null` when the refund is not expanded. anyOf[1] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     * @return ExpandedPaymentIntentSummary|null
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummary|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. [] (Value): {@see BuyerPaymentRefund}. The part of a refund returned through one payment, with the amount, tip, status, and any failure reason.
     * @return ?list<BuyerPaymentRefund>
     */
    public function getPaymentRefunds(): ?array { return $this->get('payment_refunds'); }
    public function hasPaymentRefunds(): bool { return $this->has('payment_refunds'); }
    /** Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Value enum: "manual_review", null.
     * @return string|null
     */
    public function getPendingReason(): string|null { return $this->get('pending_reason'); }
    public function hasPendingReason(): bool { return $this->has('pending_reason'); }
    /** Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant".
     * @return string
     */
    public function getProcessedBy(): string { return $this->get('processed_by'); }
    public function hasProcessedBy(): bool { return $this->has('processed_by'); }
    /** `payment_returned` when Flint refunded a payment it couldn't apply to the order. `null` when the store made the refund, because a store's reasons aren't shared with buyers. Value enum: "payment_returned", null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Note explaining the refund, up to 1,024 characters.
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Unique identifier for this refund, prefixed `ref_`.
     * @return string
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getRefundReference(): ?string { return $this->get('refund_reference'); }
    public function hasRefundReference(): bool { return $this->has('refund_reference'); }
    /** When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: date-time.
     * @return ?string
     */
    public function getRefundedAt(): ?string { return $this->get('refunded_at'); }
    public function hasRefundedAt(): bool { return $this->has('refunded_at'); }
    /** Share of `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedTipMoney(): MoneyValue { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** ID of the return this refund paid out. Present only on refunds issued by a return.
     * @return ?string
     */
    public function getReturnId(): ?string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the return resolution that issued this refund. Present only on refunds issued by a return.
     * @return ?string
     */
    public function getReturnResolutionId(): ?string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: date-time.
     * @return ?string
     */
    public function getSucceededAt(): ?string { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. [] (Value): {@see RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * @return ?list<RefundTaxBreakdownRefund>
     */
    public function getTaxBreakdownRefunds(): ?array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. [] (Value): {@see RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender allocations.
     * @return ?list<RefundTenderAllocation>
     */
    public function getTenderAllocations(): ?array { return $this->get('tender_allocations'); }
    public function hasTenderAllocations(): bool { return $this->has('tender_allocations'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
