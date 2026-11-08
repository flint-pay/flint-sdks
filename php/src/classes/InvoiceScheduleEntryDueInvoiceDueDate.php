<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $due_date
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceScheduleEntryDueInvoiceDueDate extends Model {
    /** @param array{'due_date'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryDueInvoiceDueDate')); }
    /** Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Format: date.
     * @return ?string
     */
    public function getDueDate(): ?string { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** How the entry's due date is set. Value enum: "invoice_due_date".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
