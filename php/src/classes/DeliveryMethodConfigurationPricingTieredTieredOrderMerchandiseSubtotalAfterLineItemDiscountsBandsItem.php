<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItemCurrencyOptionsValue> $currency_options
 * @property-read string $from
 * @property-read ?string $to
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItem extends Model {
    /** @param array{'currency_options': \stdClass, 'from': string, 'to'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItem')); }
    /** Shape $ (Value): Map of ({@see DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItemCurrencyOptionsValue} and {@see MoneyValue}). Shape $.* (Value): {@see DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItemCurrencyOptionsValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscountsBandsItemCurrencyOptionsValue>
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getFrom(): string { return $this->get('from'); }
    public function hasFrom(): bool { return $this->has('from'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getTo(): ?string { return $this->get('to'); }
    public function hasTo(): bool { return $this->has('to'); }
}
