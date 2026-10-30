<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent': int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object $amount_specification
 * @property-read array{'due_at'?: string|\DateTimeInterface, 'type': string}|object|array{'due_at': string|\DateTimeInterface, 'type': string}|object $due
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $kind
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleEntryWriteInstallmentInput extends Model {
    /** @param array{'amount_specification': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent': int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object, 'due': array{'due_at'?: string|\DateTimeInterface, 'type': string}|object|array{'due_at': string|\DateTimeInterface, 'type': string}|object, 'invoice_schedule_entry_id'?: string, 'kind': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryWriteInstallmentInput')); }
    /** How much the entry collects. Deposits and installments use fixed or percentage, and the balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. amount_money (Optional): {@see MoneyValueInput}. The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: 0.0001. type (Required): string. How the entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@see InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@see InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage` variant of `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@see InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent': int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object
     * @throws SdkError When amount_specification is omitted; use hasAmountSpecification() or valueOrDefault().
     */
    public function getAmountSpecification(): mixed { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** When the entry is due. Deposits use at_issue or date, installments use date, and the balance uses invoice_due_date or date. When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. due_at (Optional): string. When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time. minLength: 1. type (Required): string. How the entry's due time is set. Value enum: "date". oneOf[1] (Value): {@see InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@see InvoiceScheduleDueWriteDateInput}. The `date` variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@see InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.
     * @return array{'due_at'?: string|\DateTimeInterface, 'type': string}|object|array{'due_at': string|\DateTimeInterface, 'type': string}|object
     * @throws SdkError When due is omitted; use hasDue() or valueOrDefault().
     */
    public function getDue(): mixed { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it to add a new entry. minLength: 1.
     * @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** The entry's role in the schedule. Value enum: "installment".
     * @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
}
