<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCalculatedCalculatedBaseFeeCurrencyOptionsValue> $base_fee_currency_options
 * @property-read ?DeliveryMethodConfigurationPricingCalculatedCalculatedDistance $distance
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCalculatedCalculatedMaximumFeeCurrencyOptionsValue> $maximum_fee_currency_options
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCalculatedCalculatedMinimumFeeCurrencyOptionsValue> $minimum_fee_currency_options
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCalculatedCalculatedPerItemHandlingFeeCurrencyOptionsValue> $per_item_handling_fee_currency_options
 * @property-read ?DeliveryMethodConfigurationPricingCalculatedCalculatedWeight $weight
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingCalculatedCalculated extends Model {
    /** @param array{'base_fee_currency_options'?: \stdClass, 'distance'?: mixed, 'maximum_fee_currency_options'?: \stdClass, 'minimum_fee_currency_options'?: \stdClass, 'per_item_handling_fee_currency_options'?: \stdClass, 'weight'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingCalculatedCalculated')); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCalculatedCalculatedBaseFeeCurrencyOptionsValue} and {@see MoneyValue}). Base delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCalculatedCalculatedBaseFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCalculatedCalculatedBaseFeeCurrencyOptionsValue>
     */
    public function getBaseFeeCurrencyOptions(): ?array { return $this->get('base_fee_currency_options'); }
    public function hasBaseFeeCurrencyOptions(): bool { return $this->has('base_fee_currency_options'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCalculatedCalculatedDistance}. A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.
     * @return ?DeliveryMethodConfigurationPricingCalculatedCalculatedDistance
     */
    public function getDistance(): ?DeliveryMethodConfigurationPricingCalculatedCalculatedDistance { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCalculatedCalculatedMaximumFeeCurrencyOptionsValue} and {@see MoneyValue}). Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCalculatedCalculatedMaximumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCalculatedCalculatedMaximumFeeCurrencyOptionsValue>
     */
    public function getMaximumFeeCurrencyOptions(): ?array { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCalculatedCalculatedMinimumFeeCurrencyOptionsValue} and {@see MoneyValue}). Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCalculatedCalculatedMinimumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCalculatedCalculatedMinimumFeeCurrencyOptionsValue>
     */
    public function getMinimumFeeCurrencyOptions(): ?array { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCalculatedCalculatedPerItemHandlingFeeCurrencyOptionsValue} and {@see MoneyValue}). Handling fee per item by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCalculatedCalculatedPerItemHandlingFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCalculatedCalculatedPerItemHandlingFeeCurrencyOptionsValue>
     */
    public function getPerItemHandlingFeeCurrencyOptions(): ?array { return $this->get('per_item_handling_fee_currency_options'); }
    public function hasPerItemHandlingFeeCurrencyOptions(): bool { return $this->has('per_item_handling_fee_currency_options'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCalculatedCalculatedWeight}. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.
     * @return ?DeliveryMethodConfigurationPricingCalculatedCalculatedWeight
     */
    public function getWeight(): ?DeliveryMethodConfigurationPricingCalculatedCalculatedWeight { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
