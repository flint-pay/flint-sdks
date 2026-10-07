<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $created_at
 * @property-read string $credit_note_id
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string $customer_id
 * @property-read string $external_reference_id
 * @property-read string $failure_reason
 * @property-read string $idempotency_key
 * @property-read string $invoice_id
 * @property-read list<RefundLineItemAllocation> $line_item_allocations
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read list<PaymentRefund> $payment_refunds
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $refund_id
 * @property-read string $refund_method
 * @property-read MoneyValue $refunded_tip_money
 * @property-read string $return_id
 * @property-read string $return_resolution_id
 * @property-read string $review_id
 * @property-read string $status
 * @property-read list<RefundTaxBreakdownRefund> $tax_breakdown_refunds
 * @property-read list<RefundTenderAllocation> $tender_allocations
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerRefund extends Model {
    /** @param array{'amount_money': mixed, 'created_at'?: string, 'credit_note_id'?: string, 'customer'?: mixed, 'customer_id'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'idempotency_key'?: string, 'invoice_id'?: string, 'line_item_allocations'?: list<mixed>, 'merchant_id'?: string, 'metadata'?: \stdClass, 'order'?: mixed, 'order_id'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'payment_refunds'?: list<mixed>, 'reason'?: string, 'reason_message'?: string, 'refund_id': string, 'refund_method'?: string, 'refunded_tip_money': mixed, 'return_id'?: string, 'return_resolution_id'?: string, 'review_id'?: string, 'status': string, 'tax_breakdown_refunds'?: list<mixed>, 'tender_allocations'?: list<mixed>, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerRefund')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** @return ExpandedCustomerSummary|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return list<RefundLineItemAllocation>
     * @throws SdkError When line_item_allocations is omitted; use hasLineItemAllocations() or valueOrDefault().
     */
    public function getLineItemAllocations(): array { return $this->get('line_item_allocations'); }
    public function hasLineItemAllocations(): bool { return $this->has('line_item_allocations'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return ExpandedPaymentIntentSummary|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummary|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return list<PaymentRefund>
     * @throws SdkError When payment_refunds is omitted; use hasPaymentRefunds() or valueOrDefault().
     */
    public function getPaymentRefunds(): array { return $this->get('payment_refunds'); }
    public function hasPaymentRefunds(): bool { return $this->has('payment_refunds'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** @return string
     * @throws SdkError When refund_method is omitted; use hasRefundMethod() or valueOrDefault().
     */
    public function getRefundMethod(): string { return $this->get('refund_method'); }
    public function hasRefundMethod(): bool { return $this->has('refund_method'); }
    /** @return MoneyValue
     * @throws SdkError When refunded_tip_money is omitted; use hasRefundedTipMoney() or valueOrDefault().
     */
    public function getRefundedTipMoney(): MoneyValue { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** @return string
     * @throws SdkError When review_id is omitted; use hasReviewId() or valueOrDefault().
     */
    public function getReviewId(): string { return $this->get('review_id'); }
    public function hasReviewId(): bool { return $this->has('review_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return list<RefundTaxBreakdownRefund>
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** @return list<RefundTenderAllocation>
     * @throws SdkError When tender_allocations is omitted; use hasTenderAllocations() or valueOrDefault().
     */
    public function getTenderAllocations(): array { return $this->get('tender_allocations'); }
    public function hasTenderAllocations(): bool { return $this->has('tender_allocations'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
