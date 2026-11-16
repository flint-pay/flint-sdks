<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $end_minute
 * @property-read int|null $start_minute
 * @property-read list<string>|null $weekdays
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryWindowTimeConditionPreviousAttributesInput extends Model {
    /** @param array{'end_minute'?: int|null, 'start_minute'?: int|null, 'weekdays'?: list<string>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWindowTimeConditionPreviousAttributesInput')); }
    /** Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. anyOf[1] (Value): integer. Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When end_minute is omitted; use hasEndMinute() or valueOrDefault().
     */
    public function getEndMinute(): mixed { return $this->get('end_minute'); }
    public function hasEndMinute(): bool { return $this->has('end_minute'); }
    /** First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. anyOf[1] (Value): integer. First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When start_minute is omitted; use hasStartMinute() or valueOrDefault().
     */
    public function getStartMinute(): mixed { return $this->get('start_minute'); }
    public function hasStartMinute(): bool { return $this->has('start_minute'); }
    /** Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. anyOf[1] (Value): Array of string. Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. anyOf[1][] (Value): string. minLength: 1. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When weekdays is omitted; use hasWeekdays() or valueOrDefault().
     */
    public function getWeekdays(): mixed { return $this->get('weekdays'); }
    public function hasWeekdays(): bool { return $this->has('weekdays'); }
}
