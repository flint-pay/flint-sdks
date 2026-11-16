<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PartnerAppPlatformCapabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $capabilities
 * @property-read PartnerAppPlatformCurrentTermsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $current_terms
 * @property-read PartnerAppPlatformLimitsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $limits
 * @property-read list<string>|null $requirements
 * @property-read PartnerAppPlatformReservePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $reserve
 * @property-read string|null $status
 * @property-read PartnerAppPlatformTermsAcceptancePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $terms_acceptance
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformPreviousAttributesInput extends Model {
    /** @param array{'capabilities'?: list<PartnerAppPlatformCapabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'current_terms'?: PartnerAppPlatformCurrentTermsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'limits'?: PartnerAppPlatformLimitsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'requirements'?: list<string>|null, 'reserve'?: PartnerAppPlatformReservePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'terms_acceptance'?: PartnerAppPlatformTermsAcceptancePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformPreviousAttributesInput')); }
    /** One entry per platform capability, in the same order for every app. anyOf[1] (Value): Array of {@see PartnerAppPlatformCapabilityPreviousAttributesInput}. One entry per platform capability, in the same order for every app. anyOf[1][] (Value): {@see PartnerAppPlatformCapabilityPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<PartnerAppPlatformCapabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When capabilities is omitted; use hasCapabilities() or valueOrDefault().
     */
    public function getCapabilities(): mixed { return $this->get('capabilities'); }
    public function hasCapabilities(): bool { return $this->has('capabilities'); }
    /** The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same. anyOf[1] (Value): {@see PartnerAppPlatformCurrentTermsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformCurrentTermsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When current_terms is omitted; use hasCurrentTerms() or valueOrDefault().
     */
    public function getCurrentTerms(): mixed { return $this->get('current_terms'); }
    public function hasCurrentTerms(): bool { return $this->has('current_terms'); }
    /** The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. anyOf[1] (Value): {@see PartnerAppPlatformLimitsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformLimitsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When limits is omitted; use hasLimits() or valueOrDefault().
     */
    public function getLimits(): mixed { return $this->get('limits'); }
    public function hasLimits(): bool { return $this->has('limits'); }
    /** What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. [] enum: "owner_merchant_onboarding", "platform_profile", "platform_terms". anyOf[1] (Value): Array of string. What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. [] enum: "owner_merchant_onboarding", "platform_profile", "platform_terms". anyOf[1][] (Value): string.  Value enum: "owner_merchant_onboarding", "platform_profile", "platform_terms". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): mixed { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. anyOf[1] (Value): {@see PartnerAppPlatformReservePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformReservePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When reserve is omitted; use hasReserve() or valueOrDefault().
     */
    public function getReserve(): mixed { return $this->get('reserve'); }
    public function hasReserve(): bool { return $this->has('reserve'); }
    /** Where the app is in platform onboarding. No value is final. Value enum: "not_started", "pending_review", "approved", "limited", "rejected". anyOf[1] (Value): string. Where the app is in platform onboarding. No value is final. Value enum: "not_started", "pending_review", "approved", "limited", "rejected". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. anyOf[1] (Value): {@see PartnerAppPlatformTermsAcceptancePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformTermsAcceptancePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When terms_acceptance is omitted; use hasTermsAcceptance() or valueOrDefault().
     */
    public function getTermsAcceptance(): mixed { return $this->get('terms_acceptance'); }
    public function hasTermsAcceptance(): bool { return $this->has('terms_acceptance'); }
}
