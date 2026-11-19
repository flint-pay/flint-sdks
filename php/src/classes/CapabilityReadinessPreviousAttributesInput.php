<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $blocked_since
 * @property-read string|null $capability
 * @property-read string|null $domain
 * @property-read list<ReadinessActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $next_actions
 * @property-read ReadinessRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $requirements
 * @property-read string|null $status
 * @property-read string|null $status_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class CapabilityReadinessPreviousAttributesInput extends Model {
    /** @param array{'blocked_since'?: string|\DateTimeInterface|null, 'capability'?: string|null, 'domain'?: string|null, 'next_actions'?: list<ReadinessActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'requirements'?: ReadinessRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'status_reason'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CapabilityReadinessPreviousAttributesInput')); }
    /** Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. anyOf[1] (Value): string. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When blocked_since is omitted; use hasBlockedSince() or valueOrDefault().
     */
    public function getBlockedSince(): mixed { return $this->get('blocked_since'); }
    public function hasBlockedSince(): bool { return $this->has('blocked_since'); }
    /** Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings". anyOf[1] (Value): string. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When capability is omitted; use hasCapability() or valueOrDefault().
     */
    public function getCapability(): mixed { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Value enum: "money_movement", "payments". anyOf[1] (Value): string. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Value enum: "money_movement", "payments". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When domain is omitted; use hasDomain() or valueOrDefault().
     */
    public function getDomain(): mixed { return $this->get('domain'); }
    public function hasDomain(): bool { return $this->has('domain'); }
    /** Actions that can remediate or refresh this capability when Flint can suggest one. anyOf[1] (Value): Array of {@see ReadinessActionPreviousAttributesInput}. Actions that can remediate or refresh this capability when Flint can suggest one. anyOf[1][] (Value): {@see ReadinessActionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReadinessActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): mixed { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Merchant requirements that affect this capability. anyOf[1] (Value): {@see ReadinessRequirementsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReadinessRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): mixed { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** Current readiness status for this capability. Value enum: "ready", "pending", "blocked", "not_requested", "not_available". anyOf[1] (Value): string. Current readiness status for this capability. Value enum: "ready", "pending", "blocked", "not_requested", "not_available". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Value enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other". anyOf[1] (Value): string. Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Value enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): mixed { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
