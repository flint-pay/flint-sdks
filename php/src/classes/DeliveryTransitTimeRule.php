<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBusinessDayRange $handling_days
 * @property-read DeliveryBusinessDayRange $transit_days
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryTransitTimeRule extends Model {
    /** @param array{'handling_days': mixed, 'transit_days': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryTransitTimeRule')); }
    /** Shape $ (Value): {@see DeliveryBusinessDayRange}. A minimum and maximum number of business days, used in transit time estimates.
     * @return DeliveryBusinessDayRange
     */
    public function getHandlingDays(): DeliveryBusinessDayRange { return $this->get('handling_days'); }
    public function hasHandlingDays(): bool { return $this->has('handling_days'); }
    /** Shape $ (Value): {@see DeliveryBusinessDayRange}. A minimum and maximum number of business days, used in transit time estimates.
     * @return DeliveryBusinessDayRange
     */
    public function getTransitDays(): DeliveryBusinessDayRange { return $this->get('transit_days'); }
    public function hasTransitDays(): bool { return $this->has('transit_days'); }
}
