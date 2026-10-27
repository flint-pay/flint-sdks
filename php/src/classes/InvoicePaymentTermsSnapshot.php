<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermsSnapshotCalculationOnReceipt|InvoicePaymentTermsSnapshotCalculationNetDays|InvoicePaymentTermsSnapshotCalculationDaysAfterMonthEnd|InvoicePaymentTermsSnapshotCalculationDayOfMonth|InvoicePaymentTermsSnapshotCalculationDayOfNextMonth|\stdClass $calculation
 * @property-read string $invoice_payment_term_id
 * @property-read InvoicePaymentTermsSnapshotLateFeePolicyFixed|InvoicePaymentTermsSnapshotLateFeePolicyPercentage|\stdClass|null $late_fee_policy
 * @property-read string $name
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentTermsSnapshot extends Model {
    /** @param array{'calculation': mixed, 'invoice_payment_term_id': string, 'late_fee_policy'?: mixed, 'name': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsSnapshot')); }
    /** Shape $ (Value): {@see InvoicePaymentTermCalculation}. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.
     * @return InvoicePaymentTermsSnapshotCalculationOnReceipt|InvoicePaymentTermsSnapshotCalculationNetDays|InvoicePaymentTermsSnapshotCalculationDaysAfterMonthEnd|InvoicePaymentTermsSnapshotCalculationDayOfMonth|InvoicePaymentTermsSnapshotCalculationDayOfNextMonth|\stdClass
     */
    public function getCalculation(): InvoicePaymentTermsSnapshotCalculationOnReceipt|InvoicePaymentTermsSnapshotCalculationNetDays|InvoicePaymentTermsSnapshotCalculationDaysAfterMonthEnd|InvoicePaymentTermsSnapshotCalculationDayOfMonth|InvoicePaymentTermsSnapshotCalculationDayOfNextMonth|\stdClass { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** Shape $ (Value): {@see InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     * @return InvoicePaymentTermsSnapshotLateFeePolicyFixed|InvoicePaymentTermsSnapshotLateFeePolicyPercentage|\stdClass|null
     */
    public function getLateFeePolicy(): InvoicePaymentTermsSnapshotLateFeePolicyFixed|InvoicePaymentTermsSnapshotLateFeePolicyPercentage|\stdClass|null { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer. Version of the invoice payment term captured in this snapshot. Format: int32.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
