<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $blocked_since
 * @property-read list<ReadinessActionInput|array<array-key, mixed>|\stdClass> $next_actions
 * @property-read string $status
 * @property-read string $status_reason
 * @property-read string|\DateTimeInterface|null $upcoming_block_at
 * @property-read string|null $upcoming_block_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class ReadinessAxisInput extends Model {
    /** @param array{'blocked_since'?: string|\DateTimeInterface|null, 'next_actions': list<ReadinessActionInput|array<array-key, mixed>|\stdClass>, 'status': string, 'status_reason'?: string, 'upcoming_block_at'?: string|\DateTimeInterface|null, 'upcoming_block_reason'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessAxisInput')); }
    /** Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When blocked_since is omitted; use hasBlockedSince() or valueOrDefault().
     */
    public function getBlockedSince(): string|\DateTimeInterface|null { return $this->get('blocked_since'); }
    public function hasBlockedSince(): bool { return $this->has('blocked_since'); }
    /** Steps that move this area toward `ready`. Empty when there is nothing to do. [] (Value): {@see ReadinessActionInput}. A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields.
     * @return list<ReadinessActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Value enum: "ready", "pending", "blocked", "not_requested", "not_available".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Value enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other".
     * @return string
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When upcoming_block_at is omitted; use hasUpcomingBlockAt() or valueOrDefault().
     */
    public function getUpcomingBlockAt(): string|\DateTimeInterface|null { return $this->get('upcoming_block_at'); }
    public function hasUpcomingBlockAt(): bool { return $this->has('upcoming_block_at'); }
    /** The readiness reason expected when a scheduled block takes effect. Omitted when this area is already blocked or no block is expected. Value enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other", null.
     * @return string|null
     * @throws SdkError When upcoming_block_reason is omitted; use hasUpcomingBlockReason() or valueOrDefault().
     */
    public function getUpcomingBlockReason(): string|null { return $this->get('upcoming_block_reason'); }
    public function hasUpcomingBlockReason(): bool { return $this->has('upcoming_block_reason'); }
}
