<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass> $billing_interval_options
 * @property-read int $contract_term_months
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $early_termination_fee_money
 * @property-read string $plan_name
 * @property-read int $quantity
 * @property-read list<int> $quantity_options
 * @property-read CheckoutSubscriptionRecurringShippingInput|array<array-key, mixed>|\stdClass $recurring_shipping
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $recurring_total_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $setup_fee_money
 * @property-read string $subscription_plan_id
 * @property-read int $trial_period_days
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionTermsInput extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options': list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'contract_term_months'?: int, 'early_termination_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'plan_name': string, 'quantity': int, 'quantity_options': list<int>, 'recurring_shipping'?: CheckoutSubscriptionRecurringShippingInput|array<array-key, mixed>|\stdClass, 'recurring_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'subscription_plan_id': string, 'trial_period_days'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTermsInput')); }
    /** @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** @return list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** @return int
     * @throws SdkError When contract_term_months is omitted; use hasContractTermMonths() or valueOrDefault().
     */
    public function getContractTermMonths(): int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When early_termination_fee_money is omitted; use hasEarlyTerminationFeeMoney() or valueOrDefault().
     */
    public function getEarlyTerminationFeeMoney(): mixed { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** @return string
     * @throws SdkError When plan_name is omitted; use hasPlanName() or valueOrDefault().
     */
    public function getPlanName(): string { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return list<int>
     * @throws SdkError When quantity_options is omitted; use hasQuantityOptions() or valueOrDefault().
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** @return CheckoutSubscriptionRecurringShippingInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_shipping is omitted; use hasRecurringShipping() or valueOrDefault().
     */
    public function getRecurringShipping(): mixed { return $this->get('recurring_shipping'); }
    public function hasRecurringShipping(): bool { return $this->has('recurring_shipping'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_total_money is omitted; use hasRecurringTotalMoney() or valueOrDefault().
     */
    public function getRecurringTotalMoney(): mixed { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_fee_money is omitted; use hasSetupFeeMoney() or valueOrDefault().
     */
    public function getSetupFeeMoney(): mixed { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** @return int
     * @throws SdkError When trial_period_days is omitted; use hasTrialPeriodDays() or valueOrDefault().
     */
    public function getTrialPeriodDays(): int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
}
