<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionPreviousAttributes>|null $billing_interval_options
 * @property-read string|null $created_at
 * @property-read string|null $currency
 * @property-read string|null $description
 * @property-read list<\stdClass>|null $line_items
 * @property-read string|null $name
 * @property-read MoneyValuePreviousAttributes|null $setup_fee_money
 * @property-read string|null $status
 * @property-read string|null $subscription_plan_id
 * @property-read int|null $trial_period_days
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionPlanSummaryPreviousAttributes extends Model {
    /** @param array{'billing_interval'?: mixed, 'billing_interval_count'?: mixed, 'billing_interval_options'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'description'?: mixed, 'line_items'?: mixed, 'name'?: mixed, 'setup_fee_money'?: mixed, 'status'?: mixed, 'subscription_plan_id'?: mixed, 'trial_period_days'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummaryPreviousAttributes')); }
    /** Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBillingInterval(): string|null { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of `billing_interval` units between charges on the plan's default pair. anyOf[1] (Value): integer. Number of `billing_interval` units between charges on the plan's default pair. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingIntervalCount(): int|null { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. anyOf[1] (Value): Array of {@see SubscriptionIntervalOptionPreviousAttributes}. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: 12. uniqueItems: true. anyOf[1][] (Value): {@see SubscriptionIntervalOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SubscriptionIntervalOptionPreviousAttributes>|null
     */
    public function getBillingIntervalOptions(): array|null { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Description of the plan. Omitted when none is set. anyOf[1] (Value): string. Description of the plan. Omitted when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. anyOf[1] (Value): Array of {@see SubscriptionPlanLineItemPreviousAttributes}. The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. anyOf[1][] (Value): {@see SubscriptionPlanLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<\stdClass>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Name of the plan. Buyers see it at checkout and on their subscription. anyOf[1] (Value): string. Name of the plan. Buyers see it at checkout and on their subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSetupFeeMoney(): MoneyValuePreviousAttributes|null { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for this subscription plan, prefixed `plan_`. anyOf[1] (Value): string. Unique identifier for this subscription plan, prefixed `plan_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. anyOf[1] (Value): integer. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getTrialPeriodDays(): int|null { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
