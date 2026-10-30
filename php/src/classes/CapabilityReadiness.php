<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capability
 * @property-read string $domain
 * @property-read list<ReadinessAction> $next_actions
 * @property-read ReadinessRequirements $requirements
 * @property-read string $status
 * @property-read ?string $status_reason
 * Presence-aware response; omitted optional fields return null. */
final class CapabilityReadiness extends Model {
    /** @param array{'capability': string, 'domain': string, 'next_actions': list<mixed>, 'requirements': mixed, 'status': string, 'status_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CapabilityReadiness')); }
    /** Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings".
     * @return string
     */
    public function getCapability(): string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Value enum: "money_movement", "payments".
     * @return string
     */
    public function getDomain(): string { return $this->get('domain'); }
    public function hasDomain(): bool { return $this->has('domain'); }
    /** Actions that can remediate or refresh this capability when Flint can suggest one. [] (Value): {@see ReadinessAction}. A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields.
     * @return list<ReadinessAction>
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Merchant requirements that affect this capability. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.
     * @return ReadinessRequirements
     */
    public function getRequirements(): ReadinessRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** Current readiness status for this capability. Value enum: "ready", "pending", "blocked", "not_requested", "not_available".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Value enum: "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other".
     * @return ?string
     */
    public function getStatusReason(): ?string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
