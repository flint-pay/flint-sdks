<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $amount_money
 * @property-read string|null $assessed_at
 * @property-read mixed $base_outstanding_money
 * @property-read string|null $invoice_id
 * @property-read string|null $invoice_late_fee_id
 * @property-read string|null $invoice_schedule_entry_id
 * @property-read mixed $late_fee_policy
 * @property-read mixed $outstanding_money
 * @property-read mixed $paid_money
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $waived_at
 * @property-read mixed $waived_money
 * @property-read string|null $waiver_reason_message
 * @property-read mixed $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceLateFeePreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'assessed_at'?: mixed, 'base_outstanding_money'?: mixed, 'invoice_id'?: mixed, 'invoice_late_fee_id'?: mixed, 'invoice_schedule_entry_id'?: mixed, 'late_fee_policy'?: mixed, 'outstanding_money'?: mixed, 'paid_money'?: mixed, 'supported_actions'?: mixed, 'waived_at'?: mixed, 'waived_money'?: mixed, 'waiver_reason_message'?: mixed, 'written_off_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFeePreviousAttributes')); }
    /** The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the fee was assessed. anyOf[1] (Value): string. When the fee was assessed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAssessedAt(): string|null { return $this->get('assessed_at'); }
    public function hasAssessedAt(): bool { return $this->has('assessed_at'); }
    /** The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getBaseOutstandingMoney(): mixed { return $this->get('base_outstanding_money'); }
    public function hasBaseOutstandingMoney(): bool { return $this->has('base_outstanding_money'); }
    /** Invoice that owns this late fee. anyOf[1] (Value): string. Invoice that owns this late fee. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Flint invoice late fee ID. anyOf[1] (Value): string. Flint invoice late fee ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceLateFeeId(): string|null { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. anyOf[1] (Value): string. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceScheduleEntryId(): string|null { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. anyOf[1] (Value): ({@see InvoiceLateFeePolicyPreviousAttributes} or null). The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. anyOf[1].anyOf[1] (Value): {@see InvoiceLateFeePolicyPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "waive". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "waive". anyOf[1][] (Value): string.  Value enum: "waive". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the fee was waived. Absent unless it was waived. anyOf[1] (Value): string. When the fee was waived. Absent unless it was waived. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWaivedAt(): string|null { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getWaivedMoney(): mixed { return $this->get('waived_money'); }
    public function hasWaivedMoney(): bool { return $this->has('waived_money'); }
    /** Why the fee was waived, as given when waiving it. anyOf[1] (Value): string. Why the fee was waived, as given when waiving it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWaiverReasonMessage(): string|null { return $this->get('waiver_reason_message'); }
    public function hasWaiverReasonMessage(): bool { return $this->has('waiver_reason_message'); }
    /** The part of this fee written off when the invoice was marked uncollectible. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
