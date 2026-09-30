<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValue> $base_fee
 * @property-read DeliveryDistanceUnitPriceRequest $distance
 * @property-read array<array-key, MoneyValue> $maximum_amount
 * @property-read array<array-key, MoneyValue> $minimum_amount
 * @property-read array<array-key, MoneyValue> $per_item_handling
 * @property-read DeliveryWeightUnitPriceRequest $weight
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryCalculatedPricingStrategyRequest extends Model {
    /** @param array{'base_fee'?: \stdClass, 'distance'?: mixed, 'maximum_amount'?: \stdClass, 'minimum_amount'?: \stdClass, 'per_item_handling'?: \stdClass, 'weight'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCalculatedPricingStrategyRequest')); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When base_fee is omitted; use hasBaseFee() or valueOrDefault().
     */
    public function getBaseFee(): array { return $this->get('base_fee'); }
    public function hasBaseFee(): bool { return $this->has('base_fee'); }
    /** @return DeliveryDistanceUnitPriceRequest
     * @throws SdkError When distance is omitted; use hasDistance() or valueOrDefault().
     */
    public function getDistance(): DeliveryDistanceUnitPriceRequest { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When maximum_amount is omitted; use hasMaximumAmount() or valueOrDefault().
     */
    public function getMaximumAmount(): array { return $this->get('maximum_amount'); }
    public function hasMaximumAmount(): bool { return $this->has('maximum_amount'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When minimum_amount is omitted; use hasMinimumAmount() or valueOrDefault().
     */
    public function getMinimumAmount(): array { return $this->get('minimum_amount'); }
    public function hasMinimumAmount(): bool { return $this->has('minimum_amount'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When per_item_handling is omitted; use hasPerItemHandling() or valueOrDefault().
     */
    public function getPerItemHandling(): array { return $this->get('per_item_handling'); }
    public function hasPerItemHandling(): bool { return $this->has('per_item_handling'); }
    /** @return DeliveryWeightUnitPriceRequest
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): DeliveryWeightUnitPriceRequest { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
