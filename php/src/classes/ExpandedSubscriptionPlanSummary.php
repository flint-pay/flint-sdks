<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read ?list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read ?string $created_at
 * @property-read string $currency
 * @property-read ?string $description
 * @property-read list<ExpandedSubscriptionPlanSummaryLineItemsItemVariant|ExpandedSubscriptionPlanSummaryLineItemsItemBundle|ExpandedSubscriptionPlanSummaryLineItemsItemCustom|\stdClass>|null $line_items
 * @property-read string $name
 * @property-read ?list<int> $quantity_options
 * @property-read ?MoneyValue $setup_fee_money
 * @property-read string $status
 * @property-read string $subscription_plan_id
 * @property-read ?int $trial_period_days
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionPlanSummary extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<mixed>, 'created_at'?: string, 'currency': string, 'description'?: string, 'line_items'?: list<mixed>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: mixed, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummary')); }
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
    /** Shape $ (Value): Array of {@see SubscriptionIntervalOption}. maxItems: 12. uniqueItems: true. Shape $[] (Value): {@see SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a subscription plan.
     * @return ?list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): ?array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): Array of {@see SubscriptionPlanLineItem}. Shape $[] (Value): {@see SubscriptionPlanLineItem}. A line item on a subscription plan, from a variant or bundle, with its quantity, price, and variants a subscriber can swap to.
     * @return list<ExpandedSubscriptionPlanSummaryLineItemsItemVariant|ExpandedSubscriptionPlanSummaryLineItemsItemBundle|ExpandedSubscriptionPlanSummaryLineItemsItemCustom|\stdClass>|null
     */
    public function getLineItems(): ?array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value): integer. minimum: 1. maximum: 100.
     * @return ?list<int>
     */
    public function getQuantityOptions(): ?array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getSetupFeeMoney(): ?MoneyValue { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return ?int
     */
    public function getTrialPeriodDays(): ?int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
