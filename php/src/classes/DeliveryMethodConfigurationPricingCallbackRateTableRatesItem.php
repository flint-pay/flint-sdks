<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, DeliveryMethodConfigurationPricingCallbackRateTableRatesItemCurrencyOptionsValue> $currency_options
 * @property-read string $delivery_rate_id
 * @property-read int $priority
 * @property-read mixed $when
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingCallbackRateTableRatesItem extends Model {
    /** @param array{'currency_options': \stdClass, 'delivery_rate_id': string, 'priority': int, 'when': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingCallbackRateTableRatesItem')); }
    /**  * (Value): {@see DeliveryMethodConfigurationPricingCallbackRateTableRatesItemCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingCallbackRateTableRatesItemCurrencyOptionsValue>
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** delivery_rate_id
     * @return string
     */
    public function getDeliveryRateId(): string { return $this->get('delivery_rate_id'); }
    public function hasDeliveryRateId(): bool { return $this->has('delivery_rate_id'); }
    /** Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     * @return int
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /**  anyOf[1] (Value): {@see DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getWhen(): mixed { return $this->get('when'); }
    public function hasWhen(): bool { return $this->has('when'); }
}
