<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $invoice_payment_term_id
 * @property-read InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass $late_fee_policy
 * @property-read string $name
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermsSnapshotInput extends Model {
    /** @param array{'calculation': InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass, 'invoice_payment_term_id': string, 'late_fee_policy'?: InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass, 'name': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsSnapshotInput')); }
    /** How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.
     * @return InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** invoice_payment_term_id
     * @return string
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     * @return InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Version of the invoice payment term captured in this snapshot. Format: int32.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
