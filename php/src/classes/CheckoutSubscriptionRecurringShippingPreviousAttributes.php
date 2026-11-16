<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_method_name
 * @property-read string|null $price_type
 * @property-read MoneyValuePreviousAttributes|null $shipping_money
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSubscriptionRecurringShippingPreviousAttributes extends Model {
    /** @param array{'delivery_method_name'?: mixed, 'price_type'?: mixed, 'shipping_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionRecurringShippingPreviousAttributes')); }
    /** Name of the delivery method the buyer chose, as the buyer sees it. anyOf[1] (Value): string. Name of the delivery method the buyer chose, as the buyer sees it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodName(): string|null { return $this->get('delivery_method_name'); }
    public function hasDeliveryMethodName(): bool { return $this->has('delivery_method_name'); }
    /** Whether the delivery method charges a flat price or a price worked out for each delivery. Value enum: "fixed", "quoted". anyOf[1] (Value): string. Whether the delivery method charges a flat price or a price worked out for each delivery. Value enum: "fixed", "quoted". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPriceType(): string|null { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** Shipping charge for one delivery with this delivery method. For a `quoted` method it is the amount worked out now, and later deliveries can charge a different amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getShippingMoney(): MoneyValuePreviousAttributes|null { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
}
