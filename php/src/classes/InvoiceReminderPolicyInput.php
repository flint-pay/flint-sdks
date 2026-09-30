<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass> $rules
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceReminderPolicyInput extends Model {
    /** @param array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceReminderPolicyInput')); }
    /** @return list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When rules is omitted; use hasRules() or valueOrDefault().
     */
    public function getRules(): array { return $this->get('rules'); }
    public function hasRules(): bool { return $this->has('rules'); }
}
