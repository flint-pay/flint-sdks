<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $collection_block_status
 * @property-read string|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $due_date
 * @property-read string|null $invoice_id
 * @property-read string|null $invoice_number
 * @property-read bool|null $is_overdue
 * @property-read string|null $order_id
 * @property-read PricingAmountsPreviousAttributes|null $pricing_amounts
 * @property-read string|null $refund_status
 * @property-read InvoiceSettlementAmountsPreviousAttributes|null $settlement_amounts
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedInvoiceSummaryPreviousAttributes extends Model {
    /** @param array{'collection_block_status'?: mixed, 'created_at'?: mixed, 'customer_id'?: mixed, 'due_date'?: mixed, 'invoice_id'?: mixed, 'invoice_number'?: mixed, 'is_overdue'?: mixed, 'order_id'?: mixed, 'pricing_amounts'?: mixed, 'refund_status'?: mixed, 'settlement_amounts'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedInvoiceSummaryPreviousAttributes')); }
    /** Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether collection is blocked. While it is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCollectionBlockStatus(): string|null { return $this->get('collection_block_status'); }
    public function hasCollectionBlockStatus(): bool { return $this->has('collection_block_status'); }
    /** When the invoice was created. anyOf[1] (Value): string. When the invoice was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer billed by the invoice. Absent when the invoice has no customer. anyOf[1] (Value): string. Customer billed by the invoice. Absent when the invoice has no customer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only after this date ends. Automatic collection runs at the later of issue and the start of this date. With payment terms, issue computes this date from issued_at. Absent when there is no due date. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDueDate(): string|null { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Sequential document number assigned when the invoice is issued. Absent on a draft. anyOf[1] (Value): string. Sequential document number assigned when the invoice is issued. Absent on a draft. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceNumber(): string|null { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. anyOf[1] (Value): boolean. Whether the invoice is open or partially_paid and past due with a balance remaining, as is_overdue on the full Invoice reports it. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsOverdue(): bool|null { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** The order the invoice bills. anyOf[1] (Value): string. The order the invoice bills. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The invoice pricing totals, frozen at issue; a draft previews the backing order. anyOf[1] (Value): {@see PricingAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return PricingAmountsPreviousAttributes|null
     */
    public function getPricingAmounts(): PricingAmountsPreviousAttributes|null { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much of the collected money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundStatus(): string|null { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** The same settlement amounts as the full Invoice. anyOf[1] (Value): {@see InvoiceSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return InvoiceSettlementAmountsPreviousAttributes|null
     */
    public function getSettlementAmounts(): InvoiceSettlementAmountsPreviousAttributes|null { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value): string. Current invoice status. paid and credited close the current balance and can reopen to open or partially_paid after a payment or credit allocation reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual recovery payments and becomes paid when fully recovered; reversals restore the write-off. voided is final. Refunds change refund_status without reopening the balance. A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". anyOf[1][] (Value): string.  Value enum: "collect", "issue", "mark_uncollectible", "void". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the invoice last changed. anyOf[1] (Value): string. When the invoice last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
