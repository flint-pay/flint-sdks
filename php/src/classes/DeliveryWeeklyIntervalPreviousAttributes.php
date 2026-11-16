<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $end_minute
 * @property-read int|null $end_weekday
 * @property-read int|null $start_minute
 * @property-read int|null $start_weekday
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryWeeklyIntervalPreviousAttributes extends Model {
    /** @param array{'end_minute'?: mixed, 'end_weekday'?: mixed, 'start_minute'?: mixed, 'start_weekday'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWeeklyIntervalPreviousAttributes')); }
    /** Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. anyOf[1] (Value): integer. Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getEndMinute(): int|null { return $this->get('end_minute'); }
    public function hasEndMinute(): bool { return $this->has('end_minute'); }
    /** Weekday the span ends, from 0 for Sunday to 6 for Saturday. anyOf[1] (Value): integer. Weekday the span ends, from 0 for Sunday to 6 for Saturday. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getEndWeekday(): int|null { return $this->get('end_weekday'); }
    public function hasEndWeekday(): bool { return $this->has('end_weekday'); }
    /** Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. anyOf[1] (Value): integer. Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getStartMinute(): int|null { return $this->get('start_minute'); }
    public function hasStartMinute(): bool { return $this->has('start_minute'); }
    /** Weekday the span starts, from 0 for Sunday to 6 for Saturday. anyOf[1] (Value): integer. Weekday the span starts, from 0 for Sunday to 6 for Saturday. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getStartWeekday(): int|null { return $this->get('start_weekday'); }
    public function hasStartWeekday(): bool { return $this->has('start_weekday'); }
}
