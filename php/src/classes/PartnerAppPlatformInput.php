<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PartnerAppPlatformCapabilityInput|array<array-key, mixed>|\stdClass> $capabilities
 * @property-read PartnerAppPlatformLimitsInput|array<array-key, mixed>|\stdClass $limits
 * @property-read list<string> $requirements
 * @property-read PartnerAppPlatformReserveInput|array<array-key, mixed>|\stdClass $reserve
 * @property-read string $status
 * @property-read array{'accepted_at': string|\DateTimeInterface, 'accepted_by': ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'platform_terms_version': string, ...}|object|null $terms_acceptance
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformInput extends Model {
    /** @param array{'capabilities': list<PartnerAppPlatformCapabilityInput|array<array-key, mixed>|\stdClass>, 'limits'?: PartnerAppPlatformLimitsInput|array<array-key, mixed>|\stdClass, 'requirements': list<string>, 'reserve'?: PartnerAppPlatformReserveInput|array<array-key, mixed>|\stdClass, 'status': string, 'terms_acceptance': array{'accepted_at': string|\DateTimeInterface, 'accepted_by': ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'platform_terms_version': string, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformInput')); }
    /** One entry per platform capability, in the same order for every app. [] (Value): {@see PartnerAppPlatformCapabilityInput}. One platform capability and whether the app can use it in live mode.
     * @return list<PartnerAppPlatformCapabilityInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When capabilities is omitted; use hasCapabilities() or valueOrDefault().
     */
    public function getCapabilities(): array { return $this->get('capabilities'); }
    public function hasCapabilities(): bool { return $this->has('capabilities'); }
    /** The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. Soft limits on the platform's live use, and its usage against them.
     * @return PartnerAppPlatformLimitsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When limits is omitted; use hasLimits() or valueOrDefault().
     */
    public function getLimits(): mixed { return $this->get('limits'); }
    public function hasLimits(): bool { return $this->has('limits'); }
    /** What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. [] enum: "owner_merchant_onboarding", "platform_profile", "platform_terms". [] (Value): string.  Value enum: "owner_merchant_onboarding", "platform_profile", "platform_terms".
     * @return list<string>
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): array { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. The platform's reserve terms.
     * @return PartnerAppPlatformReserveInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reserve is omitted; use hasReserve() or valueOrDefault().
     */
    public function getReserve(): mixed { return $this->get('reserve'); }
    public function hasReserve(): bool { return $this->has('reserve'); }
    /** Where the app is in platform onboarding. No value is final. Value enum: "not_started", "pending_review", "approved", "limited", "rejected".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. anyOf[1] (Value): {@see PartnerAppPlatformTermsAcceptanceInput}. Who accepted a version of Flint's platform terms, and when. anyOf[2] (Value): null.
     * @return array{'accepted_at': string|\DateTimeInterface, 'accepted_by': ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'platform_terms_version': string, ...}|object|null
     * @throws SdkError When terms_acceptance is omitted; use hasTermsAcceptance() or valueOrDefault().
     */
    public function getTermsAcceptance(): mixed { return $this->get('terms_acceptance'); }
    public function hasTermsAcceptance(): bool { return $this->has('terms_acceptance'); }
}
