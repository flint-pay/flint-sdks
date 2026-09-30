<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $assessed_at
 * @property-read MoneyValue $base_outstanding_money
 * @property-read string $invoice_late_fee_id
 * @property-read string $invoice_schedule_entry_id
 * @property-read InvoiceLateFeeLateFeePolicyFixed|InvoiceLateFeeLateFeePolicyPercentage|\stdClass $late_fee_policy
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $paid_money
 * @property-read string $waived_at
 * @property-read MoneyValue $waived_money
 * @property-read string $waiver_reason
 * @property-read MoneyValue $written_off_money
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoiceLateFee extends Model {
    /** @param array{'amount_money': mixed, 'assessed_at': string, 'base_outstanding_money': mixed, 'invoice_late_fee_id': string, 'invoice_schedule_entry_id'?: string, 'late_fee_policy'?: mixed, 'outstanding_money': mixed, 'paid_money': mixed, 'waived_at'?: string, 'waived_money': mixed, 'waiver_reason'?: string, 'written_off_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFee')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When assessed_at is omitted; use hasAssessedAt() or valueOrDefault().
     */
    public function getAssessedAt(): string { return $this->get('assessed_at'); }
    public function hasAssessedAt(): bool { return $this->has('assessed_at'); }
    /** @return MoneyValue
     * @throws SdkError When base_outstanding_money is omitted; use hasBaseOutstandingMoney() or valueOrDefault().
     */
    public function getBaseOutstandingMoney(): MoneyValue { return $this->get('base_outstanding_money'); }
    public function hasBaseOutstandingMoney(): bool { return $this->has('base_outstanding_money'); }
    /** @return string
     * @throws SdkError When invoice_late_fee_id is omitted; use hasInvoiceLateFeeId() or valueOrDefault().
     */
    public function getInvoiceLateFeeId(): string { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** @return InvoiceLateFeeLateFeePolicyFixed|InvoiceLateFeeLateFeePolicyPercentage|\stdClass
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): InvoiceLateFeeLateFeePolicyFixed|InvoiceLateFeeLateFeePolicyPercentage|\stdClass { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** @return MoneyValue
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** @return MoneyValue
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** @return string
     * @throws SdkError When waived_at is omitted; use hasWaivedAt() or valueOrDefault().
     */
    public function getWaivedAt(): string { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** @return MoneyValue
     * @throws SdkError When waived_money is omitted; use hasWaivedMoney() or valueOrDefault().
     */
    public function getWaivedMoney(): MoneyValue { return $this->get('waived_money'); }
    public function hasWaivedMoney(): bool { return $this->has('waived_money'); }
    /** @return string
     * @throws SdkError When waiver_reason is omitted; use hasWaiverReason() or valueOrDefault().
     */
    public function getWaiverReason(): string { return $this->get('waiver_reason'); }
    public function hasWaiverReason(): bool { return $this->has('waiver_reason'); }
    /** @return MoneyValue
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): MoneyValue { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
