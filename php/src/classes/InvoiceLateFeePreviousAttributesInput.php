<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|\DateTimeInterface|null $assessed_at
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $base_outstanding_money
 * @property-read string|null $invoice_id
 * @property-read string|null $invoice_late_fee_id
 * @property-read string|null $invoice_schedule_entry_id
 * @property-read InvoiceLateFeePolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $late_fee_policy
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $outstanding_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $paid_money
 * @property-read list<string>|null $supported_actions
 * @property-read string|\DateTimeInterface|null $waived_at
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $waived_money
 * @property-read string|null $waiver_reason_message
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceLateFeePreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'assessed_at'?: string|\DateTimeInterface|null, 'base_outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'invoice_id'?: string|null, 'invoice_late_fee_id'?: string|null, 'invoice_schedule_entry_id'?: string|null, 'late_fee_policy'?: InvoiceLateFeePolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'paid_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'supported_actions'?: list<string>|null, 'waived_at'?: string|\DateTimeInterface|null, 'waived_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'waiver_reason_message'?: string|null, 'written_off_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFeePreviousAttributesInput')); }
    /** The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the fee was assessed. anyOf[1] (Value): string. When the fee was assessed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When assessed_at is omitted; use hasAssessedAt() or valueOrDefault().
     */
    public function getAssessedAt(): mixed { return $this->get('assessed_at'); }
    public function hasAssessedAt(): bool { return $this->has('assessed_at'); }
    /** The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When base_outstanding_money is omitted; use hasBaseOutstandingMoney() or valueOrDefault().
     */
    public function getBaseOutstandingMoney(): mixed { return $this->get('base_outstanding_money'); }
    public function hasBaseOutstandingMoney(): bool { return $this->has('base_outstanding_money'); }
    /** Invoice that owns this late fee. anyOf[1] (Value): string. Invoice that owns this late fee. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): mixed { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Flint invoice late fee ID. anyOf[1] (Value): string. Flint invoice late fee ID. Example: "inlf_01KEZF7C00NVR97MBH5AHR4W1X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_late_fee_id is omitted; use hasInvoiceLateFeeId() or valueOrDefault().
     */
    public function getInvoiceLateFeeId(): mixed { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. anyOf[1] (Value): string. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): mixed { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. anyOf[1] (Value): ({@see InvoiceLateFeePolicyPreviousAttributesInput} or null). The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. anyOf[1].anyOf[1] (Value): {@see InvoiceLateFeePolicyPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return InvoiceLateFeePolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "waive". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "waive". anyOf[1][] (Value): string.  Value enum: "waive". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the fee was waived. Absent unless it was waived. anyOf[1] (Value): string. When the fee was waived. Absent unless it was waived. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When waived_at is omitted; use hasWaivedAt() or valueOrDefault().
     */
    public function getWaivedAt(): mixed { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When waived_money is omitted; use hasWaivedMoney() or valueOrDefault().
     */
    public function getWaivedMoney(): mixed { return $this->get('waived_money'); }
    public function hasWaivedMoney(): bool { return $this->has('waived_money'); }
    /** Why the fee was waived, as given when waiving it. anyOf[1] (Value): string. Why the fee was waived, as given when waiving it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When waiver_reason_message is omitted; use hasWaiverReasonMessage() or valueOrDefault().
     */
    public function getWaiverReasonMessage(): mixed { return $this->get('waiver_reason_message'); }
    public function hasWaiverReasonMessage(): bool { return $this->has('waiver_reason_message'); }
    /** The part of this fee written off when the invoice was marked uncollectible. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
