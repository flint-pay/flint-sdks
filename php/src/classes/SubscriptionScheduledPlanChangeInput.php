<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read string|\DateTimeInterface|null $effective_at
 * @property-read list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $recurring_subtotal_money
 * @property-read string $requested_by
 * @property-read string|\DateTimeInterface $scheduled_at
 * @property-read string $subscription_plan_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionScheduledPlanChangeInput extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'effective_at': string|\DateTimeInterface|null, 'line_items': list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass>, 'quantity': int, 'recurring_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_by': string, 'scheduled_at': string|\DateTimeInterface, 'subscription_plan_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionScheduledPlanChangeInput')); }
    /** The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of target billing_interval units between charges. Format: int32.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Expected boundary from the current billing schedule. Null when the subscription is paused without a scheduled resume or is waiting for an external billing date. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When effective_at is omitted; use hasEffectiveAt() or valueOrDefault().
     */
    public function getEffectiveAt(): string|\DateTimeInterface|null { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** Frozen target lines, including buyer quantity permissions and bounds. [] (Value): {@see SubscriptionLineItemInput}. An item included in a customer's recurring purchase.
     * @return list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** The frozen target subscription quantity. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Frozen item subtotal per target billing period, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_subtotal_money is omitted; use hasRecurringSubtotalMoney() or valueOrDefault().
     */
    public function getRecurringSubtotalMoney(): mixed { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Who scheduled the plan change. Value enum: "buyer", "merchant".
     * @return string
     * @throws SdkError When requested_by is omitted; use hasRequestedBy() or valueOrDefault().
     */
    public function getRequestedBy(): string { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** When the plan change was scheduled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When scheduled_at is omitted; use hasScheduledAt() or valueOrDefault().
     */
    public function getScheduledAt(): string|\DateTimeInterface { return $this->get('scheduled_at'); }
    public function hasScheduledAt(): bool { return $this->has('scheduled_at'); }
    /** The scheduled target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
