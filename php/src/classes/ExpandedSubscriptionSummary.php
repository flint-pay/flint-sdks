<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read bool $cancel_at_period_end
 * @property-read string $created_at
 * @property-read string $current_period_end
 * @property-read string $current_period_start
 * @property-read string $customer_id
 * @property-read string $next_billing_at
 * @property-read string $plan_id
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class ExpandedSubscriptionSummary extends Model {
    /** @param array{'billing_anchor_day': int, 'cancel_at_period_end': bool, 'created_at'?: string, 'current_period_end'?: string, 'current_period_start'?: string, 'customer_id': string, 'next_billing_at'?: string, 'plan_id': string, 'status': string, 'subscription_id': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionSummary')); }
    /** @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** @return bool
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
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
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When next_billing_at is omitted; use hasNextBillingAt() or valueOrDefault().
     */
    public function getNextBillingAt(): string { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** @return string
     * @throws SdkError When plan_id is omitted; use hasPlanId() or valueOrDefault().
     */
    public function getPlanId(): string { return $this->get('plan_id'); }
    public function hasPlanId(): bool { return $this->has('plan_id'); }
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
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
