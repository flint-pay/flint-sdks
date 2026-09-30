<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InvoiceReminderRule> $rules
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoiceReminderPolicy extends Model {
    /** @param array{'rules': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceReminderPolicy')); }
    /** @return list<InvoiceReminderRule>
     * @throws SdkError When rules is omitted; use hasRules() or valueOrDefault().
     */
    public function getRules(): array { return $this->get('rules'); }
    public function hasRules(): bool { return $this->has('rules'); }
}
