<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryScheduleWindowRulePreviousAttributes|null $schedule_window
 * @property-read DeliveryTransitTimeRulePreviousAttributes|null $transit_time
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryEstimateRulePreviousAttributes extends Model {
    /** @param array{'schedule_window'?: mixed, 'transit_time'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEstimateRulePreviousAttributes')); }
    /** Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. anyOf[1] (Value): {@see DeliveryScheduleWindowRulePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryScheduleWindowRulePreviousAttributes|null
     */
    public function getScheduleWindow(): DeliveryScheduleWindowRulePreviousAttributes|null { return $this->get('schedule_window'); }
    public function hasScheduleWindow(): bool { return $this->has('schedule_window'); }
    /** Handling and transit time. Set only when `type` is `transit_time`. anyOf[1] (Value): {@see DeliveryTransitTimeRulePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryTransitTimeRulePreviousAttributes|null
     */
    public function getTransitTime(): DeliveryTransitTimeRulePreviousAttributes|null { return $this->get('transit_time'); }
    public function hasTransitTime(): bool { return $this->has('transit_time'); }
    /** How Flint estimates timing. Set the property named by this value. Value enum: "none", "transit_time", "schedule_window". anyOf[1] (Value): string. How Flint estimates timing. Set the property named by this value. Value enum: "none", "transit_time", "schedule_window". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
