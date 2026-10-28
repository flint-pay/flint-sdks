<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read MoneyValue $credit_money
 * @property-read string $due_at
 * @property-read string $invoice_number
 * @property-read ?string $issued_at
 * @property-read list<MerchantBillingInvoiceLineItem> $line_items
 * @property-read string $merchant_billing_invoice_id
 * @property-read MoneyValue $outstanding_money
 * @property-read ?string $paid_at
 * @property-read string $period_end_at
 * @property-read string $period_start_at
 * @property-read string $status
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue $total_money
 * @property-read string $updated_at
 * @property-read ?string $voided_at
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingInvoice extends Model {
    /** @param array{'created_at': string, 'credit_money': mixed, 'due_at': string, 'invoice_number': string, 'issued_at'?: string, 'line_items': list<mixed>, 'merchant_billing_invoice_id': string, 'outstanding_money': mixed, 'paid_at'?: string, 'period_end_at': string, 'period_start_at': string, 'status': string, 'subtotal_money': mixed, 'total_money': mixed, 'updated_at': string, 'voided_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoice')); }
    /** Shape $ (Value): string. When Flint created the invoice. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MoneyValue}. Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): string. When payment of the invoice is due. Format: date-time.
     * @return string
     */
    public function getDueAt(): string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string. Human-readable invoice number.
     * @return string
     */
    public function getInvoiceNumber(): string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Shape $ (Value): string. When Flint issued the invoice. Format: date-time.
     * @return ?string
     */
    public function getIssuedAt(): ?string { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Shape $ (Value): Array of {@see MerchantBillingInvoiceLineItem}. Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to credit_money. Shape $[] (Value): {@see MerchantBillingInvoiceLineItem}. One line on a merchant billing invoice, either a subscription charge or a credit, with quantity, unit price, and total.
     * @return list<MerchantBillingInvoiceLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string. Stable identifier of the invoice.
     * @return string
     */
    public function getMerchantBillingInvoiceId(): string { return $this->get('merchant_billing_invoice_id'); }
    public function hasMerchantBillingInvoiceId(): bool { return $this->has('merchant_billing_invoice_id'); }
    /** Shape $ (Value): {@see MoneyValue}. Part of total_money Flint still has to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): string. When the invoice was paid. Removed if a reversed collection reopens it. Format: date-time.
     * @return ?string
     */
    public function getPaidAt(): ?string { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Shape $ (Value): string. Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: date-time.
     * @return string
     */
    public function getPeriodEndAt(): string { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Shape $ (Value): string. Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: date-time.
     * @return string
     */
    public function getPeriodStartAt(): string { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Shape $ (Value): string. Collection state of the invoice: open, paid, or written_off. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Value enum: "open", "paid", "written_off".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see MoneyValue}. Sum of the subscription line items, before credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Shape $ (Value): {@see MoneyValue}. What the invoice charges: subtotal_money minus credit_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string. When the invoice was voided. Absent on invoices that weren't. Format: date-time.
     * @return ?string
     */
    public function getVoidedAt(): ?string { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
