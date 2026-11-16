<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $base_fee_currency_options
 * @property-read DeliveryDistanceUnitPricePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $distance
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $maximum_fee_currency_options
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $minimum_fee_currency_options
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $per_item_handling_fee_currency_options
 * @property-read DeliveryWeightUnitPricePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $weight
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCalculatedPricingStrategyPreviousAttributesInput extends Model {
    /** @param array{'base_fee_currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'distance'?: DeliveryDistanceUnitPricePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'maximum_fee_currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'minimum_fee_currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'per_item_handling_fee_currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'weight'?: DeliveryWeightUnitPricePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCalculatedPricingStrategyPreviousAttributesInput')); }
    /** Base delivery fee by ISO currency code. Each key must equal the Money object's currency. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When base_fee_currency_options is omitted; use hasBaseFeeCurrencyOptions() or valueOrDefault().
     */
    public function getBaseFeeCurrencyOptions(): mixed { return $this->get('base_fee_currency_options'); }
    public function hasBaseFeeCurrencyOptions(): bool { return $this->has('base_fee_currency_options'); }
    /** Charge per unit of distance between the origin and the destination. anyOf[1] (Value): {@see DeliveryDistanceUnitPricePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryDistanceUnitPricePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When distance is omitted; use hasDistance() or valueOrDefault().
     */
    public function getDistance(): mixed { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When maximum_fee_currency_options is omitted; use hasMaximumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMaximumFeeCurrencyOptions(): mixed { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When minimum_fee_currency_options is omitted; use hasMinimumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMinimumFeeCurrencyOptions(): mixed { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** Handling fee per item by ISO currency code. Each key must equal the Money object's currency. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When per_item_handling_fee_currency_options is omitted; use hasPerItemHandlingFeeCurrencyOptions() or valueOrDefault().
     */
    public function getPerItemHandlingFeeCurrencyOptions(): mixed { return $this->get('per_item_handling_fee_currency_options'); }
    public function hasPerItemHandlingFeeCurrencyOptions(): bool { return $this->has('per_item_handling_fee_currency_options'); }
    /** Charge per unit of weight of the items. anyOf[1] (Value): {@see DeliveryWeightUnitPricePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryWeightUnitPricePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): mixed { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
