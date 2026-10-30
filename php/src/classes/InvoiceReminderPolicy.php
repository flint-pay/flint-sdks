<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InvoiceReminderRule> $rules
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceReminderPolicy extends Model {
    /** @param array{'rules': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceReminderPolicy')); }
    /** maxItems: 20. [] (Value): {@see InvoiceReminderRule}. One reminder in an invoice reminder policy. `days_from_due` sets when it is sent: negative values are days before the due date, positive values days after.
     * @return list<InvoiceReminderRule>
     */
    public function getRules(): array { return $this->get('rules'); }
    public function hasRules(): bool { return $this->has('rules'); }
}
