<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceScheduleEntryAmountSpecificationFixed|InvoiceScheduleEntryAmountSpecificationPercentage|InvoiceScheduleEntryAmountSpecificationRemainingBalance|\stdClass $amount_specification
 * @property-read MoneyValue $credit_money
 * @property-read InvoiceScheduleEntryDueAtIssue|InvoiceScheduleEntryDueDate|InvoiceScheduleEntryDueInvoiceDueDate|\stdClass $due
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $kind
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $paid_money
 * @property-read string $status
 * @property-read MoneyValue $total_money
 * @property-read MoneyValue $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceScheduleEntry extends Model {
    /** @param array{'amount_specification': mixed, 'credit_money': mixed, 'due': mixed, 'invoice_schedule_entry_id': string, 'kind': string, 'outstanding_money': mixed, 'paid_money': mixed, 'status': string, 'total_money': mixed, 'written_off_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntry')); }
    /** How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.
     * @return InvoiceScheduleEntryAmountSpecificationFixed|InvoiceScheduleEntryAmountSpecificationPercentage|InvoiceScheduleEntryAmountSpecificationRemainingBalance|\stdClass
     */
    public function getAmountSpecification(): InvoiceScheduleEntryAmountSpecificationFixed|InvoiceScheduleEntryAmountSpecificationPercentage|InvoiceScheduleEntryAmountSpecificationRemainingBalance|\stdClass { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** Credit note credit allocated to this entry, minus reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.
     * @return InvoiceScheduleEntryDueAtIssue|InvoiceScheduleEntryDueDate|InvoiceScheduleEntryDueInvoiceDueDate|\stdClass
     */
    public function getDue(): InvoiceScheduleEntryDueAtIssue|InvoiceScheduleEntryDueDate|InvoiceScheduleEntryDueInvoiceDueDate|\stdClass { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry.
     * @return string
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance".
     * @return string
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** What is still owed on this entry, including its unpaid late fee, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Payments applied to this entry, minus reversed payments, including payments toward its late fee. It can exceed total_money when the entry carries a late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Value enum: "pending", "due", "partially_satisfied", "satisfied", "overdue".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The entry's share of the invoice total, resolved from amount_specification against snapshot.pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getWrittenOffMoney(): MoneyValue { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
