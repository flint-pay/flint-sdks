<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read ?int $contract_term_months
 * @property-read bool $delivery_required
 * @property-read ?MoneyValue $early_termination_fee_money
 * @property-read string $plan_name
 * @property-read int $quantity
 * @property-read list<int> $quantity_options
 * @property-read ?CheckoutSubscriptionRecurringShipping $recurring_shipping
 * @property-read MoneyValue $recurring_total_money
 * @property-read ?MoneyValue $setup_fee_money
 * @property-read string $subscription_plan_id
 * @property-read ?int $trial_period_days
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSubscriptionTerms extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options': list<mixed>, 'contract_term_months'?: int, 'delivery_required': bool, 'early_termination_fee_money'?: mixed, 'plan_name': string, 'quantity': int, 'quantity_options': list<int>, 'recurring_shipping'?: mixed, 'recurring_total_money': mixed, 'setup_fee_money'?: mixed, 'subscription_plan_id': string, 'trial_period_days'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTerms')); }
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Shape $ (Value): integer. Number of billing intervals between recurring charges. Format: int32.
     * @return int
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Shape $ (Value): Array of {@see SubscriptionIntervalOption}. minItems: 1. Shape $[] (Value): {@see SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a subscription plan.
     * @return list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Shape $ (Value): integer. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: int32.
     * @return ?int
     */
    public function getContractTermMonths(): ?int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** Shape $ (Value): boolean. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value.
     * @return bool
     */
    public function getDeliveryRequired(): bool { return $this->get('delivery_required'); }
    public function hasDeliveryRequired(): bool { return $this->has('delivery_required'); }
    /** Shape $ (Value): {@see MoneyValue}. The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getEarlyTerminationFeeMoney(): ?MoneyValue { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Shape $ (Value): string. Plan name shown to the buyer.
     * @return string
     */
    public function getPlanName(): string { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): Array of integer. minItems: 1. Shape $[] (Value): integer. Format: int32.
     * @return list<int>
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** Shape $ (Value): {@see CheckoutSubscriptionRecurringShipping}. Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount.
     * @return ?CheckoutSubscriptionRecurringShipping
     */
    public function getRecurringShipping(): ?CheckoutSubscriptionRecurringShipping { return $this->get('recurring_shipping'); }
    public function hasRecurringShipping(): bool { return $this->has('recurring_shipping'); }
    /** Shape $ (Value): {@see MoneyValue}. Charge for one billing interval before tax: each line's unit price times its quantity, plus modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRecurringTotalMoney(): MoneyValue { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** Shape $ (Value): {@see MoneyValue}. One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getSetupFeeMoney(): ?MoneyValue { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Shape $ (Value): string. Flint subscription plan ID the terms come from.
     * @return string
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): integer. Days before the first recurring charge, when the plan has a trial. Format: int32.
     * @return ?int
     */
    public function getTrialPeriodDays(): ?int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
}
