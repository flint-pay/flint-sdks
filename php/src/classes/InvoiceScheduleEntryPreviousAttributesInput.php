<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceScheduleAmountSpecificationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_specification
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $credited_money
 * @property-read InvoiceScheduleDuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $due
 * @property-read string|null $invoice_schedule_entry_id
 * @property-read string|null $kind
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $outstanding_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $paid_money
 * @property-read string|null $status
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleEntryPreviousAttributesInput extends Model {
    /** @param array{'amount_specification'?: InvoiceScheduleAmountSpecificationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'credited_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'due'?: InvoiceScheduleDuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'invoice_schedule_entry_id'?: string|null, 'kind'?: string|null, 'outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'paid_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'written_off_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryPreviousAttributesInput')); }
    /** How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. anyOf[1] (Value): {@see InvoiceScheduleAmountSpecificationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return InvoiceScheduleAmountSpecificationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_specification is omitted; use hasAmountSpecification() or valueOrDefault().
     */
    public function getAmountSpecification(): mixed { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** Credit note credit allocated to this entry, minus reversed allocations. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When credited_money is omitted; use hasCreditedMoney() or valueOrDefault().
     */
    public function getCreditedMoney(): mixed { return $this->get('credited_money'); }
    public function hasCreditedMoney(): bool { return $this->has('credited_money'); }
    /** When the entry is due. anyOf[1] (Value): {@see InvoiceScheduleDuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return InvoiceScheduleDuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When due is omitted; use hasDue() or valueOrDefault().
     */
    public function getDue(): mixed { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. anyOf[1] (Value): string. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): mixed { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". anyOf[1] (Value): string. The entry's role in the schedule. Value enum: "deposit", "installment", "balance". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): mixed { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** What is still owed on this entry, including its unpaid late fee, never below zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Value enum: "pending", "due", "partially_satisfied", "satisfied", "overdue". anyOf[1] (Value): string. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Value enum: "pending", "due", "partially_satisfied", "satisfied", "overdue". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The entry's share of the invoice total, resolved from amount_specification against pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
