<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $period_count
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class PromotionApplicationMethodAmountOffRecurrenceRepeating extends Model {
    /** @param array{'period_count': int, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionApplicationMethodAmountOffRecurrenceRepeating')); }
    /** Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     * @return int
     */
    public function getPeriodCount(): int { return $this->get('period_count'); }
    public function hasPeriodCount(): bool { return $this->has('period_count'); }
    /** Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Value enum: "repeating".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
