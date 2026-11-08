<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read string|null $effective_at
 * @property-read list<BuyerSubscriptionLineItem> $line_items
 * @property-read int $quantity
 * @property-read MoneyValue $recurring_subtotal_money
 * @property-read string $requested_by
 * @property-read string $scheduled_at
 * @property-read BuyerExpandedSubscriptionPlanSummary $subscription_plan
 * @property-read string $subscription_plan_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionScheduledPlanChange extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'effective_at': string|null, 'line_items': list<mixed>, 'quantity': int, 'recurring_subtotal_money': mixed, 'requested_by': string, 'scheduled_at': string, 'subscription_plan': mixed, 'subscription_plan_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionScheduledPlanChange')); }
    /** The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of target billing_interval units between charges. Format: int32.
     * @return int
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: date-time.
     * @return string|null
     */
    public function getEffectiveAt(): string|null { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** Frozen target lines, including buyer quantity permissions and bounds. [] (Value): {@see BuyerSubscriptionLineItem}. An item included in a customer's recurring purchase.
     * @return list<BuyerSubscriptionLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** The frozen target subscription quantity. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Frozen item subtotal per target billing period, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRecurringSubtotalMoney(): MoneyValue { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Who scheduled the plan change. Value enum: "buyer", "merchant".
     * @return string
     */
    public function getRequestedBy(): string { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** When the plan change was scheduled. Format: date-time.
     * @return string
     */
    public function getScheduledAt(): string { return $this->get('scheduled_at'); }
    public function hasScheduledAt(): bool { return $this->has('scheduled_at'); }
    /** The scheduled target plan summary, including archived plans. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items.
     * @return BuyerExpandedSubscriptionPlanSummary
     */
    public function getSubscriptionPlan(): BuyerExpandedSubscriptionPlanSummary { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** The scheduled target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
