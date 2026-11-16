<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBusinessDayRangePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $handling_days
 * @property-read DeliveryBusinessDayRangePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $transit_days
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryTransitTimeRulePreviousAttributesInput extends Model {
    /** @param array{'handling_days'?: DeliveryBusinessDayRangePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'transit_days'?: DeliveryBusinessDayRangePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryTransitTimeRulePreviousAttributesInput')); }
    /** Business days the merchant needs to prepare the order. anyOf[1] (Value): {@see DeliveryBusinessDayRangePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryBusinessDayRangePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When handling_days is omitted; use hasHandlingDays() or valueOrDefault().
     */
    public function getHandlingDays(): mixed { return $this->get('handling_days'); }
    public function hasHandlingDays(): bool { return $this->has('handling_days'); }
    /** Business days the order spends in transit. anyOf[1] (Value): {@see DeliveryBusinessDayRangePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryBusinessDayRangePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When transit_days is omitted; use hasTransitDays() or valueOrDefault().
     */
    public function getTransitDays(): mixed { return $this->get('transit_days'); }
    public function hasTransitDays(): bool { return $this->has('transit_days'); }
}
