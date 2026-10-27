<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, DeliveryMethodConfigurationPricingCalculatedFixedCurrencyOptionsValue> $currency_options
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingCalculatedFixed extends Model {
    /** @param array{'currency_options': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingCalculatedFixed')); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingCalculatedFixedCurrencyOptionsValue} and {@see MoneyValue}). Shape $.* (Value): {@see DeliveryMethodConfigurationPricingCalculatedFixedCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingCalculatedFixedCurrencyOptionsValue>
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
}
