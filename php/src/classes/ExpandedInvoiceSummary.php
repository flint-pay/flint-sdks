<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $collection_block_status
 * @property-read ?string $created_at
 * @property-read ?string $customer_id
 * @property-read ?string $due_date
 * @property-read string $invoice_id
 * @property-read ?string $invoice_number
 * @property-read bool $is_overdue
 * @property-read ?string $order_id
 * @property-read PricingAmounts $pricing_amounts
 * @property-read ?string $refund_status
 * @property-read InvoiceSettlementAmounts $settlement_amounts
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedInvoiceSummary extends Model {
    /** @param array{'collection_block_status'?: string, 'created_at'?: string, 'customer_id'?: string, 'due_date'?: string, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'order_id'?: string, 'pricing_amounts': mixed, 'refund_status'?: string, 'settlement_amounts': mixed, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedInvoiceSummary')); }
    /** Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * @return ?string
     */
    public function getCollectionBlockStatus(): ?string { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** When the invoice was created. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer billed by the invoice. Absent when the invoice has no customer.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: date.
     * @return ?string
     */
    public function getDueDate(): ?string { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** Flint invoice ID.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Sequential document number assigned when the invoice is issued. Absent on a draft.
     * @return ?string
     */
    public function getInvoiceNumber(): ?string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it.
     * @return bool
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** The order the invoice bills.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The invoice pricing totals, frozen at issue; a draft previews the backing order. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     * @return PricingAmounts
     */
    public function getPricingAmounts(): PricingAmounts { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded".
     * @return ?string
     */
    public function getRefundStatus(): ?string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** The same settlement amounts as the full Invoice. The bill settlement amounts plus credit notes, the amount due now, and late fees. Invoice paid_money includes late-fee payments and excludes reversed payments. Refunds and card chargeback losses do not reopen outstanding_money or reduce paid_money. net_collected_money is paid_money minus refunded_money, never below zero. Money collected, returned, waived, and still owed on a bill.
     * @return InvoiceSettlementAmounts
     */
    public function getSettlementAmounts(): InvoiceSettlementAmounts { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. An ACH bank return reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". [] (Value): string.  Value enum: "collect", "issue", "mark_uncollectible", "void".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the invoice last changed. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
