<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $capability
 * @property-read string|null $inactive_reason
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformCapabilityPreviousAttributesInput extends Model {
    /** @param array{'capability'?: string|null, 'inactive_reason'?: string|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformCapabilityPreviousAttributesInput')); }
    /** The platform capability. Value enum: "platform_fees", "merchant_onboarding", "create_merchants", "payment_splits". anyOf[1] (Value): string. The platform capability. Value enum: "platform_fees", "merchant_onboarding", "create_merchants", "payment_splits". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When capability is omitted; use hasCapability() or valueOrDefault().
     */
    public function getCapability(): mixed { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Why the capability is inactive. Present only while status is inactive. Value enum: "requirements_due", "pending_review", "not_approved", "rejected", "paused". anyOf[1] (Value): string. Why the capability is inactive. Present only while status is inactive. Value enum: "requirements_due", "pending_review", "not_approved", "rejected", "paused". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inactive_reason is omitted; use hasInactiveReason() or valueOrDefault().
     */
    public function getInactiveReason(): mixed { return $this->get('inactive_reason'); }
    public function hasInactiveReason(): bool { return $this->has('inactive_reason'); }
    /** Whether the capability works in live mode. Value enum: "active", "inactive". anyOf[1] (Value): string. Whether the capability works in live mode. Value enum: "active", "inactive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
