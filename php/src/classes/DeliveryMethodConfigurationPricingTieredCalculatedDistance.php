<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedDistanceCurrencyOptionsValue> $currency_options
 * @property-read string $unit
 * @property-read string $unit_quantity
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingTieredCalculatedDistance extends Model {
    /** @param array{'currency_options': \stdClass, 'unit': string, 'unit_quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingTieredCalculatedDistance')); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingTieredCalculatedDistanceCurrencyOptionsValue} and {@see MoneyValue}). Shape $.* (Value): {@see DeliveryMethodConfigurationPricingTieredCalculatedDistanceCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedDistanceCurrencyOptionsValue>
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Shape $ (Value): string. Distance unit used by unit_quantity. Value enum: "meter", "kilometer", "mile".
     * @return string
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Shape $ (Value): integer string. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     */
    public function getUnitQuantity(): string { return $this->get('unit_quantity'); }
    public function hasUnitQuantity(): bool { return $this->has('unit_quantity'); }
}
