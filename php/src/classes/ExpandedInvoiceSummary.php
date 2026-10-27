<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $collection_block_status
 * @property-read ?string $created_at
 * @property-read ?string $customer_id
 * @property-read ?string $due_at
 * @property-read string $invoice_id
 * @property-read ?string $invoice_number
 * @property-read bool $is_overdue
 * @property-read ?string $order_id
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $paid_money
 * @property-read ?string $refund_status
 * @property-read MoneyValue $refunded_money
 * @property-read string $status
 * @property-read MoneyValue $total_money
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedInvoiceSummary extends Model {
    /** @param array{'collection_block_status'?: string, 'created_at'?: string, 'customer_id'?: string, 'due_at'?: string, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'order_id'?: string, 'outstanding_money': mixed, 'paid_money': mixed, 'refund_status'?: string, 'refunded_money': mixed, 'status': string, 'total_money': mixed, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedInvoiceSummary')); }
    /** Shape $ (Value): string. Whether collection is blocked. While it is inventory_blocked, collection attempts return INVOICE_COLLECTION_BLOCKED. Value enum: "none", "inventory_blocked", "resolved".
     * @return ?string
     */
    public function getCollectionBlockStatus(): ?string { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** Shape $ (Value): string. When the invoice was created. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Customer billed by the invoice. Absent when the invoice has no customer.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. When payment is due. With payment terms, issue sets it from issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no due date. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string. Flint invoice ID.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. Sequential document number assigned when the invoice is issued. Absent on a draft.
     * @return ?string
     */
    public function getInvoiceNumber(): ?string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Shape $ (Value): boolean. Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it.
     * @return bool
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** Shape $ (Value): string. The order the invoice bills.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see MoneyValue}. What is still owed, as outstanding_money on the full Invoice reports it: never below zero, 0 on paid, credited, uncollectible, and void invoices, and equal to total_money on a draft. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Payments collected toward this invoice, online or as recorded manual payments, minus reversed payments, including payments toward late fees. Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): string. How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded".
     * @return ?string
     */
    public function getRefundStatus(): ?string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Shape $ (Value): {@see MoneyValue}. Money refunded to the buyer after collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. void and uncollectible are final. Refunds change refund_status without reopening the balance. Value enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see MoneyValue}. The invoice document total, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money on the full invoice. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
