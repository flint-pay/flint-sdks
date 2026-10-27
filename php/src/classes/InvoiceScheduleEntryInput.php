<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceScheduleAmountSpecificationInput|array<array-key, mixed>|\stdClass $amount_specification
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read InvoiceScheduleDueInput|array<array-key, mixed>|\stdClass $due
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $kind
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $paid_money
 * @property-read string $status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleEntryInput extends Model {
    /** @param array{'amount_specification': InvoiceScheduleAmountSpecificationInput|array<array-key, mixed>|\stdClass, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'due': InvoiceScheduleDueInput|array<array-key, mixed>|\stdClass, 'invoice_schedule_entry_id': string, 'kind': string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'written_off_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryInput')); }
    /** Shape $ (Value): {@see InvoiceScheduleAmountSpecificationInput}. How the entry's amount is set: a fixed amount, a percent of the invoice total, or the remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.
     * @return InvoiceScheduleAmountSpecificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_specification is omitted; use hasAmountSpecification() or valueOrDefault().
     */
    public function getAmountSpecification(): mixed { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credit note credit allocated to this entry, minus reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see InvoiceScheduleDueInput}. When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a set date, or on the invoice due date.
     * @return InvoiceScheduleDueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When due is omitted; use hasDue() or valueOrDefault().
     */
    public function getDue(): mixed { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** Shape $ (Value): string. Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry.
     * @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Shape $ (Value): string. The entry's role in the schedule. Value enum: "deposit", "installment", "balance".
     * @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** Shape $ (Value): {@see MoneyValueInput}. What is still owed on this entry, including its unpaid late fee, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Payments applied to this entry, minus reversed payments, including payments toward its late fee. It can exceed total_money when the entry carries a late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Shape $ (Value): string. The entry's payment status, computed when the invoice is read. It follows the entry's balance and due time, not the invoice's status. Value enum: "pending", "due", "partially_satisfied", "satisfied", "overdue".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The entry's share of the invoice total, resolved from amount_specification against snapshot.pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The part of this entry written off when the invoice was marked uncollectible, including its unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
