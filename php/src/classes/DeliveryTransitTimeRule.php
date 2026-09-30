<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBusinessDayRange $handling_days
 * @property-read DeliveryBusinessDayRange $transit_days
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryTransitTimeRule extends Model {
    /** @param array{'handling_days': mixed, 'transit_days': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryTransitTimeRule')); }
    /** @return DeliveryBusinessDayRange
     * @throws SdkError When handling_days is omitted; use hasHandlingDays() or valueOrDefault().
     */
    public function getHandlingDays(): DeliveryBusinessDayRange { return $this->get('handling_days'); }
    public function hasHandlingDays(): bool { return $this->has('handling_days'); }
    /** @return DeliveryBusinessDayRange
     * @throws SdkError When transit_days is omitted; use hasTransitDays() or valueOrDefault().
     */
    public function getTransitDays(): DeliveryBusinessDayRange { return $this->get('transit_days'); }
    public function hasTransitDays(): bool { return $this->has('transit_days'); }
}
