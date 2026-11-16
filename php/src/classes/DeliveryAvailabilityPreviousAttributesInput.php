<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryBlackoutIntervalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $blackout_intervals
 * @property-read string|null $dst_disambiguation
 * @property-read int|null $maximum_scheduling_horizon_days
 * @property-read int|null $preparation_lead_time_seconds
 * @property-read int|null $same_day_cutoff_minute
 * @property-read string|null $timezone
 * @property-read list<DeliveryWeeklyIntervalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $weekly_intervals
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryAvailabilityPreviousAttributesInput extends Model {
    /** @param array{'blackout_intervals'?: list<DeliveryBlackoutIntervalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'dst_disambiguation'?: string|null, 'maximum_scheduling_horizon_days'?: int|null, 'preparation_lead_time_seconds'?: int|null, 'same_day_cutoff_minute'?: int|null, 'timezone'?: string|null, 'weekly_intervals'?: list<DeliveryWeeklyIntervalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAvailabilityPreviousAttributesInput')); }
    /** Local date-time spans in which no window is offered. anyOf[1] (Value): Array of {@see DeliveryBlackoutIntervalPreviousAttributesInput}. Local date-time spans in which no window is offered. anyOf[1][] (Value): {@see DeliveryBlackoutIntervalPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryBlackoutIntervalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When blackout_intervals is omitted; use hasBlackoutIntervals() or valueOrDefault().
     */
    public function getBlackoutIntervals(): mixed { return $this->get('blackout_intervals'); }
    public function hasBlackoutIntervals(): bool { return $this->has('blackout_intervals'); }
    /** Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Value enum: "earlier", "later". anyOf[1] (Value): string. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Default: "earlier". Value enum: "earlier", "later". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When dst_disambiguation is omitted; use hasDstDisambiguation() or valueOrDefault().
     */
    public function getDstDisambiguation(): mixed { return $this->get('dst_disambiguation'); }
    public function hasDstDisambiguation(): bool { return $this->has('dst_disambiguation'); }
    /** How many days ahead windows are offered, from 1 to 365. anyOf[1] (Value): integer. How many days ahead windows are offered, from 1 to 365. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When maximum_scheduling_horizon_days is omitted; use hasMaximumSchedulingHorizonDays() or valueOrDefault().
     */
    public function getMaximumSchedulingHorizonDays(): mixed { return $this->get('maximum_scheduling_horizon_days'); }
    public function hasMaximumSchedulingHorizonDays(): bool { return $this->has('maximum_scheduling_horizon_days'); }
    /** Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. anyOf[1] (Value): integer. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When preparation_lead_time_seconds is omitted; use hasPreparationLeadTimeSeconds() or valueOrDefault().
     */
    public function getPreparationLeadTimeSeconds(): mixed { return $this->get('preparation_lead_time_seconds'); }
    public function hasPreparationLeadTimeSeconds(): bool { return $this->has('preparation_lead_time_seconds'); }
    /** Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. anyOf[1] (Value): integer. Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When same_day_cutoff_minute is omitted; use hasSameDayCutoffMinute() or valueOrDefault().
     */
    public function getSameDayCutoffMinute(): mixed { return $this->get('same_day_cutoff_minute'); }
    public function hasSameDayCutoffMinute(): bool { return $this->has('same_day_cutoff_minute'); }
    /** Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** One to 100 weekly spans in which windows are offered. They cannot overlap. anyOf[1] (Value): Array of {@see DeliveryWeeklyIntervalPreviousAttributesInput}. One to 100 weekly spans in which windows are offered. They cannot overlap. anyOf[1][] (Value): {@see DeliveryWeeklyIntervalPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryWeeklyIntervalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When weekly_intervals is omitted; use hasWeeklyIntervals() or valueOrDefault().
     */
    public function getWeeklyIntervals(): mixed { return $this->get('weekly_intervals'); }
    public function hasWeeklyIntervals(): bool { return $this->has('weekly_intervals'); }
}
