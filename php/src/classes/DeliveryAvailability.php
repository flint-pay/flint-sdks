<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<DeliveryBlackoutInterval> $blackout_intervals
 * @property-read ?string $dst_disambiguation
 * @property-read int $maximum_scheduling_horizon_days
 * @property-read int $preparation_lead_time_seconds
 * @property-read ?int $same_day_cutoff_minute
 * @property-read string $timezone
 * @property-read list<DeliveryWeeklyInterval> $weekly_intervals
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryAvailability extends Model {
    /** @param array{'blackout_intervals'?: list<mixed>, 'dst_disambiguation'?: string, 'maximum_scheduling_horizon_days': int, 'preparation_lead_time_seconds': int, 'same_day_cutoff_minute'?: int, 'timezone': string, 'weekly_intervals': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAvailability')); }
    /**  [] (Value): {@see DeliveryBlackoutInterval}. A local start and end time during which a delivery schedule offers no windows.
     * @return ?list<DeliveryBlackoutInterval>
     */
    public function getBlackoutIntervals(): ?array { return $this->get('blackout_intervals'); }
    public function hasBlackoutIntervals(): bool { return $this->has('blackout_intervals'); }
    /** Default: "earlier". Value enum: "earlier", "later".
     * @return ?string
     */
    public function getDstDisambiguation(): ?string { return $this->get('dst_disambiguation'); }
    public function hasDstDisambiguation(): bool { return $this->has('dst_disambiguation'); }
    /** maximum_scheduling_horizon_days
     * @return int
     */
    public function getMaximumSchedulingHorizonDays(): int { return $this->get('maximum_scheduling_horizon_days'); }
    public function hasMaximumSchedulingHorizonDays(): bool { return $this->has('maximum_scheduling_horizon_days'); }
    /** Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: int64.
     * @return int
     */
    public function getPreparationLeadTimeSeconds(): int { return $this->get('preparation_lead_time_seconds'); }
    public function hasPreparationLeadTimeSeconds(): bool { return $this->has('preparation_lead_time_seconds'); }
    /** same_day_cutoff_minute
     * @return ?int
     */
    public function getSameDayCutoffMinute(): ?int { return $this->get('same_day_cutoff_minute'); }
    public function hasSameDayCutoffMinute(): bool { return $this->has('same_day_cutoff_minute'); }
    /** minLength: 1.
     * @return string
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /**  [] (Value): {@see DeliveryWeeklyInterval}. A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a delivery method's availability schedule.
     * @return list<DeliveryWeeklyInterval>
     */
    public function getWeeklyIntervals(): array { return $this->get('weekly_intervals'); }
    public function hasWeeklyIntervals(): bool { return $this->has('weekly_intervals'); }
}
