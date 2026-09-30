<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryBlackoutInterval> $blackout_intervals
 * @property-read string $dst_disambiguation
 * @property-read int $maximum_scheduling_horizon_days
 * @property-read string $preparation_lead_time_seconds
 * @property-read int $same_day_cutoff_minute
 * @property-read string $timezone
 * @property-read list<DeliveryWeeklyInterval> $weekly_intervals
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryAvailability extends Model {
    /** @param array{'blackout_intervals'?: list<mixed>, 'dst_disambiguation'?: string, 'maximum_scheduling_horizon_days': int, 'preparation_lead_time_seconds': string, 'same_day_cutoff_minute'?: int, 'timezone': string, 'weekly_intervals': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAvailability')); }
    /** @return list<DeliveryBlackoutInterval>
     * @throws SdkError When blackout_intervals is omitted; use hasBlackoutIntervals() or valueOrDefault().
     */
    public function getBlackoutIntervals(): array { return $this->get('blackout_intervals'); }
    public function hasBlackoutIntervals(): bool { return $this->has('blackout_intervals'); }
    /** @return string
     * @throws SdkError When dst_disambiguation is omitted; use hasDstDisambiguation() or valueOrDefault().
     */
    public function getDstDisambiguation(): string { return $this->get('dst_disambiguation'); }
    public function hasDstDisambiguation(): bool { return $this->has('dst_disambiguation'); }
    /** @return int
     * @throws SdkError When maximum_scheduling_horizon_days is omitted; use hasMaximumSchedulingHorizonDays() or valueOrDefault().
     */
    public function getMaximumSchedulingHorizonDays(): int { return $this->get('maximum_scheduling_horizon_days'); }
    public function hasMaximumSchedulingHorizonDays(): bool { return $this->has('maximum_scheduling_horizon_days'); }
    /** @return string
     * @throws SdkError When preparation_lead_time_seconds is omitted; use hasPreparationLeadTimeSeconds() or valueOrDefault().
     */
    public function getPreparationLeadTimeSeconds(): string { return $this->get('preparation_lead_time_seconds'); }
    public function hasPreparationLeadTimeSeconds(): bool { return $this->has('preparation_lead_time_seconds'); }
    /** @return int
     * @throws SdkError When same_day_cutoff_minute is omitted; use hasSameDayCutoffMinute() or valueOrDefault().
     */
    public function getSameDayCutoffMinute(): int { return $this->get('same_day_cutoff_minute'); }
    public function hasSameDayCutoffMinute(): bool { return $this->has('same_day_cutoff_minute'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return list<DeliveryWeeklyInterval>
     * @throws SdkError When weekly_intervals is omitted; use hasWeeklyIntervals() or valueOrDefault().
     */
    public function getWeeklyIntervals(): array { return $this->get('weekly_intervals'); }
    public function hasWeeklyIntervals(): bool { return $this->has('weekly_intervals'); }
}
