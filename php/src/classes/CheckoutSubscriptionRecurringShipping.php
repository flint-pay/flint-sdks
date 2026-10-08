<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_name
 * @property-read string $price_type
 * @property-read MoneyValue $shipping_money
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutSubscriptionRecurringShipping extends Model {
    /** @param array{'delivery_method_name': string, 'price_type': string, 'shipping_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionRecurringShipping')); }
    /** @return string
     * @throws SdkError When delivery_method_name is omitted; use hasDeliveryMethodName() or valueOrDefault().
     */
    public function getDeliveryMethodName(): string { return $this->get('delivery_method_name'); }
    public function hasDeliveryMethodName(): bool { return $this->has('delivery_method_name'); }
    /** @return string
     * @throws SdkError When price_type is omitted; use hasPriceType() or valueOrDefault().
     */
    public function getPriceType(): string { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** @return MoneyValue
     * @throws SdkError When shipping_money is omitted; use hasShippingMoney() or valueOrDefault().
     */
    public function getShippingMoney(): MoneyValue { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
}
