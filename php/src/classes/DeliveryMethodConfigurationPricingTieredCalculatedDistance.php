<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedDistanceCurrencyOptionsValue> $currency_options
 * @property-read string $unit
 * @property-read int $unit_quantity
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingTieredCalculatedDistance extends Model {
    /** @param array{'currency_options': \stdClass, 'unit': string, 'unit_quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingTieredCalculatedDistance')); }
    /**  * (Value): {@see DeliveryMethodConfigurationPricingTieredCalculatedDistanceCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingTieredCalculatedDistanceCurrencyOptionsValue>
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Distance unit used by unit_quantity. Value enum: "meter", "kilometer", "mile".
     * @return string
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: int64. minimum: 1.
     * @return int
     */
    public function getUnitQuantity(): int { return $this->get('unit_quantity'); }
    public function hasUnitQuantity(): bool { return $this->has('unit_quantity'); }
}
