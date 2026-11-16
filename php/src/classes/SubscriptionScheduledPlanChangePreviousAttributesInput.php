<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read string|\DateTimeInterface|null $effective_at
 * @property-read list<SubscriptionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_items
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recurring_subtotal_money
 * @property-read string|null $requested_by
 * @property-read string|\DateTimeInterface|null $scheduled_at
 * @property-read string|null $subscription_plan_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionScheduledPlanChangePreviousAttributesInput extends Model {
    /** @param array{'billing_interval'?: string|null, 'billing_interval_count'?: int|null, 'effective_at'?: string|\DateTimeInterface|null, 'line_items'?: list<SubscriptionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'recurring_subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'requested_by'?: string|null, 'scheduled_at'?: string|\DateTimeInterface|null, 'subscription_plan_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionScheduledPlanChangePreviousAttributesInput')); }
    /** The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): mixed { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of target billing_interval units between charges. anyOf[1] (Value): integer. Number of target billing_interval units between charges. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): mixed { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. anyOf[1] (Value): string. Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When effective_at is omitted; use hasEffectiveAt() or valueOrDefault().
     */
    public function getEffectiveAt(): mixed { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** Frozen target lines, including buyer quantity permissions and bounds. anyOf[1] (Value): Array of {@see SubscriptionLineItemPreviousAttributesInput}. Frozen target lines, including buyer quantity permissions and bounds. anyOf[1][] (Value): {@see SubscriptionLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SubscriptionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Frozen item subtotal per target billing period, before discounts, shipping, and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recurring_subtotal_money is omitted; use hasRecurringSubtotalMoney() or valueOrDefault().
     */
    public function getRecurringSubtotalMoney(): mixed { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Who scheduled the plan change. Value enum: "buyer", "merchant". anyOf[1] (Value): string. Who scheduled the plan change. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When requested_by is omitted; use hasRequestedBy() or valueOrDefault().
     */
    public function getRequestedBy(): mixed { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** When the plan change was scheduled. anyOf[1] (Value): string. When the plan change was scheduled. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_at is omitted; use hasScheduledAt() or valueOrDefault().
     */
    public function getScheduledAt(): mixed { return $this->get('scheduled_at'); }
    public function hasScheduledAt(): bool { return $this->has('scheduled_at'); }
    /** The scheduled target subscription plan. anyOf[1] (Value): string. The scheduled target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): mixed { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
