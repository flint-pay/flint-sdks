<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_starts
 * @property-read MoneyValue|null $credit_money
 * @property-read string|null $effective_at
 * @property-read string $interval
 * @property-read int $interval_count
 * @property-read string $mode
 * @property-read int $quantity
 * @property-read MoneyValue $recurring_subtotal_money
 * @property-read SubscriptionRenewalEstimate $renewal
 * @property-read string $subscription_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPreviewResponseDataQuantityChange extends Model {
    /** @param array{'billing_starts': string, 'credit_money': mixed, 'effective_at': string|null, 'interval': string, 'interval_count': int, 'mode': string, 'quantity': int, 'recurring_subtotal_money': mixed, 'renewal': mixed, 'subscription_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewResponseDataQuantityChange')); }
    /** When this quantity change is billed. Value enum: "prorated_now".
     * @return string
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** Credit for unused paid subscription time. Null when there is no paid period to credit. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getCreditMoney(): MoneyValue|null { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** When the quantities are expected to take effect. Null when no billing time is available. Format: date-time.
     * @return string|null
     */
    public function getEffectiveAt(): string|null { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** The subscription billing interval after the quantity change. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getInterval(): string { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** The number of interval units in each billing period. Format: int32.
     * @return int
     */
    public function getIntervalCount(): int { return $this->get('interval_count'); }
    public function hasIntervalCount(): bool { return $this->has('interval_count'); }
    /** The kind of subscription pricing estimate. Value enum: "quantity_change".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The full-period recurring item subtotal after the quantity change, before discounts, tax, or shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRecurringSubtotalMoney(): MoneyValue { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimate
     */
    public function getRenewal(): SubscriptionRenewalEstimate { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** The subscription whose quantities were estimated.
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
