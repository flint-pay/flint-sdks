<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupFulfillmentQuantityBandsItemCurrencyOptionsValue> $currency_options
 * @property-read int $from
 * @property-read ?int $to
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupFulfillmentQuantityBandsItem extends Model {
    /** @param array{'currency_options': \stdClass, 'from': int, 'to'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupFulfillmentQuantityBandsItem')); }
    /** Price by ISO 4217 currency code. Each key must equal the currency of its Money value. * (Value): {@see DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupFulfillmentQuantityBandsItemCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupFulfillmentQuantityBandsItemCurrencyOptionsValue>
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. Format: int64.
     * @return int
     */
    public function getFrom(): int { return $this->get('from'); }
    public function hasFrom(): bool { return $this->has('from'); }
    /** Exclusive upper bound. Required for every band except the final band, where it must be omitted. Format: int64.
     * @return ?int
     */
    public function getTo(): ?int { return $this->get('to'); }
    public function hasTo(): bool { return $this->has('to'); }
}
