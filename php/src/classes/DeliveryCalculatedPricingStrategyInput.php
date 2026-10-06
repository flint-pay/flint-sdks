<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $base_fee_currency_options
 * @property-read DeliveryDistanceUnitPriceInput|array<array-key, mixed>|\stdClass $distance
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $maximum_fee_currency_options
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $minimum_fee_currency_options
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $per_item_handling_fee_currency_options
 * @property-read DeliveryWeightUnitPriceInput|array<array-key, mixed>|\stdClass $weight
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCalculatedPricingStrategyInput extends Model {
    /** @param array{'base_fee_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'distance'?: DeliveryDistanceUnitPriceInput|array<array-key, mixed>|\stdClass, 'maximum_fee_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'minimum_fee_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'per_item_handling_fee_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'weight'?: DeliveryWeightUnitPriceInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCalculatedPricingStrategyInput')); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When base_fee_currency_options is omitted; use hasBaseFeeCurrencyOptions() or valueOrDefault().
     */
    public function getBaseFeeCurrencyOptions(): array|object { return $this->get('base_fee_currency_options'); }
    public function hasBaseFeeCurrencyOptions(): bool { return $this->has('base_fee_currency_options'); }
    /** @return DeliveryDistanceUnitPriceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When distance is omitted; use hasDistance() or valueOrDefault().
     */
    public function getDistance(): mixed { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When maximum_fee_currency_options is omitted; use hasMaximumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMaximumFeeCurrencyOptions(): array|object { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When minimum_fee_currency_options is omitted; use hasMinimumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMinimumFeeCurrencyOptions(): array|object { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When per_item_handling_fee_currency_options is omitted; use hasPerItemHandlingFeeCurrencyOptions() or valueOrDefault().
     */
    public function getPerItemHandlingFeeCurrencyOptions(): array|object { return $this->get('per_item_handling_fee_currency_options'); }
    public function hasPerItemHandlingFeeCurrencyOptions(): bool { return $this->has('per_item_handling_fee_currency_options'); }
    /** @return DeliveryWeightUnitPriceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): mixed { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
