<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string $invoice_number
 * @property-read string|\DateTimeInterface $issued_at
 * @property-read list<MerchantBillingInvoiceLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $merchant_billing_invoice_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read string|\DateTimeInterface $paid_at
 * @property-read string|\DateTimeInterface $period_end_at
 * @property-read string|\DateTimeInterface $period_start_at
 * @property-read string $status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $subtotal_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string|\DateTimeInterface $voided_at
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantBillingInvoiceInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'due_at': string|\DateTimeInterface, 'invoice_number': string, 'issued_at'?: string|\DateTimeInterface, 'line_items': list<MerchantBillingInvoiceLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_billing_invoice_id': string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_at'?: string|\DateTimeInterface, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'status': string, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'voided_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceInput')); }
    /** Shape $ (Value): string. When Flint created the invoice. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): string. When payment of the invoice is due. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string. Human-readable invoice number.
     * @return string
     * @throws SdkError When invoice_number is omitted; use hasInvoiceNumber() or valueOrDefault().
     */
    public function getInvoiceNumber(): string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Shape $ (Value): string. When Flint issued the invoice. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string|\DateTimeInterface { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Shape $ (Value): Array of {@see MerchantBillingInvoiceLineItemInput}. Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to credit_money. Shape $[] (Value): {@see MerchantBillingInvoiceLineItemInput}. One line on a merchant billing invoice, either a subscription charge or a credit, with quantity, unit price, and total.
     * @return list<MerchantBillingInvoiceLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string. Stable identifier of the invoice.
     * @return string
     * @throws SdkError When merchant_billing_invoice_id is omitted; use hasMerchantBillingInvoiceId() or valueOrDefault().
     */
    public function getMerchantBillingInvoiceId(): string { return $this->get('merchant_billing_invoice_id'); }
    public function hasMerchantBillingInvoiceId(): bool { return $this->has('merchant_billing_invoice_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Part of total_money Flint still has to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): string. When the invoice was paid. Removed if a reversed collection reopens it. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When paid_at is omitted; use hasPaidAt() or valueOrDefault().
     */
    public function getPaidAt(): string|\DateTimeInterface { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Shape $ (Value): string. Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_end_at is omitted; use hasPeriodEndAt() or valueOrDefault().
     */
    public function getPeriodEndAt(): string|\DateTimeInterface { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Shape $ (Value): string. Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_start_at is omitted; use hasPeriodStartAt() or valueOrDefault().
     */
    public function getPeriodStartAt(): string|\DateTimeInterface { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Shape $ (Value): string. Collection state of the invoice. Flint issues an invoice as open and marks it paid once collected; a reversed collection returns it to open, and written_off means Flint stopped collecting it. Value enum: "draft", "open", "collecting", "paid", "delinquent", "void", "written_off".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Sum of the subscription line items, before credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. What the invoice charges: subtotal_money minus credit_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string. When the invoice was voided. Absent on invoices that weren't. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string|\DateTimeInterface { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
