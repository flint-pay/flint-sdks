<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capability
 * @property-read ?string $inactive_reason
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformCapability extends Model {
    /** @param array{'capability': string, 'inactive_reason'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformCapability')); }
    /** The platform capability. Value enum: "platform_fees", "merchant_onboarding", "create_merchants", "payment_splits".
     * @return string
     */
    public function getCapability(): string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Why the capability is inactive. Present only while status is inactive. Value enum: "requirements_due", "pending_review", "not_approved", "rejected", "paused".
     * @return ?string
     */
    public function getInactiveReason(): ?string { return $this->get('inactive_reason'); }
    public function hasInactiveReason(): bool { return $this->has('inactive_reason'); }
    /** Whether the capability works in live mode. Value enum: "active", "inactive".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
