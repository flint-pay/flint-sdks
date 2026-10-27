<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReadinessActionInput|array<array-key, mixed>|\stdClass> $next_actions
 * @property-read string $status
 * @property-read string $status_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class ReadinessAxisInput extends Model {
    /** @param array{'next_actions': list<ReadinessActionInput|array<array-key, mixed>|\stdClass>, 'status': string, 'status_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessAxisInput')); }
    /** Shape $ (Value): Array of {@see ReadinessActionInput}. Shape $[] (Value): {@see ReadinessActionInput}. A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields.
     * @return list<ReadinessActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Shape $ (Value): string.  Value enum: "ready", "pending", "blocked", "not_requested", "not_available".
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
