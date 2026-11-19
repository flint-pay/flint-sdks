<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $billing_anchor_day
 * @property-read bool|null $cancel_at_period_end
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|\DateTimeInterface|null $current_period_end_at
 * @property-read string|\DateTimeInterface|null $current_period_start_at
 * @property-read string|null $customer_id
 * @property-read string|\DateTimeInterface|null $next_billing_at
 * @property-read string|null $status
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_plan_id
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $terms_type
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedSubscriptionSummaryPreviousAttributesInput extends Model {
    /** @param array{'billing_anchor_day'?: int|null, 'cancel_at_period_end'?: bool|null, 'created_at'?: string|\DateTimeInterface|null, 'current_period_end_at'?: string|\DateTimeInterface|null, 'current_period_start_at'?: string|\DateTimeInterface|null, 'customer_id'?: string|null, 'next_billing_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'subscription_id'?: string|null, 'subscription_plan_id'?: string|null, 'supported_actions'?: list<string>|null, 'terms_type'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionSummaryPreviousAttributesInput')); }
    /** Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. anyOf[1] (Value): integer. Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): mixed { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** True when the subscription is scheduled to cancel instead of renewing. anyOf[1] (Value): boolean. True when the subscription is scheduled to cancel instead of renewing. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): mixed { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When current_period_end_at is omitted; use hasCurrentPeriodEndAt() or valueOrDefault().
     */
    public function getCurrentPeriodEndAt(): mixed { return $this->get('current_period_end_at'); }
    public function hasCurrentPeriodEndAt(): bool { return $this->has('current_period_end_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When current_period_start_at is omitted; use hasCurrentPeriodStartAt() or valueOrDefault().
     */
    public function getCurrentPeriodStartAt(): mixed { return $this->get('current_period_start_at'); }
    public function hasCurrentPeriodStartAt(): bool { return $this->has('current_period_start_at'); }
    /** The customer this subscription bills. anyOf[1] (Value): string. The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. anyOf[1] (Value): string. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When next_billing_at is omitted; use hasNextBillingAt() or valueOrDefault().
     */
    public function getNextBillingAt(): mixed { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** Where the subscription is in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[1] (Value): string. Where the subscription is in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for this subscription, prefixed `sub_`. anyOf[1] (Value): string. Unique identifier for this subscription, prefixed `sub_`. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): mixed { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. anyOf[1] (Value): string. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): mixed { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[1] (Value): Array of string. Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[1][] (Value): string.  Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Value enum: "subscription_plan", "subscription_offer". anyOf[1] (Value): string. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Value enum: "subscription_plan", "subscription_offer". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When terms_type is omitted; use hasTermsType() or valueOrDefault().
     */
    public function getTermsType(): mixed { return $this->get('terms_type'); }
    public function hasTermsType(): bool { return $this->has('terms_type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
