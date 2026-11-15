<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_name
 * @property-read string $price_type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $shipping_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionRecurringShippingInput extends Model {
    /** @param array{'delivery_method_name': string, 'price_type': string, 'shipping_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionRecurringShippingInput')); }
    /** Name of the delivery method the buyer chose, as the buyer sees it.
     * @return string
     * @throws SdkError When delivery_method_name is omitted; use hasDeliveryMethodName() or valueOrDefault().
     */
    public function getDeliveryMethodName(): string { return $this->get('delivery_method_name'); }
    public function hasDeliveryMethodName(): bool { return $this->has('delivery_method_name'); }
    /** Whether the delivery method charges a flat price or a price worked out for each delivery. Value enum: "fixed", "quoted".
     * @return string
     * @throws SdkError When price_type is omitted; use hasPriceType() or valueOrDefault().
     */
    public function getPriceType(): string { return $this->get('price_type'); }
    public function hasPriceType(): bool { return $this->has('price_type'); }
    /** Shipping charge for one delivery with this delivery method. For a `quoted` method it is the amount worked out now, and later deliveries can charge a different amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipping_money is omitted; use hasShippingMoney() or valueOrDefault().
     */
    public function getShippingMoney(): mixed { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
}
