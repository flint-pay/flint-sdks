<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PartnerAppPlatformCapability> $capabilities
 * @property-read ?PartnerAppPlatformLimits $limits
 * @property-read list<string> $requirements
 * @property-read ?PartnerAppPlatformReserve $reserve
 * @property-read string $status
 * @property-read PartnerAppPlatformTermsAcceptance|null $terms_acceptance
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatform extends Model {
    /** @param array{'capabilities': list<mixed>, 'limits'?: mixed, 'requirements': list<string>, 'reserve'?: mixed, 'status': string, 'terms_acceptance': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatform')); }
    /** One entry per platform capability, in the same order for every app. [] (Value): {@see PartnerAppPlatformCapability}. One platform capability and whether the app can use it in live mode.
     * @return list<PartnerAppPlatformCapability>
     */
    public function getCapabilities(): array { return $this->get('capabilities'); }
    public function hasCapabilities(): bool { return $this->has('capabilities'); }
    /** The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. Soft limits on the platform's live use, and its usage against them.
     * @return ?PartnerAppPlatformLimits
     */
    public function getLimits(): ?PartnerAppPlatformLimits { return $this->get('limits'); }
    public function hasLimits(): bool { return $this->has('limits'); }
    /** What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. [] enum: "owner_merchant_onboarding", "platform_profile", "platform_terms". [] (Value): string.  Value enum: "owner_merchant_onboarding", "platform_profile", "platform_terms".
     * @return list<string>
     */
    public function getRequirements(): array { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. The platform's reserve terms.
     * @return ?PartnerAppPlatformReserve
     */
    public function getReserve(): ?PartnerAppPlatformReserve { return $this->get('reserve'); }
    public function hasReserve(): bool { return $this->has('reserve'); }
    /** Where the app is in platform onboarding. No value is final. Value enum: "not_started", "pending_review", "approved", "limited", "rejected".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. anyOf[1] (Value): {@see PartnerAppPlatformTermsAcceptance}. Who accepted a version of Flint's platform terms, and when. anyOf[2] (Value): null.
     * @return PartnerAppPlatformTermsAcceptance|null
     */
    public function getTermsAcceptance(): PartnerAppPlatformTermsAcceptance|null { return $this->get('terms_acceptance'); }
    public function hasTermsAcceptance(): bool { return $this->has('terms_acceptance'); }
}
