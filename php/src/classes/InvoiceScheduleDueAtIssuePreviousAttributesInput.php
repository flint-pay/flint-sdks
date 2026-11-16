<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $due_date
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleDueAtIssuePreviousAttributesInput extends Model {
    /** @param array{'due_date'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleDueAtIssuePreviousAttributesInput')); }
    /** Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Collectible from the start of this date, overdue only after it ends. Always present for date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the issue date or invoice due_date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When due_date is omitted; use hasDueDate() or valueOrDefault().
     */
    public function getDueDate(): mixed { return $this->get('due_date'); }
    public function hasDueDate(): bool { return $this->has('due_date'); }
    /** How the entry's due date is set. Value enum: "at_issue". anyOf[1] (Value): string. How the entry's due date is set. Value enum: "at_issue". anyOf[2] (Value): null. anyOf[1] (Value): string.  Value enum: "at_issue".
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
