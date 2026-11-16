<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryBlackoutIntervalPreviousAttributes>|null $blackout_intervals
 * @property-read string|null $dst_disambiguation
 * @property-read int|null $maximum_scheduling_horizon_days
 * @property-read int|null $preparation_lead_time_seconds
 * @property-read int|null $same_day_cutoff_minute
 * @property-read string|null $timezone
 * @property-read list<DeliveryWeeklyIntervalPreviousAttributes>|null $weekly_intervals
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryAvailabilityPreviousAttributes extends Model {
    /** @param array{'blackout_intervals'?: mixed, 'dst_disambiguation'?: mixed, 'maximum_scheduling_horizon_days'?: mixed, 'preparation_lead_time_seconds'?: mixed, 'same_day_cutoff_minute'?: mixed, 'timezone'?: mixed, 'weekly_intervals'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAvailabilityPreviousAttributes')); }
    /** Local date-time spans in which no window is offered. anyOf[1] (Value): Array of {@see DeliveryBlackoutIntervalPreviousAttributes}. Local date-time spans in which no window is offered. anyOf[1][] (Value): {@see DeliveryBlackoutIntervalPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryBlackoutIntervalPreviousAttributes>|null
     */
    public function getBlackoutIntervals(): array|null { return $this->get('blackout_intervals'); }
    public function hasBlackoutIntervals(): bool { return $this->has('blackout_intervals'); }
    /** Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Value enum: "earlier", "later". anyOf[1] (Value): string. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Default: "earlier". Value enum: "earlier", "later". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDstDisambiguation(): string|null { return $this->get('dst_disambiguation'); }
    public function hasDstDisambiguation(): bool { return $this->has('dst_disambiguation'); }
    /** How many days ahead windows are offered, from 1 to 365. anyOf[1] (Value): integer. How many days ahead windows are offered, from 1 to 365. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaximumSchedulingHorizonDays(): int|null { return $this->get('maximum_scheduling_horizon_days'); }
    public function hasMaximumSchedulingHorizonDays(): bool { return $this->has('maximum_scheduling_horizon_days'); }
    /** Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. anyOf[1] (Value): integer. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPreparationLeadTimeSeconds(): int|null { return $this->get('preparation_lead_time_seconds'); }
    public function hasPreparationLeadTimeSeconds(): bool { return $this->has('preparation_lead_time_seconds'); }
    /** Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. anyOf[1] (Value): integer. Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getSameDayCutoffMinute(): int|null { return $this->get('same_day_cutoff_minute'); }
    public function hasSameDayCutoffMinute(): bool { return $this->has('same_day_cutoff_minute'); }
    /** Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** One to 100 weekly spans in which windows are offered. They cannot overlap. anyOf[1] (Value): Array of {@see DeliveryWeeklyIntervalPreviousAttributes}. One to 100 weekly spans in which windows are offered. They cannot overlap. anyOf[1][] (Value): {@see DeliveryWeeklyIntervalPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryWeeklyIntervalPreviousAttributes>|null
     */
    public function getWeeklyIntervals(): array|null { return $this->get('weekly_intervals'); }
    public function hasWeeklyIntervals(): bool { return $this->has('weekly_intervals'); }
}
