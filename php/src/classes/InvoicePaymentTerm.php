<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermCalculationOnReceipt|InvoicePaymentTermCalculationNetDays|InvoicePaymentTermCalculationDaysAfterMonthEnd|InvoicePaymentTermCalculationDayOfMonth|InvoicePaymentTermCalculationDayOfNextMonth|\stdClass $calculation
 * @property-read string $created_at
 * @property-read string $external_reference_id
 * @property-read string $invoice_payment_term_id
 * @property-read InvoicePaymentTermLateFeePolicyFixed|InvoicePaymentTermLateFeePolicyPercentage|\stdClass $late_fee_policy
 * @property-read string $merchant_id
 * @property-read string $name
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoicePaymentTerm extends Model {
    /** @param array{'calculation': mixed, 'created_at': string, 'external_reference_id'?: string, 'invoice_payment_term_id': string, 'late_fee_policy'?: mixed, 'merchant_id': string, 'name': string, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTerm')); }
    /** @return InvoicePaymentTermCalculationOnReceipt|InvoicePaymentTermCalculationNetDays|InvoicePaymentTermCalculationDaysAfterMonthEnd|InvoicePaymentTermCalculationDayOfMonth|InvoicePaymentTermCalculationDayOfNextMonth|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): InvoicePaymentTermCalculationOnReceipt|InvoicePaymentTermCalculationNetDays|InvoicePaymentTermCalculationDaysAfterMonthEnd|InvoicePaymentTermCalculationDayOfMonth|InvoicePaymentTermCalculationDayOfNextMonth|\stdClass { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** @return InvoicePaymentTermLateFeePolicyFixed|InvoicePaymentTermLateFeePolicyPercentage|\stdClass
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): InvoicePaymentTermLateFeePolicyFixed|InvoicePaymentTermLateFeePolicyPercentage|\stdClass { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
