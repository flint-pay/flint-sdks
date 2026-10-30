<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $status
 * @property-read list<string>|string $billing_schedule_owner
 * @property-read bool $cancel_at_period_end
 * @property-read string $delivery_method_id
 * @property-read list<string>|string $hold_reason
 * @property-read string $subscription_plan_id
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read string|\DateTimeInterface $next_billing_after
 * @property-read string|\DateTimeInterface $next_billing_before
 * @property-read bool $needs_attention
 * Presence-aware input; omitted fields throw when accessed. */
final class MeListSubscriptionsParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>|string, 'billing_schedule_owner'?: list<string>|string, 'cancel_at_period_end'?: bool, 'delivery_method_id'?: string, 'hold_reason'?: list<string>|string, 'subscription_plan_id'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'next_billing_after'?: string|\DateTimeInterface, 'next_billing_before'?: string|\DateTimeInterface, 'needs_attention'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeListSubscriptionsParams')); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Filter by subscription status. Repeat the parameter or pass comma-separated values to match multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[1][] (Value): string.  Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[2] (Value): string.  Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Separate subscriptions scheduled by Flint (flint) from those whose billing dates the store supplies (external). Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "flint", "external". Value enum: "flint", "external". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "flint", "external". anyOf[1][] (Value): string.  Value enum: "flint", "external". anyOf[2] (Value): string.  Value enum: "flint", "external".
     * @return list<string>|string
     * @throws SdkError When billing_schedule_owner is omitted; use hasBillingScheduleOwner() or valueOrDefault().
     */
    public function getBillingScheduleOwner(): mixed { return $this->get('billing_schedule_owner'); }
    public function hasBillingScheduleOwner(): bool { return $this->has('billing_schedule_owner'); }
    /** When true, returns subscriptions scheduled to cancel at the end of the current period that are not yet canceled. When false, returns every other subscription.
     * @return bool
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** Filter by the subscription's selected delivery method. Example: "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Find subscriptions needing a new delivery method, address, or rate by the current delivery_hold reason. Does not match upcoming delivery issues. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "method_unavailable", "destination_not_served", "rate_unavailable". Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[1][] (Value): string.  Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[2] (Value): string.  Value enum: "method_unavailable", "destination_not_served", "rate_unavailable".
     * @return list<string>|string
     * @throws SdkError When hold_reason is omitted; use hasHoldReason() or valueOrDefault().
     */
    public function getHoldReason(): mixed { return $this->get('hold_reason'); }
    public function hasHoldReason(): bool { return $this->has('hold_reason'); }
    /** Filter by Flint subscription plan ID. Example: "plan_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Field to sort by. Defaults to created_at; ties are broken by subscription_id. Default: "created_at". Value enum: "created_at", "updated_at", "next_billing_at".
     * @return string
     * @throws SdkError When sort_by is omitted; use hasSortBy() or valueOrDefault().
     */
    public function getSortBy(): string { return $this->get('sort_by'); }
    public function hasSortBy(): bool { return $this->has('sort_by'); }
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
    /** Inclusive lower bound on next_billing_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When next_billing_after is omitted; use hasNextBillingAfter() or valueOrDefault().
     */
    public function getNextBillingAfter(): string|\DateTimeInterface { return $this->get('next_billing_after'); }
    public function hasNextBillingAfter(): bool { return $this->has('next_billing_after'); }
    /** Exclusive upper bound on next_billing_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When next_billing_before is omitted; use hasNextBillingBefore() or valueOrDefault().
     */
    public function getNextBillingBefore(): string|\DateTimeInterface { return $this->get('next_billing_before'); }
    public function hasNextBillingBefore(): bool { return $this->has('next_billing_before'); }
    /** Load subscriptions needing your attention. True matches subscriptions with a delivery hold, an upcoming delivery hold, or a delivery-action-required pause, plus past_due subscriptions and active or incomplete subscriptions whose billing date passed more than 24 hours ago without payment. False is the exact complement. Other filters still apply.
     * @return bool
     * @throws SdkError When needs_attention is omitted; use hasNeedsAttention() or valueOrDefault().
     */
    public function getNeedsAttention(): bool { return $this->get('needs_attention'); }
    public function hasNeedsAttention(): bool { return $this->has('needs_attention'); }
}
