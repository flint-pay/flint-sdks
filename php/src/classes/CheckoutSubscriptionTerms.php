<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read int $contract_term_months
 * @property-read MoneyValue $early_termination_fee_money
 * @property-read string $plan_name
 * @property-read MoneyValue $recurring_total_money
 * @property-read MoneyValue $setup_fee_money
 * @property-read string $subscription_plan_id
 * @property-read int $trial_period_days
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutSubscriptionTerms extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'early_termination_fee_money'?: object{'amount': string, 'currency': string}, 'plan_name': string, 'recurring_total_money': object{'amount': string, 'currency': string}, 'setup_fee_money'?: object{'amount': string, 'currency': string}, 'subscription_plan_id': string, 'trial_period_days'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTerms')); }
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
    /** @return int
     * @throws SdkError When contract_term_months is omitted; use hasContractTermMonths() or valueOrDefault().
     */
    public function getContractTermMonths(): int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** @return MoneyValue
     * @throws SdkError When early_termination_fee_money is omitted; use hasEarlyTerminationFeeMoney() or valueOrDefault().
     */
    public function getEarlyTerminationFeeMoney(): MoneyValue { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** @return string
     * @throws SdkError When plan_name is omitted; use hasPlanName() or valueOrDefault().
     */
    public function getPlanName(): string { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** @return MoneyValue
     * @throws SdkError When recurring_total_money is omitted; use hasRecurringTotalMoney() or valueOrDefault().
     */
    public function getRecurringTotalMoney(): MoneyValue { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** @return MoneyValue
     * @throws SdkError When setup_fee_money is omitted; use hasSetupFeeMoney() or valueOrDefault().
     */
    public function getSetupFeeMoney(): MoneyValue { return $this->get('setup_fee_money'); }
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
