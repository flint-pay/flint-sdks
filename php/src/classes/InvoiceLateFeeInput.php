<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $assessed_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $base_outstanding_money
 * @property-read string $invoice_late_fee_id
 * @property-read string $invoice_schedule_entry_id
 * @property-read InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass $late_fee_policy
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $paid_money
 * @property-read string|\DateTimeInterface $waived_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $waived_money
 * @property-read string $waiver_reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceLateFeeInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'assessed_at': string|\DateTimeInterface, 'base_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'invoice_late_fee_id': string, 'invoice_schedule_entry_id'?: string, 'late_fee_policy'?: InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'waived_at'?: string|\DateTimeInterface, 'waived_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'waiver_reason'?: string, 'written_off_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFeeInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When assessed_at is omitted; use hasAssessedAt() or valueOrDefault().
     */
    public function getAssessedAt(): string|\DateTimeInterface { return $this->get('assessed_at'); }
    public function hasAssessedAt(): bool { return $this->has('assessed_at'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When base_outstanding_money is omitted; use hasBaseOutstandingMoney() or valueOrDefault().
     */
    public function getBaseOutstandingMoney(): mixed { return $this->get('base_outstanding_money'); }
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
    /** @return InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When waived_at is omitted; use hasWaivedAt() or valueOrDefault().
     */
    public function getWaivedAt(): string|\DateTimeInterface { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When waived_money is omitted; use hasWaivedMoney() or valueOrDefault().
     */
    public function getWaivedMoney(): mixed { return $this->get('waived_money'); }
    public function hasWaivedMoney(): bool { return $this->has('waived_money'); }
    /** @return string
     * @throws SdkError When waiver_reason is omitted; use hasWaiverReason() or valueOrDefault().
     */
    public function getWaiverReason(): string { return $this->get('waiver_reason'); }
    public function hasWaiverReason(): bool { return $this->has('waiver_reason'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
