<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read MoneyValue $credit_money
 * @property-read string $due_at
 * @property-read string $invoice_number
 * @property-read string $issued_at
 * @property-read list<MerchantSubscriptionInvoiceLine> $lines
 * @property-read string $merchant_subscription_invoice_id
 * @property-read MoneyValue $outstanding_money
 * @property-read string $paid_at
 * @property-read string $period_end
 * @property-read string $period_start
 * @property-read string $status
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue $total_money
 * @property-read string $updated_at
 * @property-read string $voided_at
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventMerchantSubscriptionInvoiceUpdatedData extends Model {
    /** @param array{'created_at': string, 'credit_money': mixed, 'due_at': string, 'invoice_number': string, 'issued_at'?: string, 'lines': list<mixed>, 'merchant_subscription_invoice_id': string, 'outstanding_money': mixed, 'paid_at'?: string, 'period_end': string, 'period_start': string, 'status': string, 'subtotal_money': mixed, 'total_money': mixed, 'updated_at': string, 'voided_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantSubscriptionInvoiceUpdatedData')); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return MoneyValue
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** @return string
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** @return string
     * @throws SdkError When invoice_number is omitted; use hasInvoiceNumber() or valueOrDefault().
     */
    public function getInvoiceNumber(): string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** @return string
     * @throws SdkError When issued_at is omitted; use hasIssuedAt() or valueOrDefault().
     */
    public function getIssuedAt(): string { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** @return list<MerchantSubscriptionInvoiceLine>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** @return string
     * @throws SdkError When merchant_subscription_invoice_id is omitted; use hasMerchantSubscriptionInvoiceId() or valueOrDefault().
     */
    public function getMerchantSubscriptionInvoiceId(): string { return $this->get('merchant_subscription_invoice_id'); }
    public function hasMerchantSubscriptionInvoiceId(): bool { return $this->has('merchant_subscription_invoice_id'); }
    /** @return MoneyValue
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** @return string
     * @throws SdkError When paid_at is omitted; use hasPaidAt() or valueOrDefault().
     */
    public function getPaidAt(): string { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** @return string
     * @throws SdkError When period_end is omitted; use hasPeriodEnd() or valueOrDefault().
     */
    public function getPeriodEnd(): string { return $this->get('period_end'); }
    public function hasPeriodEnd(): bool { return $this->has('period_end'); }
    /** @return string
     * @throws SdkError When period_start is omitted; use hasPeriodStart() or valueOrDefault().
     */
    public function getPeriodStart(): string { return $this->get('period_start'); }
    public function hasPeriodStart(): bool { return $this->has('period_start'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return MoneyValue
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** @return MoneyValue
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
