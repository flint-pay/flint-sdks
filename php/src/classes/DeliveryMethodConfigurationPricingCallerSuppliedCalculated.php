<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCallerSuppliedCalculatedBaseFeeCurrencyOptionsValue> $base_fee_currency_options
 * @property-read ?DeliveryMethodConfigurationPricingCallerSuppliedCalculatedDistance $distance
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMaximumFeeCurrencyOptionsValue> $maximum_fee_currency_options
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMinimumFeeCurrencyOptionsValue> $minimum_fee_currency_options
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCallerSuppliedCalculatedPerItemHandlingFeeCurrencyOptionsValue> $per_item_handling_fee_currency_options
 * @property-read ?DeliveryMethodConfigurationPricingCallerSuppliedCalculatedWeight $weight
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingCallerSuppliedCalculated extends Model {
    /** @param array{'base_fee_currency_options'?: \stdClass, 'distance'?: mixed, 'maximum_fee_currency_options'?: \stdClass, 'minimum_fee_currency_options'?: \stdClass, 'per_item_handling_fee_currency_options'?: \stdClass, 'weight'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingCallerSuppliedCalculated')); }
    /** Base delivery fee by ISO currency code. Each key must equal the Money object's currency. * (Value): {@see DeliveryMethodConfigurationPricingCallerSuppliedCalculatedBaseFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCallerSuppliedCalculatedBaseFeeCurrencyOptionsValue>
     */
    public function getBaseFeeCurrencyOptions(): ?array { return $this->get('base_fee_currency_options'); }
    public function hasBaseFeeCurrencyOptions(): bool { return $this->has('base_fee_currency_options'); }
    /** A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.
     * @return ?DeliveryMethodConfigurationPricingCallerSuppliedCalculatedDistance
     */
    public function getDistance(): ?DeliveryMethodConfigurationPricingCallerSuppliedCalculatedDistance { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. * (Value): {@see DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMaximumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMaximumFeeCurrencyOptionsValue>
     */
    public function getMaximumFeeCurrencyOptions(): ?array { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. * (Value): {@see DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMinimumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCallerSuppliedCalculatedMinimumFeeCurrencyOptionsValue>
     */
    public function getMinimumFeeCurrencyOptions(): ?array { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** Handling fee per item by ISO currency code. Each key must equal the Money object's currency. * (Value): {@see DeliveryMethodConfigurationPricingCallerSuppliedCalculatedPerItemHandlingFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCallerSuppliedCalculatedPerItemHandlingFeeCurrencyOptionsValue>
     */
    public function getPerItemHandlingFeeCurrencyOptions(): ?array { return $this->get('per_item_handling_fee_currency_options'); }
    public function hasPerItemHandlingFeeCurrencyOptions(): bool { return $this->has('per_item_handling_fee_currency_options'); }
    /** Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.
     * @return ?DeliveryMethodConfigurationPricingCallerSuppliedCalculatedWeight
     */
    public function getWeight(): ?DeliveryMethodConfigurationPricingCallerSuppliedCalculatedWeight { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
