<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermCalculationOnReceipt|InvoicePaymentTermCalculationNetDays|InvoicePaymentTermCalculationDaysAfterMonthEnd|InvoicePaymentTermCalculationDayOfMonth|InvoicePaymentTermCalculationDayOfNextMonth|\stdClass $calculation
 * @property-read string $created_at
 * @property-read ?string $external_reference_id
 * @property-read string $invoice_payment_term_id
 * @property-read InvoicePaymentTermLateFeePolicyFixed|InvoicePaymentTermLateFeePolicyPercentage|\stdClass|null $late_fee_policy
 * @property-read string $merchant_id
 * @property-read string $name
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentTerm extends Model {
    /** @param array{'calculation': mixed, 'created_at': string, 'external_reference_id'?: string, 'invoice_payment_term_id': string, 'late_fee_policy'?: mixed, 'merchant_id': string, 'name': string, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTerm')); }
    /** Shape $ (Value): {@see InvoicePaymentTermCalculation}. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.
     * @return InvoicePaymentTermCalculationOnReceipt|InvoicePaymentTermCalculationNetDays|InvoicePaymentTermCalculationDaysAfterMonthEnd|InvoicePaymentTermCalculationDayOfMonth|InvoicePaymentTermCalculationDayOfNextMonth|\stdClass
     */
    public function getCalculation(): InvoicePaymentTermCalculationOnReceipt|InvoicePaymentTermCalculationNetDays|InvoicePaymentTermCalculationDaysAfterMonthEnd|InvoicePaymentTermCalculationDayOfMonth|InvoicePaymentTermCalculationDayOfNextMonth|\stdClass { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** Shape $ (Value): {@see InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     * @return InvoicePaymentTermLateFeePolicyFixed|InvoicePaymentTermLateFeePolicyPercentage|\stdClass|null
     */
    public function getLateFeePolicy(): InvoicePaymentTermLateFeePolicyFixed|InvoicePaymentTermLateFeePolicyPercentage|\stdClass|null { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.  Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
