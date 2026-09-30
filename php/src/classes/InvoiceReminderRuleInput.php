<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $days_from_due
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceReminderRuleInput extends Model {
    /** @param array{'days_from_due': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceReminderRuleInput')); }
    /** @return int
     * @throws SdkError When days_from_due is omitted; use hasDaysFromDue() or valueOrDefault().
     */
    public function getDaysFromDue(): int { return $this->get('days_from_due'); }
    public function hasDaysFromDue(): bool { return $this->has('days_from_due'); }
}
