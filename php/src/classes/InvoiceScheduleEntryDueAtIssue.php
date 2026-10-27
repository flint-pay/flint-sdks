<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $due_at
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceScheduleEntryDueAtIssue extends Model {
    /** @param array{'due_at'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryDueAtIssue')); }
    /** Shape $ (Value): string. When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "at_issue".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
