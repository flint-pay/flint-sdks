<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $billing_interval_options
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $currency
 * @property-read string|null $description
 * @property-read list<SubscriptionPlanLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_items
 * @property-read string|null $name
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $setup_fee_money
 * @property-read string|null $status
 * @property-read string|null $subscription_plan_id
 * @property-read int|null $trial_period_days
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedSubscriptionPlanSummaryPreviousAttributesInput extends Model {
    /** @param array{'billing_interval'?: string|null, 'billing_interval_count'?: int|null, 'billing_interval_options'?: list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'created_at'?: string|\DateTimeInterface|null, 'currency'?: string|null, 'description'?: string|null, 'line_items'?: list<SubscriptionPlanLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'name'?: string|null, 'setup_fee_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'subscription_plan_id'?: string|null, 'trial_period_days'?: int|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummaryPreviousAttributesInput')); }
    /** Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): mixed { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of `billing_interval` units between charges on the plan's default pair. anyOf[1] (Value): integer. Number of `billing_interval` units between charges on the plan's default pair. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): mixed { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. anyOf[1] (Value): Array of {@see SubscriptionIntervalOptionPreviousAttributesInput}. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: 12. uniqueItems: true. anyOf[1][] (Value): {@see SubscriptionIntervalOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): mixed { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): mixed { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Description of the plan. Omitted when none is set. anyOf[1] (Value): string. Description of the plan. Omitted when none is set. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. anyOf[1] (Value): Array of {@see SubscriptionPlanLineItemPreviousAttributesInput}. The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. anyOf[1][] (Value): {@see SubscriptionPlanLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SubscriptionPlanLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Name of the plan. Buyers see it at checkout and on their subscription. anyOf[1] (Value): string. Name of the plan. Buyers see it at checkout and on their subscription. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When setup_fee_money is omitted; use hasSetupFeeMoney() or valueOrDefault().
     */
    public function getSetupFeeMoney(): mixed { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for this subscription plan, prefixed `plan_`. anyOf[1] (Value): string. Unique identifier for this subscription plan, prefixed `plan_`. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): mixed { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. anyOf[1] (Value): integer. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When trial_period_days is omitted; use hasTrialPeriodDays() or valueOrDefault().
     */
    public function getTrialPeriodDays(): mixed { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
