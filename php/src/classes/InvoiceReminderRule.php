<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $days_from_due
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceReminderRule extends Model {
    /** @param array{'days_from_due': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceReminderRule')); }
    /** Shape $ (Value): integer. Format: int32. minimum: -90. maximum: 365.
     * @return int
     */
    public function getDaysFromDue(): int { return $this->get('days_from_due'); }
    public function hasDaysFromDue(): bool { return $this->has('days_from_due'); }
}
