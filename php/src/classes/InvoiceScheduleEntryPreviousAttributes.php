<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read \stdClass|null $amount_specification
 * @property-read MoneyValuePreviousAttributes|null $credited_money
 * @property-read \stdClass|null $due
 * @property-read string|null $invoice_schedule_entry_id
 * @property-read string|null $kind
 * @property-read MoneyValuePreviousAttributes|null $outstanding_money
 * @property-read MoneyValuePreviousAttributes|null $paid_money
 * @property-read string|null $status
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read MoneyValuePreviousAttributes|null $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceScheduleEntryPreviousAttributes extends Model {
    /** @param array{'amount_specification'?: mixed, 'credited_money'?: mixed, 'due'?: mixed, 'invoice_schedule_entry_id'?: mixed, 'kind'?: mixed, 'outstanding_money'?: mixed, 'paid_money'?: mixed, 'status'?: mixed, 'total_money'?: mixed, 'written_off_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryPreviousAttributes')); }
    /** How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. anyOf[1] (Value): {@see InvoiceScheduleAmountSpecificationPreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getAmountSpecification(): \stdClass|null { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** Credit note credit allocated to this entry, minus reversed allocations. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCreditedMoney(): MoneyValuePreviousAttributes|null { return $this->get('credited_money'); }
    public function hasCreditedMoney(): bool { return $this->has('credited_money'); }
    /** When the entry is due. anyOf[1] (Value): {@see InvoiceScheduleDuePreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getDue(): \stdClass|null { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. anyOf[1] (Value): string. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceScheduleEntryId(): string|null { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". anyOf[1] (Value): string. The entry's role in the schedule. Value enum: "deposit", "installment", "balance". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getKind(): string|null { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** What is still owed on this entry, including its unpaid late fee, never below zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOutstandingMoney(): MoneyValuePreviousAttributes|null { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Payments applied to this entry, minus reversed payments, including payments toward its late fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getPaidMoney(): MoneyValuePreviousAttributes|null { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Value enum: "pending", "due", "partially_satisfied", "satisfied", "overdue". anyOf[1] (Value): string. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Value enum: "pending", "due", "partially_satisfied", "satisfied", "overdue". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The entry's share of the invoice total, resolved from amount_specification against pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getWrittenOffMoney(): MoneyValuePreviousAttributes|null { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
