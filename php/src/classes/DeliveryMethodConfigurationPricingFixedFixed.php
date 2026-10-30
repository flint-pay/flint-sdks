<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, DeliveryMethodConfigurationPricingFixedFixedCurrencyOptionsValue> $currency_options
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingFixedFixed extends Model {
    /** @param array{'currency_options': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingFixedFixed')); }
    /**  * (Value): {@see DeliveryMethodConfigurationPricingFixedFixedCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingFixedFixedCurrencyOptionsValue>
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
}
