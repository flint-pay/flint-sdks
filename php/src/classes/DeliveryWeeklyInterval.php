<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $end_minute
 * @property-read int $end_weekday
 * @property-read int $start_minute
 * @property-read int $start_weekday
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryWeeklyInterval extends Model {
    /** @param array{'end_minute': int, 'end_weekday': int, 'start_minute': int, 'start_weekday': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWeeklyInterval')); }
    /** Shape $ (Value): integer.
     * @return int
     */
    public function getEndMinute(): int { return $this->get('end_minute'); }
    public function hasEndMinute(): bool { return $this->has('end_minute'); }
    /** Shape $ (Value): integer.
     * @return int
     */
    public function getEndWeekday(): int { return $this->get('end_weekday'); }
    public function hasEndWeekday(): bool { return $this->has('end_weekday'); }
    /** Shape $ (Value): integer.
     * @return int
     */
    public function getStartMinute(): int { return $this->get('start_minute'); }
    public function hasStartMinute(): bool { return $this->has('start_minute'); }
    /** Shape $ (Value): integer.
     * @return int
     */
    public function getStartWeekday(): int { return $this->get('start_weekday'); }
    public function hasStartWeekday(): bool { return $this->has('start_weekday'); }
}
