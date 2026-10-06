<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValue> $base_fee_currency_options
 * @property-read DeliveryDistanceUnitPrice $distance
 * @property-read array<array-key, MoneyValue> $maximum_fee_currency_options
 * @property-read array<array-key, MoneyValue> $minimum_fee_currency_options
 * @property-read array<array-key, MoneyValue> $per_item_handling_fee_currency_options
 * @property-read DeliveryWeightUnitPrice $weight
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryCalculatedPricingStrategy extends Model {
    /** @param array{'base_fee_currency_options'?: \stdClass, 'distance'?: mixed, 'maximum_fee_currency_options'?: \stdClass, 'minimum_fee_currency_options'?: \stdClass, 'per_item_handling_fee_currency_options'?: \stdClass, 'weight'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCalculatedPricingStrategy')); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When base_fee_currency_options is omitted; use hasBaseFeeCurrencyOptions() or valueOrDefault().
     */
    public function getBaseFeeCurrencyOptions(): array { return $this->get('base_fee_currency_options'); }
    public function hasBaseFeeCurrencyOptions(): bool { return $this->has('base_fee_currency_options'); }
    /** @return DeliveryDistanceUnitPrice
     * @throws SdkError When distance is omitted; use hasDistance() or valueOrDefault().
     */
    public function getDistance(): DeliveryDistanceUnitPrice { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When maximum_fee_currency_options is omitted; use hasMaximumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMaximumFeeCurrencyOptions(): array { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When minimum_fee_currency_options is omitted; use hasMinimumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMinimumFeeCurrencyOptions(): array { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When per_item_handling_fee_currency_options is omitted; use hasPerItemHandlingFeeCurrencyOptions() or valueOrDefault().
     */
    public function getPerItemHandlingFeeCurrencyOptions(): array { return $this->get('per_item_handling_fee_currency_options'); }
    public function hasPerItemHandlingFeeCurrencyOptions(): bool { return $this->has('per_item_handling_fee_currency_options'); }
    /** @return DeliveryWeightUnitPrice
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): DeliveryWeightUnitPrice { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
