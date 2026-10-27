<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capability
 * @property-read string $domain
 * @property-read list<ReadinessActionInput|array<array-key, mixed>|\stdClass> $next_actions
 * @property-read ReadinessRequirementsInput|array<array-key, mixed>|\stdClass $requirements
 * @property-read string $status
 * @property-read string $status_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class CapabilityReadinessInput extends Model {
    /** @param array{'capability': string, 'domain': string, 'next_actions': list<ReadinessActionInput|array<array-key, mixed>|\stdClass>, 'requirements': ReadinessRequirementsInput|array<array-key, mixed>|\stdClass, 'status': string, 'status_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CapabilityReadinessInput')); }
    /** Shape $ (Value): string. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings".
     * @return string
     * @throws SdkError When capability is omitted; use hasCapability() or valueOrDefault().
     */
    public function getCapability(): string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Shape $ (Value): string. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Value enum: "money_movement", "payments".
     * @return string
     * @throws SdkError When domain is omitted; use hasDomain() or valueOrDefault().
     */
    public function getDomain(): string { return $this->get('domain'); }
    public function hasDomain(): bool { return $this->has('domain'); }
    /** Shape $ (Value): Array of {@see ReadinessActionInput}. Actions that can remediate or refresh this capability when Flint can suggest one. Shape $[] (Value): {@see ReadinessActionInput}. A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields.
     * @return list<ReadinessActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Shape $ (Value): {@see ReadinessRequirementsInput}. Merchant requirements that affect this capability. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.
     * @return ReadinessRequirementsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): mixed { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** Shape $ (Value): string. Current readiness status for this capability. Value enum: "ready", "pending", "blocked", "not_requested", "not_available".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.  Value enum: "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other".
     * @return string
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
