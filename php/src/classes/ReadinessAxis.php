<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReadinessAction> $next_actions
 * @property-read string $status
 * @property-read ?string $status_reason
 * Presence-aware response; omitted optional fields return null. */
final class ReadinessAxis extends Model {
    /** @param array{'next_actions': list<mixed>, 'status': string, 'status_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessAxis')); }
    /** Steps that move this area toward `ready`. Empty when there is nothing to do. [] (Value): {@see ReadinessAction}. A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields.
     * @return list<ReadinessAction>
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Value enum: "ready", "pending", "blocked", "not_requested", "not_available".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Value enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other".
     * @return ?string
     */
    public function getStatusReason(): ?string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
