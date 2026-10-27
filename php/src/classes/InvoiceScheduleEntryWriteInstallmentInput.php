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
    /** Shape $ (Value): {@see InvoiceScheduleAmountSpecificationInput}. How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance. Shape $.amount_money (Optional): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.percent (Optional): number. multipleOf: 0.0001. Shape $.type (Required): string.  Value enum: "fixed", "percentage". Shape $.oneOf[1] (Value): {@see InvoiceScheduleAmountSpecificationFixedInput}. The `fixed` variant of `InvoiceScheduleAmountSpecification`. Shape $.oneOf[2] (Value): {@see InvoiceScheduleAmountSpecificationPercentageInput}. The `percentage` variant of `InvoiceScheduleAmountSpecification`. Shape $.oneOf[3] (Value): {@see InvoiceScheduleAmountSpecificationRemainingBalanceInput}. The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent': int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'type': string}|object
     * @throws SdkError When amount_specification is omitted; use hasAmountSpecification() or valueOrDefault().
     */
    public function getAmountSpecification(): mixed { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** Shape $ (Value): {@see InvoiceScheduleDueWriteInput}. When a payment schedule entry is due, as supplied when creating or updating an invoice: at issue, on a set date, or on the invoice due date. Shape $.due_at (Optional): string. When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time. minLength: 1. Shape $.type (Required): string.  Value enum: "date". Shape $.oneOf[1] (Value): {@see InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of `InvoiceScheduleDueWrite`. Shape $.oneOf[2] (Value): {@see InvoiceScheduleDueWriteDateInput}. The `date` variant of `InvoiceScheduleDueWrite`. Shape $.oneOf[3] (Value): {@see InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.
     * @return array{'due_at'?: string|\DateTimeInterface, 'type': string}|object|array{'due_at': string|\DateTimeInterface, 'type': string}|object
     * @throws SdkError When due is omitted; use hasDue() or valueOrDefault().
     */
    public function getDue(): mixed { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Shape $ (Value): string.  Value enum: "installment".
     * @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
}
