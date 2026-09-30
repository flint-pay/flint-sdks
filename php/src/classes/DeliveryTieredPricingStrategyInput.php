<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPricingTierBandRequestInput|array<array-key, mixed>|\stdClass> $bands
 * @property-read string $basis
 * @property-read string $unit
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryTieredPricingStrategyInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryTieredPricingStrategyInput')); }
    /** @return list<DeliveryPricingTierBandRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When bands is omitted; use hasBands() or valueOrDefault().
     */
    public function getBands(): array { return $this->get('bands'); }
    public function hasBands(): bool { return $this->has('bands'); }
    /** @return string
     * @throws SdkError When basis is omitted; use hasBasis() or valueOrDefault().
     */
    public function getBasis(): string { return $this->get('basis'); }
    public function hasBasis(): bool { return $this->has('basis'); }
    /** @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
}
