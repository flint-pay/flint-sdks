<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PartnerAppPlatformCapabilityPreviousAttributes>|null $capabilities
 * @property-read PartnerAppPlatformCurrentTermsPreviousAttributes|null $current_terms
 * @property-read PartnerAppPlatformLimitsPreviousAttributes|null $limits
 * @property-read list<string>|null $requirements
 * @property-read PartnerAppPlatformReservePreviousAttributes|null $reserve
 * @property-read string|null $status
 * @property-read PartnerAppPlatformTermsAcceptancePreviousAttributes|null $terms_acceptance
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformPreviousAttributes extends Model {
    /** @param array{'capabilities'?: mixed, 'current_terms'?: mixed, 'limits'?: mixed, 'requirements'?: mixed, 'reserve'?: mixed, 'status'?: mixed, 'terms_acceptance'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformPreviousAttributes')); }
    /** One entry per platform capability, in the same order for every app. anyOf[1] (Value): Array of {@see PartnerAppPlatformCapabilityPreviousAttributes}. One entry per platform capability, in the same order for every app. anyOf[1][] (Value): {@see PartnerAppPlatformCapabilityPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PartnerAppPlatformCapabilityPreviousAttributes>|null
     */
    public function getCapabilities(): array|null { return $this->get('capabilities'); }
    public function hasCapabilities(): bool { return $this->has('capabilities'); }
    /** The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same. anyOf[1] (Value): {@see PartnerAppPlatformCurrentTermsPreviousAttributes}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformCurrentTermsPreviousAttributes|null
     */
    public function getCurrentTerms(): PartnerAppPlatformCurrentTermsPreviousAttributes|null { return $this->get('current_terms'); }
    public function hasCurrentTerms(): bool { return $this->has('current_terms'); }
    /** The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. anyOf[1] (Value): {@see PartnerAppPlatformLimitsPreviousAttributes}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformLimitsPreviousAttributes|null
     */
    public function getLimits(): PartnerAppPlatformLimitsPreviousAttributes|null { return $this->get('limits'); }
    public function hasLimits(): bool { return $this->has('limits'); }
    /** What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. [] enum: "owner_merchant_onboarding", "platform_profile", "platform_terms". anyOf[1] (Value): Array of string. What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. [] enum: "owner_merchant_onboarding", "platform_profile", "platform_terms". anyOf[1][] (Value): string.  Value enum: "owner_merchant_onboarding", "platform_profile", "platform_terms". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRequirements(): array|null { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. anyOf[1] (Value): {@see PartnerAppPlatformReservePreviousAttributes}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformReservePreviousAttributes|null
     */
    public function getReserve(): PartnerAppPlatformReservePreviousAttributes|null { return $this->get('reserve'); }
    public function hasReserve(): bool { return $this->has('reserve'); }
    /** Where the app is in platform onboarding. No value is final. Value enum: "not_started", "pending_review", "approved", "limited", "rejected". anyOf[1] (Value): string. Where the app is in platform onboarding. No value is final. Value enum: "not_started", "pending_review", "approved", "limited", "rejected". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. anyOf[1] (Value): {@see PartnerAppPlatformTermsAcceptancePreviousAttributes}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformTermsAcceptancePreviousAttributes|null
     */
    public function getTermsAcceptance(): PartnerAppPlatformTermsAcceptancePreviousAttributes|null { return $this->get('terms_acceptance'); }
    public function hasTermsAcceptance(): bool { return $this->has('terms_acceptance'); }
}
