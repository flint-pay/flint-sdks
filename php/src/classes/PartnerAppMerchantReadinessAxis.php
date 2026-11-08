<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $status
 * @property-read ?string $status_reason
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppMerchantReadinessAxis extends Model {
    /** @param array{'status': string, 'status_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppMerchantReadinessAxis')); }
    /** Whether this area works now, with the same value as on the merchant's `readiness`. Value enum: "ready", "pending", "blocked", "not_requested", "not_available".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`. Value enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due", "pending_verification", "account_rejected", "disabled_by_platform_policy", "billing_suspended", "platform_review", "processing_not_enabled", "platform_funding_unavailable", "tax_category_required", "service_unavailable", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active", "other".
     * @return ?string
     */
    public function getStatusReason(): ?string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
