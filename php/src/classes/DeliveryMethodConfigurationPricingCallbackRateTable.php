<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryMethodConfigurationPricingCallbackRateTableRatesItem> $rates
 * @property-read string $unmatched_behavior
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingCallbackRateTable extends Model {
    /** @param array{'rates': list<mixed>, 'unmatched_behavior': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingCallbackRateTable')); }
    /** Shape $ (Value): Array of ({@see DeliveryMethodConfigurationPricingCallbackRateTableRatesItem} and {@see DeliveryPricingRate}). Shape $[] (Value): {@see DeliveryMethodConfigurationPricingCallbackRateTableRatesItem}. One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.
     * @return list<DeliveryMethodConfigurationPricingCallbackRateTableRatesItem>
     */
    public function getRates(): array { return $this->get('rates'); }
    public function hasRates(): bool { return $this->has('rates'); }
    /** Shape $ (Value): string.  Value enum: "unavailable".
     * @return string
     */
    public function getUnmatchedBehavior(): string { return $this->get('unmatched_behavior'); }
    public function hasUnmatchedBehavior(): bool { return $this->has('unmatched_behavior'); }
}
