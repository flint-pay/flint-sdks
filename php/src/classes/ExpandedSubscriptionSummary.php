<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read bool $cancel_at_period_end
 * @property-read ?string $created_at
 * @property-read ?string $current_period_end_at
 * @property-read ?string $current_period_start_at
 * @property-read string $customer_id
 * @property-read ?string $next_billing_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read string $subscription_plan_id
 * @property-read string $terms_type
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionSummary extends Model {
    /** @param array{'billing_anchor_day': int, 'cancel_at_period_end': bool, 'created_at'?: string, 'current_period_end_at'?: string, 'current_period_start_at'?: string, 'customer_id': string, 'next_billing_at'?: string, 'status': string, 'subscription_id': string, 'subscription_plan_id': string, 'terms_type': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionSummary')); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCurrentPeriodEndAt(): ?string { return $this->get('current_period_end_at'); }
    public function hasCurrentPeriodEndAt(): bool { return $this->has('current_period_end_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCurrentPeriodStartAt(): ?string { return $this->get('current_period_start_at'); }
    public function hasCurrentPeriodStartAt(): bool { return $this->has('current_period_start_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports awaiting_billing_schedule. Format: date-time.
     * @return ?string
     */
    public function getNextBillingAt(): ?string { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** Shape $ (Value): string.  Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): string.  Value enum: "subscription_plan", "subscription_offer".
     * @return string
     */
    public function getTermsType(): string { return $this->get('terms_type'); }
    public function hasTermsType(): bool { return $this->has('terms_type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
