<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBusinessDayRangeInput|array<array-key, mixed>|\stdClass $handling_days
 * @property-read DeliveryBusinessDayRangeInput|array<array-key, mixed>|\stdClass $transit_days
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryTransitTimeRuleInput extends Model {
    /** @param array{'handling_days': DeliveryBusinessDayRangeInput|array<array-key, mixed>|\stdClass, 'transit_days': DeliveryBusinessDayRangeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryTransitTimeRuleInput')); }
    /** @return DeliveryBusinessDayRangeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When handling_days is omitted; use hasHandlingDays() or valueOrDefault().
     */
    public function getHandlingDays(): mixed { return $this->get('handling_days'); }
    public function hasHandlingDays(): bool { return $this->has('handling_days'); }
    /** @return DeliveryBusinessDayRangeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When transit_days is omitted; use hasTransitDays() or valueOrDefault().
     */
    public function getTransitDays(): mixed { return $this->get('transit_days'); }
    public function hasTransitDays(): bool { return $this->has('transit_days'); }
}
