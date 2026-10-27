<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPricingRateRequestInput|array<array-key, mixed>|\stdClass> $rates
 * @property-read string $unmatched_behavior
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateTablePricingStrategyRequestInput extends Model {
    /** @param array{'rates': list<DeliveryPricingRateRequestInput|array<array-key, mixed>|\stdClass>, 'unmatched_behavior'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateTablePricingStrategyRequestInput')); }
    /** Shape $ (Value): Array of {@see DeliveryPricingRateRequestInput}. Shape $[] (Value): {@see DeliveryPricingRateRequestInput}. A rate in a rate table pricing strategy you send when updating a delivery method. Include `delivery_rate_id` to keep or update an existing rate.
     * @return list<DeliveryPricingRateRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When rates is omitted; use hasRates() or valueOrDefault().
     */
    public function getRates(): array { return $this->get('rates'); }
    public function hasRates(): bool { return $this->has('rates'); }
    /** Shape $ (Value): string. Default: "unavailable". Value enum: "unavailable".
     * @return string
     * @throws SdkError When unmatched_behavior is omitted; use hasUnmatchedBehavior() or valueOrDefault().
     */
    public function getUnmatchedBehavior(): string { return $this->get('unmatched_behavior'); }
    public function hasUnmatchedBehavior(): bool { return $this->has('unmatched_behavior'); }
}
