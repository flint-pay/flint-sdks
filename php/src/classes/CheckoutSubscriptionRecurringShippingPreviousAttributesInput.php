<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_method_name
 * @property-read string|null $price_type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $shipping_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionRecurringShippingPreviousAttributesInput extends Model {
    /** @param array{'delivery_method_name'?: string|null, 'price_type'?: string|null, 'shipping_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionRecurringShippingPreviousAttributesInput')); }
    /** Name of the delivery method the buyer chose, as the buyer sees it. anyOf[1] (Value): string. Name of the delivery method the buyer chose, as the buyer sees it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_name is omitted; use hasDeliveryMethodName() or valueOrDefault().
     */
    public function getDeliveryMethodName(): mixed { return $this->get('delivery_method_name'); }
    public function hasDeliveryMethodName(): bool { return $this->has('delivery_method_name'); }
    /** Whether the delivery method charges a flat price or a price worked out for each delivery. Value enum: "fixed", "quoted". anyOf[1] (Value): string. Whether the delivery method charges a flat price or a price worked out for each delivery. Value enum: "fixed", "quoted". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When price_type is omitted; use hasPriceType() or valueOrDefault().
     */
    public function getPriceType(): mixed { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** Shipping charge for one delivery with this delivery method. For a `quoted` method it is the amount worked out now, and later deliveries can charge a different amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When shipping_money is omitted; use hasShippingMoney() or valueOrDefault().
     */
    public function getShippingMoney(): mixed { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
}
