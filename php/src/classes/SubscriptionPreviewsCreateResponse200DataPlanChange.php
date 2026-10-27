<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read string $billing_starts
 * @property-read MoneyValue|null $credit_money
 * @property-read string $mode
 * @property-read int $quantity
 * @property-read MoneyValue $recurring_subtotal_money
 * @property-read SubscriptionRenewalEstimate $renewal
 * @property-read string $subscription_id
 * @property-read string $subscription_plan_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPreviewsCreateResponse200DataPlanChange extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_starts': string, 'credit_money': mixed, 'mode': string, 'quantity': int, 'recurring_subtotal_money': mixed, 'renewal': mixed, 'subscription_id': string, 'subscription_plan_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewsCreateResponse200DataPlanChange')); }
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Shape $ (Value): string.  Value enum: "now", "next_renewal".
     * @return string
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** Shape $ (Value): {@see MoneyValue} or null. Unused paid item time credited when billing_starts is now; null for next_renewal. Shape $.anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getCreditMoney(): MoneyValue|null { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): string.  Value enum: "plan_change".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRecurringSubtotalMoney(): MoneyValue { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Shape $ (Value): {@see SubscriptionRenewalEstimate}. Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimate
     */
    public function getRenewal(): SubscriptionRenewalEstimate { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
