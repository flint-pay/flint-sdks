<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $end_minute
 * @property-read int|null $end_weekday
 * @property-read int|null $start_minute
 * @property-read int|null $start_weekday
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryWeeklyIntervalPreviousAttributesInput extends Model {
    /** @param array{'end_minute'?: int|null, 'end_weekday'?: int|null, 'start_minute'?: int|null, 'start_weekday'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWeeklyIntervalPreviousAttributesInput')); }
    /** Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. anyOf[1] (Value): integer. Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When end_minute is omitted; use hasEndMinute() or valueOrDefault().
     */
    public function getEndMinute(): mixed { return $this->get('end_minute'); }
    public function hasEndMinute(): bool { return $this->has('end_minute'); }
    /** Weekday the span ends, from 0 for Sunday to 6 for Saturday. anyOf[1] (Value): integer. Weekday the span ends, from 0 for Sunday to 6 for Saturday. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When end_weekday is omitted; use hasEndWeekday() or valueOrDefault().
     */
    public function getEndWeekday(): mixed { return $this->get('end_weekday'); }
    public function hasEndWeekday(): bool { return $this->has('end_weekday'); }
    /** Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. anyOf[1] (Value): integer. Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When start_minute is omitted; use hasStartMinute() or valueOrDefault().
     */
    public function getStartMinute(): mixed { return $this->get('start_minute'); }
    public function hasStartMinute(): bool { return $this->has('start_minute'); }
    /** Weekday the span starts, from 0 for Sunday to 6 for Saturday. anyOf[1] (Value): integer. Weekday the span starts, from 0 for Sunday to 6 for Saturday. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When start_weekday is omitted; use hasStartWeekday() or valueOrDefault().
     */
    public function getStartWeekday(): mixed { return $this->get('start_weekday'); }
    public function hasStartWeekday(): bool { return $this->has('start_weekday'); }
}
