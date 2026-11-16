<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBusinessDayRangePreviousAttributes|null $handling_days
 * @property-read DeliveryBusinessDayRangePreviousAttributes|null $transit_days
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryTransitTimeRulePreviousAttributes extends Model {
    /** @param array{'handling_days'?: mixed, 'transit_days'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryTransitTimeRulePreviousAttributes')); }
    /** Business days the merchant needs to prepare the order. anyOf[1] (Value): {@see DeliveryBusinessDayRangePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryBusinessDayRangePreviousAttributes|null
     */
    public function getHandlingDays(): DeliveryBusinessDayRangePreviousAttributes|null { return $this->get('handling_days'); }
    public function hasHandlingDays(): bool { return $this->has('handling_days'); }
    /** Business days the order spends in transit. anyOf[1] (Value): {@see DeliveryBusinessDayRangePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryBusinessDayRangePreviousAttributes|null
     */
    public function getTransitDays(): DeliveryBusinessDayRangePreviousAttributes|null { return $this->get('transit_days'); }
    public function hasTransitDays(): bool { return $this->has('transit_days'); }
}
