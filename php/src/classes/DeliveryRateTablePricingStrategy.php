<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPricingRate> $rates
 * @property-read string $unmatched_behavior
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryRateTablePricingStrategy extends Model {
    /** @param array{'rates': list<mixed>, 'unmatched_behavior': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateTablePricingStrategy')); }
    /** @return list<DeliveryPricingRate>
     * @throws SdkError When rates is omitted; use hasRates() or valueOrDefault().
     */
    public function getRates(): array { return $this->get('rates'); }
    public function hasRates(): bool { return $this->has('rates'); }
    /** @return string
     * @throws SdkError When unmatched_behavior is omitted; use hasUnmatchedBehavior() or valueOrDefault().
     */
    public function getUnmatchedBehavior(): string { return $this->get('unmatched_behavior'); }
    public function hasUnmatchedBehavior(): bool { return $this->has('unmatched_behavior'); }
}
