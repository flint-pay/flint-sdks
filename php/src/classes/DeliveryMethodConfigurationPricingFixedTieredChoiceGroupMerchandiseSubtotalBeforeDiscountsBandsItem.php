<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItemCurrencyOptionsValue> $currency_options
 * @property-read int $from
 * @property-read ?int $to
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItem extends Model {
    /** @param array{'currency_options': \stdClass, 'from': int, 'to'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItem')); }
    /**  * (Value): {@see DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItemCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItemCurrencyOptionsValue>
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Format: int64.
     * @return int
     */
    public function getFrom(): int { return $this->get('from'); }
    public function hasFrom(): bool { return $this->has('from'); }
    /** Format: int64.
     * @return ?int
     */
    public function getTo(): ?int { return $this->get('to'); }
    public function hasTo(): bool { return $this->has('to'); }
}
