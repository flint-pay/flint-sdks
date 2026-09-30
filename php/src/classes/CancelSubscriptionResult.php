<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $awaiting_billing_schedule
 * @property-read int $billing_anchor_day
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read string $billing_schedule_owner
 * @property-read string $billing_schedule_waiting_started_at
 * @property-read bool $cancel_at_period_end
 * @property-read string $canceled_at
 * @property-read string $contract_end_at
 * @property-read ContractInfo $contract_info
 * @property-read string $contract_start_at
 * @property-read string $created_at
 * @property-read string $current_period_end
 * @property-read string $current_period_start
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string $customer_id
 * @property-read string $external_reference_id
 * @property-read list<SubscriptionLineItem> $line_items
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $next_billing_at
 * @property-read string|null $next_retry_at
 * @property-read string $paused_at
 * @property-read ExpandedPaymentMethodSummary|null $payment_method
 * @property-read string $payment_method_id
 * @property-read string $plan_id
 * @property-read MoneyValue $recurring_amount_money
 * @property-read SubscriptionServiceLocation $service_location
 * @property-read string $starts_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read ExpandedSubscriptionPlanSummary|null $subscription_plan
 * @property-read string $trial_end
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class CancelSubscriptionResult extends Model {
    /** @param array{'awaiting_billing_schedule'?: bool, 'billing_anchor_day'?: int, 'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_schedule_owner'?: string, 'billing_schedule_waiting_started_at'?: string, 'cancel_at_period_end': bool, 'canceled_at'?: string, 'contract_end_at'?: string, 'contract_info'?: mixed, 'contract_start_at'?: string, 'created_at'?: string, 'current_period_end'?: string, 'current_period_start'?: string, 'customer'?: mixed, 'customer_id': string, 'external_reference_id'?: string, 'line_items'?: list<mixed>, 'merchant_id'?: string, 'metadata'?: \stdClass, 'next_billing_at'?: string, 'next_retry_at'?: string|null, 'paused_at'?: string, 'payment_method'?: mixed, 'payment_method_id': string, 'plan_id': string, 'recurring_amount_money'?: object{'amount': string, 'currency': string}, 'service_location'?: mixed, 'starts_at'?: string, 'status': string, 'subscription_id': string, 'subscription_plan'?: mixed, 'trial_end'?: string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelSubscriptionResult')); }
    /** @return bool
     * @throws SdkError When awaiting_billing_schedule is omitted; use hasAwaitingBillingSchedule() or valueOrDefault().
     */
    public function getAwaitingBillingSchedule(): bool { return $this->get('awaiting_billing_schedule'); }
    public function hasAwaitingBillingSchedule(): bool { return $this->has('awaiting_billing_schedule'); }
    /** @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
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
    /** @return string
     * @throws SdkError When billing_schedule_owner is omitted; use hasBillingScheduleOwner() or valueOrDefault().
     */
    public function getBillingScheduleOwner(): string { return $this->get('billing_schedule_owner'); }
    public function hasBillingScheduleOwner(): bool { return $this->has('billing_schedule_owner'); }
    /** @return string
     * @throws SdkError When billing_schedule_waiting_started_at is omitted; use hasBillingScheduleWaitingStartedAt() or valueOrDefault().
     */
    public function getBillingScheduleWaitingStartedAt(): string { return $this->get('billing_schedule_waiting_started_at'); }
    public function hasBillingScheduleWaitingStartedAt(): bool { return $this->has('billing_schedule_waiting_started_at'); }
    /** @return bool
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** @return string
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** @return string
     * @throws SdkError When contract_end_at is omitted; use hasContractEndAt() or valueOrDefault().
     */
    public function getContractEndAt(): string { return $this->get('contract_end_at'); }
    public function hasContractEndAt(): bool { return $this->has('contract_end_at'); }
    /** @return ContractInfo
     * @throws SdkError When contract_info is omitted; use hasContractInfo() or valueOrDefault().
     */
    public function getContractInfo(): ContractInfo { return $this->get('contract_info'); }
    public function hasContractInfo(): bool { return $this->has('contract_info'); }
    /** @return string
     * @throws SdkError When contract_start_at is omitted; use hasContractStartAt() or valueOrDefault().
     */
    public function getContractStartAt(): string { return $this->get('contract_start_at'); }
    public function hasContractStartAt(): bool { return $this->has('contract_start_at'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When current_period_end is omitted; use hasCurrentPeriodEnd() or valueOrDefault().
     */
    public function getCurrentPeriodEnd(): string { return $this->get('current_period_end'); }
    public function hasCurrentPeriodEnd(): bool { return $this->has('current_period_end'); }
    /** @return string
     * @throws SdkError When current_period_start is omitted; use hasCurrentPeriodStart() or valueOrDefault().
     */
    public function getCurrentPeriodStart(): string { return $this->get('current_period_start'); }
    public function hasCurrentPeriodStart(): bool { return $this->has('current_period_start'); }
    /** @return ExpandedCustomerSummary|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return list<SubscriptionLineItem>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When next_billing_at is omitted; use hasNextBillingAt() or valueOrDefault().
     */
    public function getNextBillingAt(): string { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** @return string|null
     * @throws SdkError When next_retry_at is omitted; use hasNextRetryAt() or valueOrDefault().
     */
    public function getNextRetryAt(): string|null { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
    /** @return string
     * @throws SdkError When paused_at is omitted; use hasPausedAt() or valueOrDefault().
     */
    public function getPausedAt(): string { return $this->get('paused_at'); }
    public function hasPausedAt(): bool { return $this->has('paused_at'); }
    /** @return ExpandedPaymentMethodSummary|null
     * @throws SdkError When payment_method is omitted; use hasPaymentMethod() or valueOrDefault().
     */
    public function getPaymentMethod(): ExpandedPaymentMethodSummary|null { return $this->get('payment_method'); }
    public function hasPaymentMethod(): bool { return $this->has('payment_method'); }
    /** @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** @return string
     * @throws SdkError When plan_id is omitted; use hasPlanId() or valueOrDefault().
     */
    public function getPlanId(): string { return $this->get('plan_id'); }
    public function hasPlanId(): bool { return $this->has('plan_id'); }
    /** @return MoneyValue
     * @throws SdkError When recurring_amount_money is omitted; use hasRecurringAmountMoney() or valueOrDefault().
     */
    public function getRecurringAmountMoney(): MoneyValue { return $this->get('recurring_amount_money'); }
    public function hasRecurringAmountMoney(): bool { return $this->has('recurring_amount_money'); }
    /** @return SubscriptionServiceLocation
     * @throws SdkError When service_location is omitted; use hasServiceLocation() or valueOrDefault().
     */
    public function getServiceLocation(): SubscriptionServiceLocation { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
    /** @return string
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** @return ExpandedSubscriptionPlanSummary|null
     * @throws SdkError When subscription_plan is omitted; use hasSubscriptionPlan() or valueOrDefault().
     */
    public function getSubscriptionPlan(): ExpandedSubscriptionPlanSummary|null { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** @return string
     * @throws SdkError When trial_end is omitted; use hasTrialEnd() or valueOrDefault().
     */
    public function getTrialEnd(): string { return $this->get('trial_end'); }
    public function hasTrialEnd(): bool { return $this->has('trial_end'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
