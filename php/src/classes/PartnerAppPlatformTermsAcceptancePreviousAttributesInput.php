<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $accepted_at
 * @property-read ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $accepted_by
 * @property-read string|null $platform_terms_version
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformTermsAcceptancePreviousAttributesInput extends Model {
    /** @param array{'accepted_at'?: string|\DateTimeInterface|null, 'accepted_by'?: ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'platform_terms_version'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformTermsAcceptancePreviousAttributesInput')); }
    /** When Flint recorded the acceptance. anyOf[1] (Value): string. When Flint recorded the acceptance. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When accepted_at is omitted; use hasAcceptedAt() or valueOrDefault().
     */
    public function getAcceptedAt(): mixed { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The credential that accepted: a user for a Dashboard session, or an api_key. anyOf[1] (Value): {@see ResourceReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When accepted_by is omitted; use hasAcceptedBy() or valueOrDefault().
     */
    public function getAcceptedBy(): mixed { return $this->get('accepted_by'); }
    public function hasAcceptedBy(): bool { return $this->has('accepted_by'); }
    /** The platform terms version accepted. anyOf[1] (Value): string. The platform terms version accepted. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When platform_terms_version is omitted; use hasPlatformTermsVersion() or valueOrDefault().
     */
    public function getPlatformTermsVersion(): mixed { return $this->get('platform_terms_version'); }
    public function hasPlatformTermsVersion(): bool { return $this->has('platform_terms_version'); }
}
