<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $end_minute
 * @property-read int $start_minute
 * @property-read list<string> $weekdays
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryWindowTimeConditionInput extends Model {
    /** @param array{'end_minute'?: int, 'start_minute'?: int, 'weekdays'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWindowTimeConditionInput')); }
    /** Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`.
     * @return int
     * @throws SdkError When end_minute is omitted; use hasEndMinute() or valueOrDefault().
     */
    public function getEndMinute(): int { return $this->get('end_minute'); }
    public function hasEndMinute(): bool { return $this->has('end_minute'); }
    /** First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`.
     * @return int
     * @throws SdkError When start_minute is omitted; use hasStartMinute() or valueOrDefault().
     */
    public function getStartMinute(): int { return $this->get('start_minute'); }
    public function hasStartMinute(): bool { return $this->has('start_minute'); }
    /** Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When weekdays is omitted; use hasWeekdays() or valueOrDefault().
     */
    public function getWeekdays(): array { return $this->get('weekdays'); }
    public function hasWeekdays(): bool { return $this->has('weekdays'); }
}
