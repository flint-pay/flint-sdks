<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $due_date
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleDueWriteAtIssueInput extends Model {
    /** @param array{'due_date'?: string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleDueWriteAtIssueInput')); }
    /** Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     * @return string
     * @throws SdkError When due_date is omitted; use hasDueDate() or valueOrDefault().
     */
    public function getDueDate(): string { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** How the entry's due time is set. Value enum: "at_issue".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
