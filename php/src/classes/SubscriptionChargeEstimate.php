<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_at
 * @property-read string $currency
 * @property-read int $deliveries_per_period
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read MoneyValue $discount_money
 * @property-read list<SubscriptionRenewalEstimateDiscount> $discounts
 * @property-read list<SubscriptionRenewalEstimateLineItem> $line_items
 * @property-read MoneyValue|null $shipping_money
 * @property-read int $subscription_cycle
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue|null $tax_money
 * @property-read MoneyValue $total_money
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionChargeEstimate extends Model {
    /** @param array{'billing_at': string|null, 'currency': string, 'deliveries_per_period': int, 'delivery_interval': string|null, 'delivery_interval_count': int|null, 'discount_money': mixed, 'discounts': list<mixed>, 'line_items': list<mixed>, 'shipping_money': mixed, 'subscription_cycle': int, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionChargeEstimate')); }
    /** Expected collection time. Null when billing is not scheduled. Format: date-time.
     * @return string|null
     */
    public function getBillingAt(): string|null { return $this->get('billing_at'); }
    public function hasBillingAt(): bool { return $this->has('billing_at'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24.
     * @return int
     */
    public function getDeliveriesPerPeriod(): int { return $this->get('deliveries_per_period'); }
    public function hasDeliveriesPerPeriod(): bool { return $this->has('deliveries_per_period'); }
    /** Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * @return string|null
     */
    public function getDeliveryInterval(): string|null { return $this->get('delivery_interval'); }
    public function hasDeliveryInterval(): bool { return $this->has('delivery_interval'); }
    /** Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: int32. minimum: 1.
     * @return int|null
     */
    public function getDeliveryIntervalCount(): int|null { return $this->get('delivery_interval_count'); }
    public function hasDeliveryIntervalCount(): bool { return $this->has('delivery_interval_count'); }
    /** Estimated discount total. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Promotions and credits applied to this estimated collection; [] when none apply. [] (Value): {@see SubscriptionRenewalEstimateDiscount}. An estimated renewal discount from a promotion or credit for a subscription plan change.
     * @return list<SubscriptionRenewalEstimateDiscount>
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** Items and quantities included in this estimated collection. [] (Value): {@see SubscriptionRenewalEstimateLineItem}. A subscription item's quantity, subtotal, and discount in an estimated renewal.
     * @return list<SubscriptionRenewalEstimateLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Estimated shipping. Null when this collection has no delivery. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getShippingMoney(): MoneyValue|null { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** The paid collection cycle, continuing imported completed_cycles; 0 for a separate setup fee. Format: uint64. minimum: 0.
     * @return int
     */
    public function getSubscriptionCycle(): int { return $this->get('subscription_cycle'); }
    public function hasSubscriptionCycle(): bool { return $this->has('subscription_cycle'); }
    /** Estimated item subtotal before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Estimated tax; `null` when tax can't be calculated yet. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getTaxMoney(): MoneyValue|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Estimated collection total, excluding unresolved tax when tax_money is null. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
