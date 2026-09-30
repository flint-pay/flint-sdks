<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $invoice_payment_term_id
 * @property-read InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass $late_fee_policy
 * @property-read string $name
 * @property-read int $revision
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermsSnapshotInput extends Model {
    /** @param array{'calculation': InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass, 'invoice_payment_term_id': string, 'late_fee_policy'?: InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass, 'name': string, 'revision': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsSnapshotInput')); }
    /** @return InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** @return string
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** @return InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return int
     * @throws SdkError When revision is omitted; use hasRevision() or valueOrDefault().
     */
    public function getRevision(): int { return $this->get('revision'); }
    public function hasRevision(): bool { return $this->has('revision'); }
}
