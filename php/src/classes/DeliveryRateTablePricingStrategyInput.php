<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPricingRateInput|array<array-key, mixed>|\stdClass> $rates
 * @property-read string $unmatched_behavior
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateTablePricingStrategyInput extends Model {
    /** @param array{'rates': list<DeliveryPricingRateInput|array<array-key, mixed>|\stdClass>, 'unmatched_behavior': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateTablePricingStrategyInput')); }
    /**  [] (Value): {@see DeliveryPricingRateInput}. One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.
     * @return list<DeliveryPricingRateInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When rates is omitted; use hasRates() or valueOrDefault().
     */
    public function getRates(): array { return $this->get('rates'); }
    public function hasRates(): bool { return $this->has('rates'); }
    /** Value enum: "unavailable".
     * @return string
     * @throws SdkError When unmatched_behavior is omitted; use hasUnmatchedBehavior() or valueOrDefault().
     */
    public function getUnmatchedBehavior(): string { return $this->get('unmatched_behavior'); }
    public function hasUnmatchedBehavior(): bool { return $this->has('unmatched_behavior'); }
}
