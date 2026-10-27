<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryScheduleWindowRule $schedule_window
 * @property-read ?DeliveryTransitTimeRule $transit_time
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryEstimateRule extends Model {
    /** @param array{'schedule_window'?: mixed, 'transit_time'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEstimateRule')); }
    /** Shape $ (Value): {@see DeliveryScheduleWindowRule}. Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule.
     * @return ?DeliveryScheduleWindowRule
     */
    public function getScheduleWindow(): ?DeliveryScheduleWindowRule { return $this->get('schedule_window'); }
    public function hasScheduleWindow(): bool { return $this->has('schedule_window'); }
    /** Shape $ (Value): {@see DeliveryTransitTimeRule}. Estimate rule giving a delivery method's handling time and transit time as ranges of business days.
     * @return ?DeliveryTransitTimeRule
     */
    public function getTransitTime(): ?DeliveryTransitTimeRule { return $this->get('transit_time'); }
    public function hasTransitTime(): bool { return $this->has('transit_time'); }
    /** Shape $ (Value): string.  Value enum: "none", "transit_time", "schedule_window".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
