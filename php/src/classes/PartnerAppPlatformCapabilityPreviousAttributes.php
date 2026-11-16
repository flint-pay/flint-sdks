<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $capability
 * @property-read string|null $inactive_reason
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformCapabilityPreviousAttributes extends Model {
    /** @param array{'capability'?: mixed, 'inactive_reason'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformCapabilityPreviousAttributes')); }
    /** The platform capability. Value enum: "platform_fees", "merchant_onboarding", "create_merchants", "payment_splits". anyOf[1] (Value): string. The platform capability. Value enum: "platform_fees", "merchant_onboarding", "create_merchants", "payment_splits". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCapability(): string|null { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Why the capability is inactive. Present only while status is inactive. Value enum: "requirements_due", "pending_review", "not_approved", "rejected", "paused". anyOf[1] (Value): string. Why the capability is inactive. Present only while status is inactive. Value enum: "requirements_due", "pending_review", "not_approved", "rejected", "paused". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInactiveReason(): string|null { return $this->get('inactive_reason'); }
    public function hasInactiveReason(): bool { return $this->has('inactive_reason'); }
    /** Whether the capability works in live mode. Value enum: "active", "inactive". anyOf[1] (Value): string. Whether the capability works in live mode. Value enum: "active", "inactive". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
