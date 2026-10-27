<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceScheduleAmountSpecificationInput|array<array-key, mixed>|\stdClass $amount_specification
 * @property-read InvoiceScheduleDueWriteInput|array<array-key, mixed>|\stdClass $due
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $kind
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleEntryWriteInput extends Model {
    /** @param array{'amount_specification': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent': int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object, 'due': array{'due_at'?: string|\DateTimeInterface, 'type': string}|object|array{'due_at': string|\DateTimeInterface, 'type': string}|object, 'invoice_schedule_entry_id'?: string, 'kind': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryWriteInput')); }
    /** Shape $ (Value): {@see InvoiceScheduleAmountSpecificationInput}. How much the entry collects. Deposits and installments use fixed or percentage, and the balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.
     * @return InvoiceScheduleAmountSpecificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_specification is omitted; use hasAmountSpecification() or valueOrDefault().
     */
    public function getAmountSpecification(): mixed { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** Shape $ (Value): {@see InvoiceScheduleDueWriteInput}. When the entry is due. Deposits use at_issue or date, installments use date, and the balance uses invoice_due_date or date. When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     * @return InvoiceScheduleDueWriteInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When due is omitted; use hasDue() or valueOrDefault().
     */
    public function getDue(): mixed { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** Shape $ (Value): string. An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it to add a new entry. minLength: 1.
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
}
