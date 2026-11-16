<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $applied_credit_money
 * @property-read string|null $created_at
 * @property-read string|null $due_at
 * @property-read string|null $invoice_number
 * @property-read string|null $issued_at
 * @property-read list<MerchantBillingInvoiceLineItemPreviousAttributes>|null $line_items
 * @property-read string|null $merchant_billing_invoice_id
 * @property-read MoneyValuePreviousAttributes|null $outstanding_money
 * @property-read string|null $paid_at
 * @property-read string|null $period_end_at
 * @property-read string|null $period_start_at
 * @property-read string|null $status
 * @property-read MoneyValuePreviousAttributes|null $subtotal_money
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingInvoiceIssuedEventDataPreviousAttributes extends Model {
    /** @param array{'applied_credit_money'?: mixed, 'created_at'?: mixed, 'due_at'?: mixed, 'invoice_number'?: mixed, 'issued_at'?: mixed, 'line_items'?: mixed, 'merchant_billing_invoice_id'?: mixed, 'outstanding_money'?: mixed, 'paid_at'?: mixed, 'period_end_at'?: mixed, 'period_start_at'?: mixed, 'status'?: mixed, 'subtotal_money'?: mixed, 'total_money'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceIssuedEventDataPreviousAttributes')); }
    /** Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAppliedCreditMoney(): MoneyValuePreviousAttributes|null { return $this->get('applied_credit_money'); }
    public function hasAppliedCreditMoney(): bool { return $this->has('applied_credit_money'); }
    /** When Flint created the invoice. anyOf[1] (Value): string. When Flint created the invoice. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When payment of the invoice is due. anyOf[1] (Value): string. When payment of the invoice is due. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDueAt(): string|null { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. anyOf[1] (Value): string. Unique invoice number; don't parse it. New numbers use FLINT-{account code}-{0001}, sequential per billing account; existing numbers are retained. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceNumber(): string|null { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** When Flint issued the invoice. anyOf[1] (Value): string. When Flint issued the invoice. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIssuedAt(): string|null { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. anyOf[1] (Value): Array of {@see MerchantBillingInvoiceLineItemPreviousAttributes}. Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to applied_credit_money. anyOf[1][] (Value): {@see MerchantBillingInvoiceLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<MerchantBillingInvoiceLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Stable identifier of the invoice. anyOf[1] (Value): string. Stable identifier of the invoice. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantBillingInvoiceId(): string|null { return $this->get('merchant_billing_invoice_id'); }
    public function hasMerchantBillingInvoiceId(): bool { return $this->has('merchant_billing_invoice_id'); }
    /** Part of total_money Flint still has to collect. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOutstandingMoney(): MoneyValuePreviousAttributes|null { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** When the invoice was paid. Removed if a reversed collection reopens it. anyOf[1] (Value): string. When the invoice was paid. Removed if a reversed collection reopens it. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaidAt(): string|null { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Exclusive invoice billing period end as an RFC 3339 UTC instant. anyOf[1] (Value): string. Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPeriodEndAt(): string|null { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Inclusive invoice billing period start as an RFC 3339 UTC instant. anyOf[1] (Value): string. Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPeriodStartAt(): string|null { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Value enum: "open", "paid", "written_off". anyOf[1] (Value): string. Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Value enum: "open", "paid", "written_off". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Sum of the subscription line items, before credit. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** What the invoice charges: subtotal_money minus applied_credit_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** When the invoice last changed. anyOf[1] (Value): string. When the invoice last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
