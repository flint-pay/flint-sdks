<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $assessed_at
 * @property-read MoneyValue $base_outstanding_money
 * @property-read string $invoice_late_fee_id
 * @property-read ?string $invoice_schedule_entry_id
 * @property-read mixed $late_fee_policy
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $paid_money
 * @property-read ?string $waived_at
 * @property-read MoneyValue $waived_money
 * @property-read ?string $waiver_reason_message
 * @property-read MoneyValue $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceLateFee extends Model {
    /** @param array{'amount_money': mixed, 'assessed_at': string, 'base_outstanding_money': mixed, 'invoice_late_fee_id': string, 'invoice_schedule_entry_id'?: string, 'late_fee_policy': mixed, 'outstanding_money': mixed, 'paid_money': mixed, 'waived_at'?: string, 'waived_money': mixed, 'waiver_reason_message'?: string, 'written_off_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFee')); }
    /** Shape $ (Value): {@see MoneyValue}. The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. When the fee was assessed. Format: date-time.
     * @return string
     */
    public function getAssessedAt(): string { return $this->get('assessed_at'); }
    public function hasAssessedAt(): bool { return $this->has('assessed_at'); }
    /** Shape $ (Value): {@see MoneyValue}. The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBaseOutstandingMoney(): MoneyValue { return $this->get('base_outstanding_money'); }
    public function hasBaseOutstandingMoney(): bool { return $this->has('base_outstanding_money'); }
    /** Shape $ (Value): string. Flint invoice late fee ID.
     * @return string
     */
    public function getInvoiceLateFeeId(): string { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** Shape $ (Value): string. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver.
     * @return ?string
     */
    public function getInvoiceScheduleEntryId(): ?string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Shape $ (Value): {@see InvoiceLateFeePolicy} or null. The late fee policy from payment_terms_snapshot, copied when the fee was assessed. Shape $.anyOf[1] (Value): {@see InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. Shape $.anyOf[2] (Value): null.
     * @return mixed
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** Shape $ (Value): {@see MoneyValue}. What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Payments applied to this fee, minus reversed payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): string. When the fee was waived. Absent unless it was waived. Format: date-time.
     * @return ?string
     */
    public function getWaivedAt(): ?string { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** Shape $ (Value): {@see MoneyValue}. The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getWaivedMoney(): MoneyValue { return $this->get('waived_money'); }
    public function hasWaivedMoney(): bool { return $this->has('waived_money'); }
    /** Shape $ (Value): string. Why the fee was waived, as given when waiving it.
     * @return ?string
     */
    public function getWaiverReasonMessage(): ?string { return $this->get('waiver_reason_message'); }
    public function hasWaiverReasonMessage(): bool { return $this->has('waiver_reason_message'); }
    /** Shape $ (Value): {@see MoneyValue}. The part of this fee written off when the invoice was marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getWrittenOffMoney(): MoneyValue { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
