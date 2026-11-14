<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_name
 * @property-read string $price_type
 * @property-read ?MoneyValue $shipping_money
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSubscriptionRecurringShipping extends Model {
    /** @param array{'delivery_method_name': string, 'price_type': string, 'shipping_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionRecurringShipping')); }
    /** Name of the delivery method the buyer chose, as the buyer sees it.
     * @return string
     */
    public function getDeliveryMethodName(): string { return $this->get('delivery_method_name'); }
    public function hasDeliveryMethodName(): bool { return $this->has('delivery_method_name'); }
    /** Whether the delivery method charges a flat price or a price worked out for each delivery. Value enum: "fixed", "quoted".
     * @return string
     */
    public function getPriceType(): string { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** Shipping charge for one delivery with this delivery method. For a `quoted` method it is the amount worked out now, and later deliveries can charge a different amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getShippingMoney(): ?MoneyValue { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
}
