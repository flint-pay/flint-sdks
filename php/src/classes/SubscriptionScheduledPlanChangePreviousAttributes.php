<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read string|null $effective_at
 * @property-read list<SubscriptionLineItemPreviousAttributes>|null $line_items
 * @property-read MoneyValuePreviousAttributes|null $recurring_subtotal_money
 * @property-read string|null $requested_by
 * @property-read string|null $scheduled_at
 * @property-read string|null $subscription_plan_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionScheduledPlanChangePreviousAttributes extends Model {
    /** @param array{'billing_interval'?: mixed, 'billing_interval_count'?: mixed, 'effective_at'?: mixed, 'line_items'?: mixed, 'recurring_subtotal_money'?: mixed, 'requested_by'?: mixed, 'scheduled_at'?: mixed, 'subscription_plan_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionScheduledPlanChangePreviousAttributes')); }
    /** The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBillingInterval(): string|null { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of target billing_interval units between charges. anyOf[1] (Value): integer. Number of target billing_interval units between charges. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingIntervalCount(): int|null { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. anyOf[1] (Value): string. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEffectiveAt(): string|null { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** Frozen target lines, including buyer quantity permissions and bounds. anyOf[1] (Value): Array of {@see SubscriptionLineItemPreviousAttributes}. Frozen target lines, including buyer quantity permissions and bounds. anyOf[1][] (Value): {@see SubscriptionLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SubscriptionLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Frozen item subtotal per target billing period, before discounts, shipping, and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRecurringSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Who scheduled the plan change. Value enum: "buyer", "merchant". anyOf[1] (Value): string. Who scheduled the plan change. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequestedBy(): string|null { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** When the plan change was scheduled. anyOf[1] (Value): string. When the plan change was scheduled. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getScheduledAt(): string|null { return $this->get('scheduled_at'); }
    public function hasScheduledAt(): bool { return $this->has('scheduled_at'); }
    /** The scheduled target subscription plan. anyOf[1] (Value): string. The scheduled target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
