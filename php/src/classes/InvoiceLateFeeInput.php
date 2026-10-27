<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $assessed_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $base_outstanding_money
 * @property-read string $invoice_late_fee_id
 * @property-read string $invoice_schedule_entry_id
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null $late_fee_policy
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $paid_money
 * @property-read string|\DateTimeInterface $waived_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $waived_money
 * @property-read string $waiver_reason_message
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceLateFeeInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'assessed_at': string|\DateTimeInterface, 'base_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'invoice_late_fee_id': string, 'invoice_schedule_entry_id'?: string, 'late_fee_policy': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'waived_at'?: string|\DateTimeInterface, 'waived_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'waiver_reason_message'?: string, 'written_off_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFeeInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. When the fee was assessed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When assessed_at is omitted; use hasAssessedAt() or valueOrDefault().
     */
    public function getAssessedAt(): string|\DateTimeInterface { return $this->get('assessed_at'); }
    public function hasAssessedAt(): bool { return $this->has('assessed_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When base_outstanding_money is omitted; use hasBaseOutstandingMoney() or valueOrDefault().
     */
    public function getBaseOutstandingMoney(): mixed { return $this->get('base_outstanding_money'); }
    public function hasBaseOutstandingMoney(): bool { return $this->has('base_outstanding_money'); }
    /** Shape $ (Value): string. Flint invoice late fee ID.
     * @return string
     * @throws SdkError When invoice_late_fee_id is omitted; use hasInvoiceLateFeeId() or valueOrDefault().
     */
    public function getInvoiceLateFeeId(): string { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** Shape $ (Value): string. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver.
     * @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Shape $ (Value): {@see InvoiceLateFeePolicyInput} or null. The late fee policy from payment_terms_snapshot, copied when the fee was assessed. Shape $.anyOf[1] (Value): {@see InvoiceLateFeePolicyInput}. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. Shape $.anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** Shape $ (Value): {@see MoneyValueInput}. What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Payments applied to this fee, minus reversed payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): string. When the fee was waived. Absent unless it was waived. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When waived_at is omitted; use hasWaivedAt() or valueOrDefault().
     */
    public function getWaivedAt(): string|\DateTimeInterface { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When waived_money is omitted; use hasWaivedMoney() or valueOrDefault().
     */
    public function getWaivedMoney(): mixed { return $this->get('waived_money'); }
    public function hasWaivedMoney(): bool { return $this->has('waived_money'); }
    /** Shape $ (Value): string. Why the fee was waived, as given when waiving it.
     * @return string
     * @throws SdkError When waiver_reason_message is omitted; use hasWaiverReasonMessage() or valueOrDefault().
     */
    public function getWaiverReasonMessage(): string { return $this->get('waiver_reason_message'); }
    public function hasWaiverReasonMessage(): bool { return $this->has('waiver_reason_message'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
