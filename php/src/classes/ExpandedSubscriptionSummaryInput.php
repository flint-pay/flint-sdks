<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read bool $cancel_at_period_end
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $current_period_end_at
 * @property-read string|\DateTimeInterface $current_period_start_at
 * @property-read string $customer_id
 * @property-read string|\DateTimeInterface $next_billing_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read string $subscription_plan_id
 * @property-read list<string> $supported_actions
 * @property-read string $terms_type
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedSubscriptionSummaryInput extends Model {
    /** @param array{'billing_anchor_day': int, 'cancel_at_period_end': bool, 'created_at'?: string|\DateTimeInterface, 'current_period_end_at'?: string|\DateTimeInterface, 'current_period_start_at'?: string|\DateTimeInterface, 'customer_id': string, 'next_billing_at'?: string|\DateTimeInterface, 'status': string, 'subscription_id': string, 'subscription_plan_id': string, 'supported_actions'?: list<string>, 'terms_type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionSummaryInput')); }
    /** Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. Format: int32.
     * @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** True when the subscription is scheduled to cancel instead of renewing.
     * @return bool
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When current_period_end_at is omitted; use hasCurrentPeriodEndAt() or valueOrDefault().
     */
    public function getCurrentPeriodEndAt(): string|\DateTimeInterface { return $this->get('current_period_end_at'); }
    public function hasCurrentPeriodEndAt(): bool { return $this->has('current_period_end_at'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When current_period_start_at is omitted; use hasCurrentPeriodStartAt() or valueOrDefault().
     */
    public function getCurrentPeriodStartAt(): string|\DateTimeInterface { return $this->get('current_period_start_at'); }
    public function hasCurrentPeriodStartAt(): bool { return $this->has('current_period_start_at'); }
    /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When next_billing_at is omitted; use hasNextBillingAt() or valueOrDefault().
     */
    public function getNextBillingAt(): string|\DateTimeInterface { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** Where the subscription is in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for this subscription, prefixed `sub_`. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity". [] (Value): string.  Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * @return string
     * @throws SdkError When terms_type is omitted; use hasTermsType() or valueOrDefault().
     */
    public function getTermsType(): string { return $this->get('terms_type'); }
    public function hasTermsType(): bool { return $this->has('terms_type'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
