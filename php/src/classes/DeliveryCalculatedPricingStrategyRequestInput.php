<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $base_fee
 * @property-read DeliveryDistanceUnitPriceRequestInput|array<array-key, mixed>|\stdClass $distance
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $maximum_amount
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $minimum_amount
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $per_item_handling
 * @property-read DeliveryWeightUnitPriceRequestInput|array<array-key, mixed>|\stdClass $weight
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCalculatedPricingStrategyRequestInput extends Model {
    /** @param array{'base_fee'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'distance'?: DeliveryDistanceUnitPriceRequestInput|array<array-key, mixed>|\stdClass, 'maximum_amount'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'minimum_amount'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'per_item_handling'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'weight'?: DeliveryWeightUnitPriceRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCalculatedPricingStrategyRequestInput')); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When base_fee is omitted; use hasBaseFee() or valueOrDefault().
     */
    public function getBaseFee(): array|object { return $this->get('base_fee'); }
    public function hasBaseFee(): bool { return $this->has('base_fee'); }
    /** @return DeliveryDistanceUnitPriceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When distance is omitted; use hasDistance() or valueOrDefault().
     */
    public function getDistance(): mixed { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When maximum_amount is omitted; use hasMaximumAmount() or valueOrDefault().
     */
    public function getMaximumAmount(): array|object { return $this->get('maximum_amount'); }
    public function hasMaximumAmount(): bool { return $this->has('maximum_amount'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When minimum_amount is omitted; use hasMinimumAmount() or valueOrDefault().
     */
    public function getMinimumAmount(): array|object { return $this->get('minimum_amount'); }
    public function hasMinimumAmount(): bool { return $this->has('minimum_amount'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When per_item_handling is omitted; use hasPerItemHandling() or valueOrDefault().
     */
    public function getPerItemHandling(): array|object { return $this->get('per_item_handling'); }
    public function hasPerItemHandling(): bool { return $this->has('per_item_handling'); }
    /** @return DeliveryWeightUnitPriceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): mixed { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
