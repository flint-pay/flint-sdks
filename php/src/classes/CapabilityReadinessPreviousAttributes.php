<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $capability
 * @property-read string|null $domain
 * @property-read list<ReadinessActionPreviousAttributes>|null $next_actions
 * @property-read ReadinessRequirementsPreviousAttributes|null $requirements
 * @property-read string|null $status
 * @property-read string|null $status_reason
 * Presence-aware response; omitted optional fields return null. */
final class CapabilityReadinessPreviousAttributes extends Model {
    /** @param array{'capability'?: mixed, 'domain'?: mixed, 'next_actions'?: mixed, 'requirements'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CapabilityReadinessPreviousAttributes')); }
    /** Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings". anyOf[1] (Value): string. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCapability(): string|null { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Value enum: "money_movement", "payments". anyOf[1] (Value): string. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Value enum: "money_movement", "payments". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDomain(): string|null { return $this->get('domain'); }
    public function hasDomain(): bool { return $this->has('domain'); }
    /** Actions that can remediate or refresh this capability when Flint can suggest one. anyOf[1] (Value): Array of {@see ReadinessActionPreviousAttributes}. Actions that can remediate or refresh this capability when Flint can suggest one. anyOf[1][] (Value): {@see ReadinessActionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReadinessActionPreviousAttributes>|null
     */
    public function getNextActions(): array|null { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Merchant requirements that affect this capability. anyOf[1] (Value): {@see ReadinessRequirementsPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReadinessRequirementsPreviousAttributes|null
     */
    public function getRequirements(): ReadinessRequirementsPreviousAttributes|null { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** Current readiness status for this capability. Value enum: "ready", "pending", "blocked", "not_requested", "not_available". anyOf[1] (Value): string. Current readiness status for this capability. Value enum: "ready", "pending", "blocked", "not_requested", "not_available". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Value enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other". anyOf[1] (Value): string. Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Value enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
