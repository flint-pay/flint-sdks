<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPricingRatePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $rates
 * @property-read string|null $unmatched_behavior
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateTablePricingStrategyPreviousAttributesInput extends Model {
    /** @param array{'rates'?: list<DeliveryPricingRatePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'unmatched_behavior'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateTablePricingStrategyPreviousAttributesInput')); }
    /** One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. anyOf[1] (Value): Array of {@see DeliveryPricingRatePreviousAttributesInput}. One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. minItems: 1. maxItems: 100. anyOf[1][] (Value): {@see DeliveryPricingRatePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryPricingRatePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When rates is omitted; use hasRates() or valueOrDefault().
     */
    public function getRates(): mixed { return $this->get('rates'); }
    public function hasRates(): bool { return $this->has('rates'); }
    /** What happens when no rate matches. Value enum: "unavailable". anyOf[1] (Value): string. What happens when no rate matches. Value enum: "unavailable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When unmatched_behavior is omitted; use hasUnmatchedBehavior() or valueOrDefault().
     */
    public function getUnmatchedBehavior(): mixed { return $this->get('unmatched_behavior'); }
    public function hasUnmatchedBehavior(): bool { return $this->has('unmatched_behavior'); }
}
