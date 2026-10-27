<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCallbackCalculatedBaseFeeCurrencyOptionsValue> $base_fee_currency_options
 * @property-read ?DeliveryMethodConfigurationPricingCallbackCalculatedDistance $distance
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCallbackCalculatedMaximumFeeCurrencyOptionsValue> $maximum_fee_currency_options
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCallbackCalculatedMinimumFeeCurrencyOptionsValue> $minimum_fee_currency_options
 * @property-read ?array<array-key, DeliveryMethodConfigurationPricingCallbackCalculatedPerItemHandlingFeeCurrencyOptionsValue> $per_item_handling_fee_currency_options
 * @property-read ?DeliveryMethodConfigurationPricingCallbackCalculatedWeight $weight
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingCallbackCalculated extends Model {
    /** @param array{'base_fee_currency_options'?: \stdClass, 'distance'?: mixed, 'maximum_fee_currency_options'?: \stdClass, 'minimum_fee_currency_options'?: \stdClass, 'per_item_handling_fee_currency_options'?: \stdClass, 'weight'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingCallbackCalculated')); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCallbackCalculatedBaseFeeCurrencyOptionsValue} and {@see MoneyValue}). Base delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCallbackCalculatedBaseFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCallbackCalculatedBaseFeeCurrencyOptionsValue>
     */
    public function getBaseFeeCurrencyOptions(): ?array { return $this->get('base_fee_currency_options'); }
    public function hasBaseFeeCurrencyOptions(): bool { return $this->has('base_fee_currency_options'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCallbackCalculatedDistance}. A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.
     * @return ?DeliveryMethodConfigurationPricingCallbackCalculatedDistance
     */
    public function getDistance(): ?DeliveryMethodConfigurationPricingCallbackCalculatedDistance { return $this->get('distance'); }
    public function hasDistance(): bool { return $this->has('distance'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCallbackCalculatedMaximumFeeCurrencyOptionsValue} and {@see MoneyValue}). Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCallbackCalculatedMaximumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCallbackCalculatedMaximumFeeCurrencyOptionsValue>
     */
    public function getMaximumFeeCurrencyOptions(): ?array { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCallbackCalculatedMinimumFeeCurrencyOptionsValue} and {@see MoneyValue}). Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCallbackCalculatedMinimumFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCallbackCalculatedMinimumFeeCurrencyOptionsValue>
     */
    public function getMinimumFeeCurrencyOptions(): ?array { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCallbackCalculatedPerItemHandlingFeeCurrencyOptionsValue} and {@see MoneyValue}). Handling fee per item by ISO currency code. Each key must equal the Money object's currency. Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCallbackCalculatedPerItemHandlingFeeCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, DeliveryMethodConfigurationPricingCallbackCalculatedPerItemHandlingFeeCurrencyOptionsValue>
     */
    public function getPerItemHandlingFeeCurrencyOptions(): ?array { return $this->get('per_item_handling_fee_currency_options'); }
    public function hasPerItemHandlingFeeCurrencyOptions(): bool { return $this->has('per_item_handling_fee_currency_options'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCallbackCalculatedWeight}. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.
     * @return ?DeliveryMethodConfigurationPricingCallbackCalculatedWeight
     */
    public function getWeight(): ?DeliveryMethodConfigurationPricingCallbackCalculatedWeight { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
