<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $billing_at
 * @property-read string $currency
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read list<SubscriptionRenewalEstimateDiscountInput|array<array-key, mixed>|\stdClass> $discounts
 * @property-read list<SubscriptionRenewalEstimateLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read array{'amount': string, 'currency': string}|object|null $shipping_money
 * @property-read int $subscription_cycle
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $subtotal_money
 * @property-read array{'amount': string, 'currency': string}|object|null $tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionRenewalEstimateInput extends Model {
    /** @param array{'billing_at': string|\DateTimeInterface|null, 'currency': string, 'discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'discounts': list<SubscriptionRenewalEstimateDiscountInput|array<array-key, mixed>|\stdClass>, 'line_items': list<SubscriptionRenewalEstimateLineItemInput|array<array-key, mixed>|\stdClass>, 'shipping_money': array{'amount': string, 'currency': string}|object|null, 'subscription_cycle': int, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax_money': array{'amount': string, 'currency': string}|object|null, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalEstimateInput')); }
    /** Expected billing time, or null when billing is not scheduled. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When billing_at is omitted; use hasBillingAt() or valueOrDefault().
     */
    public function getBillingAt(): string|\DateTimeInterface|null { return $this->get('billing_at'); }
    public function hasBillingAt(): bool { return $this->has('billing_at'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /**  [] (Value): {@see SubscriptionRenewalEstimateDiscountInput}. An estimated renewal discount from a promotion or credit for a subscription plan change.
     * @return list<SubscriptionRenewalEstimateDiscountInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When discounts is omitted; use hasDiscounts() or valueOrDefault().
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /**  [] (Value): {@see SubscriptionRenewalEstimateLineItemInput}. A subscription item's quantity, subtotal, and discount in an estimated renewal.
     * @return list<SubscriptionRenewalEstimateLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Estimated shipping; null for a digital subscription. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When shipping_money is omitted; use hasShippingMoney() or valueOrDefault().
     */
    public function getShippingMoney(): mixed { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When subscription_cycle is omitted; use hasSubscriptionCycle() or valueOrDefault().
     */
    public function getSubscriptionCycle(): int { return $this->get('subscription_cycle'); }
    public function hasSubscriptionCycle(): bool { return $this->has('subscription_cycle'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Estimated tax; null when no tax address is available. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
