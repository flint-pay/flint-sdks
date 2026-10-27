<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedBaseFeeCurrencyOptionsValue> $base_fee_currency_options
 * @property-read ?DeliveryMethodConfigurationPricingTieredCalculatedDistance $distance
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedMaximumFeeCurrencyOptionsValue> $maximum_fee_currency_options
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedMinimumFeeCurrencyOptionsValue> $minimum_fee_currency_options
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedPerItemHandlingFeeCurrencyOptionsValue> $per_item_handling_fee_currency_options
 * @property-read ?DeliveryMethodConfigurationPricingTieredCalculatedWeight $weight
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingTieredCalculated extends Model {
    /** @param array{'base_fee_currency_options'?: \stdClass, 'distance'?: mixed, 'maximum_fee_currency_options'?: \stdClass, 'minimum_fee_currency_options'?: \stdClass, 'per_item_handling_fee_currency_options'?: \stdClass, 'weight'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingTieredCalculated')); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingTieredCalculatedBaseFeeCurrencyOptionsValue} and {@see MoneyValue}). Base delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingTieredCalculatedBaseFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedBaseFeeCurrencyOptionsValue>
     */
    public function getBaseFeeCurrencyOptions(): ?array { return $this->get('base_fee_currency_options'); }
    public function hasBaseFeeCurrencyOptions(): bool { return $this->has('base_fee_currency_options'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingTieredCalculatedDistance}. A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.
     * @return ?DeliveryMethodConfigurationPricingTieredCalculatedDistance
     */
    public function getDistance(): ?DeliveryMethodConfigurationPricingTieredCalculatedDistance { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingTieredCalculatedMaximumFeeCurrencyOptionsValue} and {@see MoneyValue}). Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingTieredCalculatedMaximumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedMaximumFeeCurrencyOptionsValue>
     */
    public function getMaximumFeeCurrencyOptions(): ?array { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingTieredCalculatedMinimumFeeCurrencyOptionsValue} and {@see MoneyValue}). Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingTieredCalculatedMinimumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedMinimumFeeCurrencyOptionsValue>
     */
    public function getMinimumFeeCurrencyOptions(): ?array { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingTieredCalculatedPerItemHandlingFeeCurrencyOptionsValue} and {@see MoneyValue}). Handling fee per item by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingTieredCalculatedPerItemHandlingFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedPerItemHandlingFeeCurrencyOptionsValue>
     */
    public function getPerItemHandlingFeeCurrencyOptions(): ?array { return $this->get('per_item_handling_fee_currency_options'); }
    public function hasPerItemHandlingFeeCurrencyOptions(): bool { return $this->has('per_item_handling_fee_currency_options'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingTieredCalculatedWeight}. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.
     * @return ?DeliveryMethodConfigurationPricingTieredCalculatedWeight
     */
    public function getWeight(): ?DeliveryMethodConfigurationPricingTieredCalculatedWeight { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
